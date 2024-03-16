import React from 'react';
import styles from './contactForm.module.scss'

const ContactForm = () => {
  return (
    <div>
      <form action='#' className={styles.formContainer}>
        <div>
          <label htmlFor='name'>Your name</label>
          <input type='text' id='name' />
        </div>

        <div>
          <label htmlFor='phone'>Phone Number</label>
          <input type='text' id='phone' />
        </div>

        <div>
          <label htmlFor='email'>email</label>
          <input type='text' id='email' />
        </div>

        <div>
          <label htmlFor='subject'>subject</label>
          <input type='text' id='subject' />
        </div>

        <div>
          <label htmlFor='message'>message</label>
          <textarea id='message' cols='40' rows='40'></textarea>
        </div>

        <button type='submit'>Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;