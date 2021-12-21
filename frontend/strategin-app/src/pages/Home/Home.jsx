import { Container, Row, Col } from 'react-bootstrap';
// import {ReactComponent as ReactLogo} from '../../assets/logo.svg';
import './Home.css'
import FormLogin from '../../components/FormLog/FormLog';

const Home = (props) => {

  return (
    <Container fluid className="homePageContainer">
      <Row className="homePageRow">
        <Col md={3} sm={1}/>
        <Col className="homePageColCentral" md={6} sm={10}>
          <FormLogin/>
        </Col>
        <Col md={3} sm={1}/>
      </Row>
    </Container>
  );
}

export default Home;
