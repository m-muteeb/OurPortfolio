import React, { useState } from 'react';
import { Form, Input, Button, Card, notification } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import useFirestore from '../hooks/useFirestore';
import '../scss/_contact.scss';

const ContactForm = () => {
  const { addMessage } = useFirestore();
  const [loading, setLoading] = useState(false);  // Add loading state

  const onFinish = async (values) => {
    setLoading(true);  // Start loading
    try {
      const { email, message } = values;
      await addMessage({ email, message });
      notification.success({
        message: 'Message Sent',
        description: 'Your message has been sent. I will contact you soon.',
      });
    } catch (error) {
      notification.error({
        message: 'Message Not Sent',
        description: 'There was an error sending your message. Please try again.',
      });
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="contact-form-container">
      <Card className="contact-card">
        <div className="info-section">
          <h2>Get in Touch</h2>
          <p><FontAwesomeIcon icon={faPhone} /> +92 3096829046</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> muteebramzan3@gmail.com</p>
          <div className="social-icons">
            <a href="https://wa.me/923096829046" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://www.facebook.com/ladlamian.muteeb.1" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://github.com/miangmuteeb" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/m-muteeb-ramzan-99b489283/" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="form-section">
          <h2>Send Me a Message</h2>
          <Form
            className='mt-4'
            name="contact"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Your Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Your Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Subject"
              name="subject"
              rules={[{ required: true, message: 'Please input the subject!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please input your message!' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default ContactForm;
