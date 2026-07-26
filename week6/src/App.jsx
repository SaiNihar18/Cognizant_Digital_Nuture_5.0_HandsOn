import React, { useState } from 'react';
import { CohortData } from './Cohort';
import CohortDetails from './CohortDetails';
import GitClient from './GitClient';

export default function App() {
    const [selectedCohort, setSelectedCohort] = useState(CohortData[0]);
    const [username, setUsername] = useState('techiesyed');
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFetchRepos = async () => {
        setLoading(true);
        setError(null);
        setRepos([]);
        try {
            const client = new GitClient();
            const repoNames = await client.getRepositories(username);
            setRepos(repoNames);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
            <h1>Academy Cohorts & Git Repositories</h1>
            
            <section style={{ marginBottom: '40px' }}>
                <h2>Cohort Details</h2>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    {CohortData.map(cohort => (
                        <button 
                            key={cohort.cohortCode} 
                            onClick={() => setSelectedCohort(cohort)}
                            style={{ 
                                padding: '10px 15px', 
                                background: selectedCohort?.cohortCode === cohort.cohortCode ? '#6366f1' : '#ccc', 
                                color: '#fff', 
                                border: 'none', 
                                borderRadius: '4px', 
                                cursor: 'pointer' 
                            }}
                        >
                            {cohort.cohortCode}
                        </button>
                    ))}
                </div>
                <CohortDetails cohort={selectedCohort} />
            </section>

            <section>
                <h2>Fetch Github Repositories</h2>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        style={{ padding: '8px', width: '250px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    <button onClick={handleFetchRepos} style={{ padding: '8px 15px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Fetch Repos
                    </button>
                </div>

                {loading && <p>Loading repositories...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                {repos.length > 0 && (
                    <ul>
                        {repos.map(name => (
                            <li key={name}>{name}</li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
}
