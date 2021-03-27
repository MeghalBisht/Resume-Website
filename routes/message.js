const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Message = require("../models/message");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const { SENDGRID_API } = require("../config/keys");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: SENDGRID_API,
    },
  })
);

router.post("/message", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(422).json({ error: "All fields are required!" });
  const sentMessage = new Message({
    name,
    email,
    message,
  });
  sentMessage
    .save()
    .then((msg) => {
      transporter.sendMail({
        to: "mailtomeghu25@gmail.com",
        from: "mailtomeghu25@gmail.com",
        subject: `You've received a message via resume!`,
        html: `
        <div style="background-color: #dbd3fb;
        margin: auto;
        align-self:center;
        width: 700px;
        min-height: 250px;
        padding: 25px;
        border-radius: 6px;">
          <h2 style="color: #290444; 
          font-size: 25px; 
          text-align: center;">New message from ${msg.name}</h2>
          <p style="font-size: 16px;
          font-weight: bold;
          background-color: #fff;
          padding: 20px 8px;
          text-align: center;
          margin: 15px 0;
          border-radius: 4px;">${msg.message}</p>
          <span style="font-size: 16px;
           padding: 4px 0;
           text-align: center;
           border-radius: 4px;">Their email is : ${msg.email}</span> 
        </div>
        `,
      });
      res.json({ response: msg });
    })
    .catch((err) => res.status(422).json({ error: "Something went wrong!" }));
});

module.exports = router;
