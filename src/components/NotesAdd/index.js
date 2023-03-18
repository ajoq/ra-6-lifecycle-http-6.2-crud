import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function NotesAdd({ text, formDisable, onFormChange, onAddNote }) {
    return (
        <Form onSubmit={onAddNote}>
            <fieldset disabled={formDisable}>
                <InputGroup>
                    <InputGroup.Text>New note</InputGroup.Text>
                    <Form.Control
                        as="textarea"
                        aria-label="New note"
                        value={text}
                        onChange={onFormChange}
                        required
                    />
                    <Button variant="outline-secondary" type="submit">
                        Add
                    </Button>
                </InputGroup>
            </fieldset>
        </Form>
    );
}

export default NotesAdd;
