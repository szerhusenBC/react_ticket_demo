import {Alert, Button, Form} from "react-bootstrap";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from 'react-hook-form';
import {ticketSchema, useTicketStore} from "./TicketStore";

const NewTicketForm = () => {
    const addTicket = useTicketStore(state => state.addTicket);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(ticketSchema),
    });

    const onFormSubmit = handleSubmit(data => addTicket({
        subject: data.subject,
        description: data.description,
        severity: data.severity,
    }));

    return (
        <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" {...register('subject')}/>
            </Form.Group>
            {errors.subject?.message && <Alert variant={"danger"}>{errors.subject?.message as string}</Alert>}

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} {...register('description')}/>
            </Form.Group>
            {errors.description?.message && <Alert variant={"danger"}>{errors.description?.message as string}</Alert>}

            <Form.Group className="mb-3" controlId="severity">
                <Form.Label>Severity</Form.Label>
                <Form.Select aria-label="Default select example" {...register('severity')}>
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>
                </Form.Select>
            </Form.Group>
            {errors.severity?.message && <Alert variant={"danger"}>{errors.severity?.message as string}</Alert>}

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default NewTicketForm;