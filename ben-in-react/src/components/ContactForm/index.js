import React from 'react';
import { validateEmail } from '../../utils/emailHelper';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
  return (
    <>
      <Form id='contactForm'>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control required name='name' placeholder='your name' />
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            name='email'
            type='email '
            placeholder='email@gmail.com'
          />
        </Form.Group>
        <Form.Group controlId='subject'>
          <Form.Label>Subject</Form.Label>
          <Form.Control required name='subject' placeholder='subject' />
        </Form.Group>
        <Form.Group controlId='message'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            name='message'
            rows='6'
            as='textarea'
            placeholder='your message'
          />
        </Form.Group>

        <Button type='submit'>Submit</Button>
      </Form>
    </>
  );
};

export default ContactForm;
