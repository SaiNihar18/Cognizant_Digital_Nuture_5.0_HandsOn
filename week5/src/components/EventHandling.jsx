import React, { useState } from 'react';

export default function EventHandling() {
    const [inputValue, setInputValue] = useState('');
    const [clickCount, setClickCount] = useState(0);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        setClickCount(prev => prev + 1);
    };

    return (
        <div>
            <h2>Event Handling</h2>
            
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Type something:</label>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                    style={{ padding: '8px', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <p style={{ marginTop: '5px' }}>Current Input: <strong>{inputValue || '(Empty)'}</strong></p>
            </div>

            <div>
                <button onClick={handleButtonClick} style={{ padding: '10px 15px', borderRadius: '4px', cursor: 'pointer' }}>
                    Click Counter Button
                </button>
                <p style={{ marginTop: '5px' }}>Clicks: <strong>{clickCount}</strong></p>
            </div>
        </div>
    );
}
