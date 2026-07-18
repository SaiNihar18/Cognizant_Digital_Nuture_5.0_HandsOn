import React, { Component } from 'react';

class ClassComponentDemo extends Component {
    render() {
        return (
            <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', margin: '10px 0' }}>
                <h4>Class-Based Component</h4>
                <p>Hello from a traditional React Class component! Uses render() method.</p>
            </div>
        );
    }
}

function FunctionalComponentDemo() {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', margin: '10px 0' }}>
            <h4>Functional Component</h4>
            <p>Hello from a modern React Functional component! Uses simple functions returning JSX.</p>
        </div>
    );
}

export default function ClassAndFuncComponent() {
    return (
        <div>
            <h2>Component Types (Class vs Functional)</h2>
            <ClassComponentDemo />
            <FunctionalComponentDemo />
        </div>
    );
}
