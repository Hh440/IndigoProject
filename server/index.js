const express = require('express')
const app = express()
const port = 3000
const { PrismaClient } = require('@prisma/client')
const cors = require('cors')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const twilio= require('twilio')
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const { join } = require('@prisma/client/runtime/library')

dotenv.config()


app.use(cors())

const prisma = new PrismaClient()

app.use(express.json())

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const accountSid = process.env.TWILIO_AUTH_SID;
const accounttoken= process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid,accounttoken);


app.get('/test-connection', async (req, res) => {
    try {
      await prisma.$connect();
      res.json({ message: 'Prisma connected successfully!' });
    } catch (e) {
      console.error('Prisma connection error:', e);
      res.status(500).json({ error: 'Prisma connection error', details: e.message });
    }
  });

app.get('/allFlight', async (req,res) => {
   
    const allFlight = await prisma.flight.findMany();
  
    return res.json(allFlight);
  });
  
  app.post('/add-Data', async (req,res) => {
    

    const body= req.body;
    
    
  
    try {
      const flight = await prisma.flight.create({
        data: {
          flightId: body.flightId,
          airline: body.airline,
          status: body.status,
          departureGate: body.departureGate,
          arrivalGate: body.arrivalGate,
          scheduledDeparture: new Date('2024-07-26T14:00:00Z'),
          scheduledArrival: new Date('2024-07-26T18:00:00Z'),
          actualDeparture: null,
          actualArrival: null,
        },
      });
  
  
  
      console.log(flight);
      return res.json(flight);
    } catch (e) {
      console.error('Error during flight creation:', e);
      res.status(403);
      return res.json({ error: 'Error while creating flight', details: e.message });
    }
  });


  app.get('/flight/:id', async (req,res) => {
    
    const id = req.params.id
  
    try {
      const flight = await prisma.flight.findUnique({
        where: {
           id:id
        },select:{
          flightId: true,
          airline: true,
         status: true,
         departureGate: true,
         arrivalGate: true,
         scheduledDeparture: true,
         scheduledArrival: true,
         actualDeparture: true,
         actualArrival: true,
        }
      });
     if(flight){
        return res.json({flight})
     }else{
        res.status(400).json({error:'FLight not found'})
     }
    } catch (e) {
      console.error('Error fetching flight data:', e);
      res.status(500);
      return res.json({ error: 'Error fetching flight data', details: e.message });
    }
  });
  



app.post('/flight-check', async (req,res) => {

    const body = await req.body;
  
    try {
      const flight = await prisma.flight.findFirst({
        where: {
          flightId: body.flightId,
        },
      });
  
      if (!flight) {
        console.log('Flight not found for ID:', body.flightId);
        res.status(404);
        return res.json({ error: 'Flight not found' });
      }
  
      return res.json(flight);
    } catch (e) {
      console.error('Error fetching flight data:', e);
      res.status(500);
      return res.json({ error: 'Error fetching flight data', details: e.message });
    }
  })
  


  app.post('/notification',async(req,res)=>{

    const body = await req.body


    try{

      console.log("Incoming data",body)

      const flight = await prisma.flight.findUnique({
        where: { flightId: body.flightId  }
      });
  
      if (!flight) {
        console.log("Flight not Found",body.flightId)
        throw new Error("Flight not found");
      }

      console.log("Flight found:", flight);

      

      const notification = await prisma.notification.create({
        data:{
          notificationId: body.notificationId,
          flightId: flight.id,
          message : body.message,
         timestamp: "2024-07-26T15:30:00Z",
         method: body.method,
        recipient: body.recipient
        },
      }) 
  
      console.log("Notification",notification)

        
        
          if(notification.method==="Email"){
          // Notification through mail

            const transporter = nodemailer.createTransport({
              host: "smtp.ethereal.email",
              port: 587,
              auth: {
                 user: 'jesus.weimann45@ethereal.email',
                 pass: '49frsneUm7r7h1Qgs3'
              },
            });

          async function main() {
          // send mail with defined transport object
            const info = await transporter.sendMail({
              from: '"Indigo"  <noreply@indigo.com>', 
              to: notification.recipient, 
              subject: "Flight status", 
              text: notification.timestamp,

            });
            console.log("Message sent: %s", info.messageId);
            res.json(info)
       }
        main().catch(console.error)
    }else if(notification.method==="SMS"){
    // Notification through SMS


      async function createMessage() {
        const message = await client.messages.create({
          body: notification.message,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: notification.recipient,
        });
        console.log(message.body);
        res.json(message)
      }
    
      createMessage();
    }else{
    // Notification through Application

      const fcmToken=process.env.FCM_TOKEN
      const message = {
        notification: {
          title: 'Flight Status',
          body: notification.message
        },
        token: fcmToken
      };
  
      try {
        const response = await admin.messaging().send(message);
        res.json(message)
        res.status(200).send('Successfully sent message: ' + response);
      } catch (error) {
        res.status(500).send('Error sending message: ' + error);
      }

    }


    


  }catch(e){
      return res.json({ error: 'Error adding notification', details: e.message });
  }

  });
  
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})