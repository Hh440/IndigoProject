const { PrismaClient } = require('@prisma/client')

const prisma= new PrismaClient()
const nodemailer = require('nodemailer')

const notification=async(ree,res)=>{


    try{
        const notification = await prisma.notification.create({
            notification_id: "2",
            flight_id: "6E 2342",
            message : "Your flight 6E 2342 is delayed. New departure time: 2024-07-26T17:00:00Z. Departure gate: C3.",
           timestamp: "2024-07-26T15:30:00Z",
           method: "Email",
          recipient: "user@example.com"
        }) 


        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
               user: 'karli.waters87@ethereal.email',
               pass: '9MuBTvB77AJ4wuV41k'
            },
          });
          
          // async..await is not allowed in global scope, must use a wrapper
          if(notification.method=="Email"){
          async function main() {
            // send mail with defined transport object
            const info = await transporter.sendMail({
              from: '"Indigo"  <Indigoarilines>', // sender address
              to: notification.recipient, // list of receivers
              subject: "Flight status", // Subject line
              text: notification.timestamp, // plain text body

            });
          
            console.log("Message sent: %s", info.messageId);

            res.josn(info)

        }

        main().catch(console.error)

    }




    }catch(e){
        return res.json({ error: 'Error adding notification', details: e.message });
    }

}


module.exports=notification