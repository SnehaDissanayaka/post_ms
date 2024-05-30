import React from 'react';
import './../App.css';

function Popup({ show, onClose, children }) {
    if (!show) {
        return null;
    }

    return (
        <div className="popup-overlay">
        <div className="popup-content">
            <button className="close-button" onClick={onClose}>×</button>
            {children}
        </div>
        </div>
    );
}

export default Popup;
