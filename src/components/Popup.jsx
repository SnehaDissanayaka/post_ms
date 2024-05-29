import React from 'react';
import '../App.css';

const Popup = ({ show, onClose, children }) => {
    if (!show) return null;

    return (
        <div className="popup-overlay">
        <div className="popup-content">
            <button className="close-button" onClick={onClose}>
            &times;
            </button>
            {children}
        </div>
        </div>
    );
};

export default Popup;
