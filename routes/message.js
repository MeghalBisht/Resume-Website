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
        html: `<h2>
        New message from ${msg.name}
        </h2>
        <h4>*****${msg.name} says******</h4>
        <p>${msg.message}</p>
        <p>Email is : ${msg.email}</p> 
        `,
      });
      res.json({ response: msg });
    })
    .catch((err) => res.status(422).json({ error: "Something went wrong!" }));
});

module.exports = router;
