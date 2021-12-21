
import { Container, Row, Col } from 'react-bootstrap';
import FormReg from '../../components/FormReg/FormReg';

const Register= (props) => {

  return (
    <Container fluid className="homePageContainer">
      <Row className="homePageRow">
        <Col md={3} sm={1}/>
        <Col className="homePageColCentral" md={6} sm={10}>
          <FormReg/>
        </Col>
        <Col md={3} sm={1}/>
      </Row>
    </Container>
  );
}

export default Register;
