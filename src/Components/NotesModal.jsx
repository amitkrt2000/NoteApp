import React, { useState } from 'react';

function NotesModal({ group, onClose, onSave }) {
    const [noteContent, setNoteContent] = useState('');

    const handleSave = () => {
        if (noteContent) {
            onSave({
                content: noteContent,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
            });
            onClose();
        }
    };

    return (
        <div className="popup-background" onClick={onClose}>
            <div className="popup notes-modal" onClick={(e) => e.stopPropagation()}>
                <div className="notes-modal-header">
                    <div
                        className="group-icon"
                        style={{ backgroundColor: group.color }}
                    >
                        {group.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span>{group.name}</span>
                </div>
                <textarea
                    className="note-input"
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    placeholder="Write your note here..."
                />
                <button
                    className="save-note-button"
                    onClick={handleSave}
                    disabled={!noteContent}
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default NotesModal;