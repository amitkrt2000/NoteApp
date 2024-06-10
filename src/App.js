import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import GroupPopup from './Components/GroupPopup';
import './App.css';

function App() {
    const [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')) || []);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || {});

    useEffect(() => {
        localStorage.setItem('groups', JSON.stringify(groups));
    }, [groups]);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addGroup = (group) => {
        setGroups([...groups, group]);
    };

    const handleGroupClick = (group) => {
        setSelectedGroup(group);
    };

    const handleSaveNote = (note) => {
        if (selectedGroup) {
            const groupNotes = notes[selectedGroup.name] || [];
            setNotes({ ...notes, [selectedGroup.name]: [...groupNotes, note] });
        }
    };

    return (
        <div className="app">
            <Sidebar 
                groups={groups} 
                onAddGroup={() => setShowPopup(true)} 
                onGroupClick={handleGroupClick} 
            />
            <MainContent 
                selectedGroup={selectedGroup} 
                notes={notes[selectedGroup?.name] || []} 
                onSaveNote={handleSaveNote} 
            />
            {showPopup && <GroupPopup onClose={() => setShowPopup(false)} onSave={addGroup} />}
        </div>
    );
}

export default App;