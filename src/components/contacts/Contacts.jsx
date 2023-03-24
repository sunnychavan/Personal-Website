import React from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <section id="contacts">
      <h5> Get in Touch </h5>
      <h2> Contact Me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4> Email</h4>
            <h5>sc2448@cornell.edu</h5>
            <a href="mailto:sc2448@cornell.edu"> Send a Message </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
