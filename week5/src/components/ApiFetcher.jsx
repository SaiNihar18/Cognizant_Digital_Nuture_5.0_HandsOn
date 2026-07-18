import React, { useState, useEffect } from 'react';

export default function ApiFetcher() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (!res.ok) throw new Error('Network response error');
                return res.json();
            })
            .then(data => {
                setUsers(data.slice(0, 5));
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading users from API...</p>;
    if (error) return <p style={{ color: 'red' }}>Error loading data: {error}</p>;

    return (
        <div>
            <h2>REST API Consumption</h2>
            <p>Fetched users dynamically from <code>jsonplaceholder.typicode.com/users</code>:</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                <thead>
                    <tr style={{ background: '#eee', textAlign: 'left' }}>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>ID</th>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>Name</th>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>Username</th>
                        <th style={{ padding: '8px', border: '1px solid #ddd' }}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u.id}>
                            <td style={{ padding: '8px', border: '1px solid #ddd' }}>{u.id}</td>
                            <td style={{ padding: '8px', border: '1px solid #ddd' }}>{u.name}</td>
                            <td style={{ padding: '8px', border: '1px solid #ddd' }}>{u.username}</td>
                            <td style={{ padding: '8px', border: '1px solid #ddd' }}>{u.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
