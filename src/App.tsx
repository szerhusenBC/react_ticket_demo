import './App.css'
import {Col, Container, Row} from "react-bootstrap";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import TicketStats from "./TicketStats";

function App() {

    return (
        <Container fluid={true}>
            <Row>
                <Col md={4}>
                    <NewTicketForm/>
                    <TicketStats/>
                </Col>
                <Col md={8}>
                    <TicketList/>
                </Col>
            </Row>
        </Container>
    )
}

export default App
