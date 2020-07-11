import React, { useState } from "react";
import "./Contact.css";
import SendIcon from "@material-ui/icons/Send";
import { Alert } from "@material-ui/lab";
import axios from "axios";

function Contact() {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading,setLoading] = useState(false)
  const [alertMessage, setAlertMessage] = useState("");

  const formInputHandler = (e) => {
    setFormFields({
      ...formFields,
      [e.target.id]: e.target.value,
    });
  };

  const formSubmitHandler = (e) => {
    setLoading(true)
    e.preventDefault();
    const { name, email, message } = formFields;
    if (!name || !email || !message) {
      setLoading(false)
      setAlert(true);
      setAlertMessage("Found missing fields!");
      return
    }
    axios
      .post("/message", {
        name,
        email,
        message,
      })
      .then((data) => {
        setSuccess(true);
        setFormFields({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false)
      })
      .catch((err) => {
        setAlert(true);
        setAlertMessage("Some error found! Try again");
        setFormFields({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false)
      });
  };

  return (
    <div id="contact" className="page contact">
      <div className="bg-underlay-contact bg-underlay"></div>
      <div className="contact-content">
        <h1>Say Hi!</h1> 
        <form method="POST" className="form" onSubmit={formSubmitHandler}>
        {alert ? (
          <Alert className="alert" onClose={() => setAlert(false)} severity="error">
            {alertMessage}
          </Alert>
        ) : (
          ""
        )}
        {success ? (
          <Alert className="alert" onClose={() => setSuccess(false)} severity="success">
            <p className="success-msg">
            Thanks for your message! Expect a reply soon
            </p>
          </Alert>
        ) : (
          ""
        )}
          <input
            id="name"
            type="text"
            value={formFields.name}
            onChange={formInputHandler}
            placeholder="Name"
          />
          <input
            id="email"
            type="email"
            value={formFields.email}
            onChange={formInputHandler}
            placeholder="Email"
          />
          <textarea
            id="message"
            value={formFields.message}
            onChange={formInputHandler}
            rows="8"
            placeholder="Your message here.."
          />
          <button className="form-btnn" disabled={loading ? true: false} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
