import React, { useState } from 'react';

export default function ConditionalAndList() {
    const [isVisible, setIsVisible] = useState(true);
    const items = [
        { id: 1, name: 'Apple', category: 'Fruits' },
        { id: 2, name: 'Broccoli', category: 'Vegetables' },
        { id: 3, name: 'Banana', category: 'Fruits' },
        { id: 4, name: 'Carrot', category: 'Vegetables' }
    ];

    return (
        <div>
            <h2>Conditional Rendering & Lists</h2>

            <div style={{ marginBottom: '20px' }}>
                <h3>1. Conditional Visibility</h3>
                <button onClick={() => setIsVisible(!isVisible)} style={{ marginBottom: '10px' }}>
                    {isVisible ? 'Hide Content' : 'Show Content'}
                </button>
                {isVisible && (
                    <div style={{ padding: '15px', background: '#d4edda', color: '#155724', borderRadius: '4px' }}>
                        This content is conditionally rendered depending on state!
                    </div>
                )}
            </div>

            <div>
                <h3>2. Lists & Keys</h3>
                <ul>
                    {items.map(item => (
                        <li key={item.id} style={{ margin: '5px 0' }}>
                            <strong>{item.name}</strong> - <span>{item.category}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
