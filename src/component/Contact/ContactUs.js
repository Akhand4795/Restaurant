import React from "react";
import "./ContactUs.css";
import Navbar from "../HomePage/Navbar";

const ContactUs = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="container">
        {/* <h3>Contact Form</h3> */}
        <form>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="country">Country</label>
          <select id="country" name="country">
            <option value="bangladesh">Bangladesh</option>
            <option value="india">India</option>
            <option value="nepal">Nepal</option>
            <option value="pakistan">Pakistan</option>
            <option value="srilanka">Sri Lanka</option>
          </select>

          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px" }}
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default ContactUs;
