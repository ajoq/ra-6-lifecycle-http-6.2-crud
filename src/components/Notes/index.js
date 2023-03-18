import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import NotesHeader from '../NotesHeader';
import NotesList from '../NotesList';
import NotesAdd from '../NotesAdd';

function Notes() {
    const [notes, setNotes] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ status: false, text: '' });
    const [formDisable, setformDisable] = useState(false);
    const [text, setText] = useState('');

    const loadData = () => {
        setLoading(true);
        setError({ status: false, text: '' });
        fetch('http://localhost:7777/notes')
            .then((response) => response.json())
            .then((data) => {
                setNotes(data);
                setLoading(false);
                setformDisable(false);
            })
            .catch(() => {
                setLoading(false);
                setError({
                    status: true,
                    text: 'Ошибка соединения с сервером',
                });
                setformDisable(true);
            });
    };

    const handleAddNote = (evt) => {
        evt.preventDefault();

        fetch('http://localhost:7777/notes', {
            method: 'POST',
            body: text,
        })
            .then(() => {
                setText('');
                loadData();
            })
            .catch(() => {
                setError({
                    status: true,
                    text: 'Ошибка соединения с сервером',
                });
                setformDisable(true);
            });
    };

    const handleFormChange = (evt) => {
        setText(evt.target.value);
    };

    const handleUpdate = () => {
        loadData();
    };

    const handleRemove = (id) => {
        fetch(`http://localhost:7777/notes/${id}`, { method: 'DELETE' }).then(
            () => loadData()
        );
    };

    useEffect(loadData, []);

    return (
        <Container className="mt-4">
            <NotesHeader onUpdate={handleUpdate} />
            <NotesList
                loading={loading}
                error={error}
                notes={notes}
                onRemoveNote={handleRemove}
            />
            <NotesAdd
                text={text}
                loading={loading}
                error={error}
                formDisable={formDisable}
                onFormChange={handleFormChange}
                onAddNote={handleAddNote}
            />
        </Container>
    );
}

export default Notes;
