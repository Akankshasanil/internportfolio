
import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";

import '../css/Contact.css';
import '../css/Loader.css';
import Loader from './Loader';
function Contact() {
  const form = useRef();
  const [Loaders, setLoader] = useState(false);
  

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);
  
    
    emailjs
      .sendForm(
        "service_t9pgi1g",
        "template_67hw9tf",
        form.current,
        "sYuSCfjT7BGM-Fonw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoader(false)
          alert("Form submitted");
        },
        (error) => {
          console.log(error.text);
        });
      
     
  };

  return (
    <div className="content">
      <h1 className="h2">Contact Me</h1>
    
    <form ref={form} onSubmit={sendEmail}>
      <label> Name:</label>
      <input type="text" name="name" required />

      <br />

      <label>Email:</label>
      <input type="email" name="email" />

      <br />

      <label>Message:</label>
      <textarea name="message" />

      <br />
      <label>Phone_no:</label>
      <input type="number" name="Phone_no"/>

      <br />
      {!Loaders?
      <button type="submit"  className="btn">submit</button>
     
      :
      <Loader/>
      
}
<button type="reset" className="btn">reset</button>
    </form>
    </div>
  );
}

export default Contact;
