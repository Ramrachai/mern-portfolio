import React from 'react';
import styles from './contactForm.module.scss'

const ContactForm = () => {
    return (
      <div>
      <form action="#" className={styles.formContainer}>
          <div>
              <label for="name">Your name</label>
              <input type="text" id="name"/>
          </div>
  
          <div>
              <label for="phone">Phone Number</label>
              <input type="text" id="phone"/>
          </div>
  
          <div>
              <label for="email">email</label>
              <input type="text" id="email"/>
          </div>
  
          <div>
              <label for="subject">subject</label>
              <input type="text" id="subject"/>
          </div>
  
          <div>
              <label for="message">message</label>
              <textarea id="message" cols="40" rows="40"></textarea>
          </div>
  
          <button type="submit">Submit</button>
  
      </form>
      </div>
 
  
 )}
export default ContactForm;