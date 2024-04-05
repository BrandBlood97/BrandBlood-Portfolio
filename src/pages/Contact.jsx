import React from 'react';
import styles from './styles/Contact.module.css';

const Contact = () => (
  <section className={styles.contactForm}>
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" required />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows="3" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </section>
);

export default Contact;
