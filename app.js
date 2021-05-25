const TWILIO_ID = process.env.TWILIO_ID;
const TWILIO_SK = process.env.TWILIO_SK;

const client = require('twilio')(TWILIO_ID, TWILIO_SK);

client.messages
  .create({
     from: 'whatsapp:+14155238886',
     body: 'Te hemos contactado por que has pasado nuestro primer filtro',
     to: 'whatsapp:+573215374304'
   })
  .then(message => console.log(message.sid));