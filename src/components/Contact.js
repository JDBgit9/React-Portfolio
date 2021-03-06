import React from 'react';
import "./Contact.css";

function Contact() {
    return (
        
    
<div className="container">
    <h4>Contact Me</h4>
  <div className="row">
    <div className="col-md-8">
    <form method="post" action="mailto:jdbwebdev@protonmail.com" >
        <label for="fname" style={{color: "seashell"}}>First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your first name.." />
        <label for="lname" style={{color: "seashell"}}>Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
        <label for="country" style={{color: "seashell"}}>Country</label>
        <select id="country" name="country" >
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject" style={{color: "seashell"}}>Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
        <input type="submit" value="Send Email" />
      </form>
      <br />
      <p>Follow me on linkedin</p>
      <div className="col-md-8-text-center">
        <a href="https://www.linkedin.com/in/jamesdbeeks/"><img src="./image/linkedin.jpeg" style={{width: "10%", padding: "0px", margin: "7%"}} /></a>
      </div>
    </div>
  </div>
  </div>


    )
}

export default Contact
