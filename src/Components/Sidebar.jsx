import React from 'react';

function Sidebar({ groups, onAddGroup, onGroupClick }) {
    return (
        <div className="sidebar">
            <h1 style={{paddingleft:'25px'}}>Pocket Notes</h1>
            <button className="create-group-button" onClick={onAddGroup}>
                <span className="plus-icon">+</span> <p style={{color:"white",fontSize:'large'}}>Create Notes Group</p>
            </button>
            <div className="group-list">
                {groups.map((group, index) => (
                    <div className="group-item" key={index} onClick={() => onGroupClick(group)}>
                        <div className="group-icon" style={{ backgroundColor: group.color }}>
                            {group.name.substring(0, 2).toUpperCase()}
                        </div>
                        <span>{group.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;