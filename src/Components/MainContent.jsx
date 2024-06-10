import React, { useState } from 'react';
import image from '../Images/imagemain.png';
import lock from '../Images/lock.png';
import sendIcon from '../Images/send.png';

function MainContent({ selectedGroup, notes, onSaveNote, onBack }) {
    const [noteText, setNoteText] = useState('');

    const handleSaveNote = () => {
        if (noteText.trim() !== '') {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            onSaveNote({ text: noteText, date, time });
            setNoteText('');
        }
    };

    if (!selectedGroup) {
        return (
            <div className="main-content">
                <img src={image} alt="Pocket Notes" className="landing-image" />
                <div className="text-content">
                    <h1 className="title">Pocket Notes</h1>
                    <p className="description">
                        Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
                    </p>
                </div>
                <div className="lockcontainer">
                    <img className="lock" src={lock} alt="lock" />
                    <p>end-to-end encrypted</p>
                </div>
            </div>
        );
    }

    return (
        <div className="main-content">
            <div className="group-header">
                <div className="group-icon-large" style={{ backgroundColor: selectedGroup.color }}>
                    {selectedGroup.name.substring(0, 2).toUpperCase()}
                </div>
                <span className="group-name">{selectedGroup.name}</span>
            </div>
            <div className="notes-container">
                {notes.map((note, index) => (
                    <div className="note-item" key={index}>
                        <div className="note-date-time">
                            <div className="note-date">{note.date}</div>
                            <div className="note-time">{note.time}</div>
                        </div>
                        <div className="note-text">{note.text}</div>
                    </div>
                ))}
            </div>
            <div className="note-editor">
                <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Write your note here..."
                />
                <button 
                    className="send-button" 
                    onClick={handleSaveNote} 
                    disabled={!noteText.trim()}
                >
                    <img src={sendIcon} alt="send" />
                </button>
            </div>
        </div>
    );
}

export default MainContent;
