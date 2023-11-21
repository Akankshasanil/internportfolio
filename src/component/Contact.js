
import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import svgIcon8 from "../icon/Icon8.svg";
import '../css/Contact.css';
import '../css/Loader.css';
function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async(e) => {
    e.preventDefault();
    setLoading(true);
    
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
          alert("Form submitted")
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
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
      <input type="submit" value="Send" />
      <input type="reset" value="reset" />

      {loading && <div className="loader"> 
           <img src={svgIcon8} alt="gg8" />
        
        </div>}
    </form>
  );
}

export default Contact;
