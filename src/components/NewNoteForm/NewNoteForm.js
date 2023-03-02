import { useState } from 'react';
import { createNote } from '../../utilities/notes-api';

export default function NewNoteForm({ user, setNotes }) {
    const [newNotes, setNewNotes] = useState('');

    async function handleAddNote(evt) {
        evt.preventDefault();
        try {
            const note = await createNote({ text: newNotes, user: user._id });
            setNotes(prevNotes => [...prevNotes, note]);
            setNewNotes('')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <h3>Create a new Note!</h3>
            <textarea
                value={newNotes}
                onChange={(evt) => setNewNotes(evt.target.value)}
                placeholder="Enter notes here..."
                rows={8}
                cols={30}
            />
            <button onClick={handleAddNote}>Save Note</button>
            
        </div>
    );
 }