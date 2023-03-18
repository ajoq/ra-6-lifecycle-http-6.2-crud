import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';

function Note({ note, onRemove }) {
    return (
        <Card body className="note">
            {note.content}
            <CloseButton
                className="note-close"
                onClick={() => onRemove(note.id)}
            />
        </Card>
    );
}

export default Note;
