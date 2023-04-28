import {Alert, Button, Table} from "react-bootstrap";
import {Ticket, useTicketStore} from "./TicketStore";

const TicketList = () => {
    const tickets = useTicketStore(state => state.tickets);
    const clearAllTickets = useTicketStore(state => state.clearAllTickets);

    if (tickets.length === 0) {
        return <Alert variant={"info"}>No Tickets yet</Alert>
    }

    const ticketRows = tickets.map((ticket, index) => <TicketRow key={index} ticket={ticket}/>);

    return (
        <>
            <Table>
                <thead>
                <tr>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Severity</th>
                </tr>
                </thead>
                <tbody>
                {ticketRows}
                </tbody>
            </Table>
            <Button variant={"danger"} onClick={() => clearAllTickets()}>clear all</Button>
        </>
    );
};

const TicketRow = (props: { ticket: Ticket }) => {
    return (
        <tr>
            <td>{props.ticket.subject}</td>
            <td>{props.ticket.description}</td>
            <td>{props.ticket.severity}</td>
        </tr>
    );
}

export default TicketList;