import {useTicketStore} from "./TicketStore";
import {ListGroup} from "react-bootstrap";

const TicketStats = () => {
    const tickets = useTicketStore(state => state.tickets);

    const highCount = tickets.filter(value => value.severity === "high").length;
    const mediumCount = tickets.filter(value => value.severity === "medium").length;
    const lowCount = tickets.filter(value => value.severity === "low").length;

    return (
        <ListGroup className={"mt-4"}>
            <ListGroup.Item variant={"dark"}><b>Statistics:</b></ListGroup.Item>
            <ListGroup.Item>High tickets: {highCount}</ListGroup.Item>
            <ListGroup.Item>Medium tickets: {mediumCount}</ListGroup.Item>
            <ListGroup.Item>Low tickets: {lowCount}</ListGroup.Item>
        </ListGroup>
    );
};

export default TicketStats;