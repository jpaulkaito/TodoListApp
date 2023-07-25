import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ContactForm from '../forms/ContactForm';

const ContactPage = () => {
    return (
        <Container className="mt-5">
            <SubHeader current='Contact Us' />

            <Row className='row-content align-items-center'>
        <Col sm='4'>
          <h5>Our Address</h5>
          <address>
            8795
            <br />
            Richmond, BC V3U 5X7
            <br />
            Canada
          </address>
        </Col>
        <Col>
          <a
            role='button'
            className='btn btn-link'
            href='tel:+12065551234'
          >
            <i className='fa fa-phone' /> 1-206-555-1234
          </a>
          <br />
          <a
            role='button'
            className='btn btn-link'
            href='mailto:fakeemail@fakeemail.co'
          >
            <i className='fa fa-envelope-o' /> jpadayhag@gmail.com
          </a>
        </Col>
      </Row>

            <Row className='row-content'>
                <Col xs='12'>
                    <h2>Send Us Your Feedback</h2>
                    <hr />
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;