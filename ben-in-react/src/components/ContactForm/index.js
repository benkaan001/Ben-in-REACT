import React, { useState } from 'react';
import { validateEmail } from '../../utils/emailHelper';
import emailjs from 'emailjs-com';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  const [formMessage, setFormMessage] = useState('');
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Invalid entry! Please enter a valid email.');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      }
    }
    if (!errorMessage) {
      setFormInput({ ...formInput, [e.target.name]: e.target.value });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'gmail',
        'template_o0675j4',
        '#contactForm',
        'user_vzfQgmHUq9IXxbc78zDTs'
      )
      .then(
        function (response) {
          console.log(response.text);
          setFormMessage('Message sent!');
        },
        function (error) {
          console.log(error.text);
          setFormMessage(
            'Oh no! Something is not right. Please use the ✉️ link on the upper right corner of the page.'
          );
        }
      );

    e.target.reset();
  };

  return (
    <>
      <Form id='contactForm' onSubmit={sendEmail}>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            name='name'
            placeholder='your name'
            onBlur={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name='email'
            type='email '
            placeholder='email@gmail.com'
            onBlur={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='subject'>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            required
            name='subject'
            placeholder='subject'
            onBlur={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='message'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            name='message'
            rows='6'
            as='textarea'
            placeholder='your message'
            onBlur={handleChange}
          />
        </Form.Group>

        {formMessage && <p className='form-message'>{formMessage}</p>}

        <Button type='submit'>Submit</Button>
      </Form>
    </>
  );
};

export default ContactForm;
