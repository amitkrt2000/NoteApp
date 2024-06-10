import React, { useState } from 'react';

function GroupPopup({ onClose, onSave }) {
    const [groupName, setGroupName] = useState('');
    const [groupColor, setGroupColor] = useState('#FF0000');

    const handleSave = () => {
        if (groupName) {
            onSave({ name: groupName, color: groupColor });
            onClose();
        }
    };

    return (
        <div className="popup-background" onClick={onClose}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <h2>Create New Notes Group</h2>
                <input
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    placeholder="Group Name"
                />
                <div className="color-picker">
                    {['#FF0000', '#0000FF', '#FFC0CB', '#FFFF00', '#008000', '#FFA500'].map((color) => (
                        <div
                            key={color}
                            className="color-circle"
                            style={{ backgroundColor: color }}
                            onClick={() => setGroupColor(color)}
                        />
                    ))}
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}

export default GroupPopup;