const express = require('express')
const app = express()
const port = 3000
const { PrismaClient } = require('@prisma/client')
const cors = require('cors')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const twilio= require('twilio')

dotenv.config()


app.use(cors())

const prisma = new PrismaClient()

app.use(express.json())


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
    
    
    
  
    try {
      const flight = await prisma.flight.create({
        data: {
          flightId: '6E 2094',
          airline: 'Indigo',
          status: 'On Time',
          departureGate: 'A12',
          arrivalGate: 'B7',
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
  


  app.post('/notification',async(resq,res)=>{


    try{

      const flight = await prisma.flight.findUnique({
        where: { flightId: "6E 2094" }
      });
  
      if (!flight) {
        throw new Error("Flight not found");
      }

      const notification = await prisma.notification.create({
        data:{
          notificationId: "16",
          flightId: flight.id,
          message : "Your flight 6E 2094 is delayed. New departure time: 2024-07-26T17:00:00Z. Departure gate: C3.",
         timestamp: "2024-07-26T15:30:00Z",
         method: "SMS",
        recipient: "+1234567890"
        },
      }) 


        
        // async..await is not allowed in global scope, must use a wrapper
        if(notification.method==="Email"){

          const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
               user: 'karli.waters87@ethereal.email',
               pass: '9MuBTvB77AJ4wuV41k'
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
  }


  }catch(e){
      return res.json({ error: 'Error adding notification', details: e.message });
  }

  });
  
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})