import React, { useState, useEffect } from 'react';

export default function LifecycleClock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        console.log('Clock component mounted (componentDidMount simulation)');
        
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            console.log('Clock component unmounting (componentWillUnmount simulation)');
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <h2>Component Lifecycle (Hooks)</h2>
            <div style={{ padding: '20px', background: '#eaeaea', borderRadius: '5px', display: 'inline-block', fontSize: '1.5rem', fontWeight: 'bold' }}>
                {time}
            </div>
            <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
                Open console to verify mount and unmount log events.
            </p>
        </div>
    );
}
