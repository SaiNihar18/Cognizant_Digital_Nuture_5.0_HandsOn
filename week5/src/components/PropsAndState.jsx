import React, { useState } from 'react';

function UserCard({ name, role }) {
    return (
        <div style={{ padding: '10px', background: '#f9f9f9', border: '1px solid #ddd', borderRadius: '4px', margin: '5px 0' }}>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Role:</strong> {role}</p>
        </div>
    );
}

export default function PropsAndState() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Props & State</h2>
            
            <div style={{ marginBottom: '20px' }}>
                <h3>1. Component Props</h3>
                <UserCard name="John Doe" role="Administrator" />
                <UserCard name="Jane Smith" role="Software Engineer" />
            </div>

            <div>
                <h3>2. Local Component State</h3>
                <p>Current count value: <strong>{count}</strong></p>
                <button onClick={() => setCount(count + 1)} style={{ marginRight: '10px' }}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </div>
    );
}
