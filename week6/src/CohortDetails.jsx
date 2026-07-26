import React from 'react';

export default function CohortDetails({ cohort }) {
    if (!cohort) {
        return <div className="no-cohort">No cohort details available</div>;
    }

    return (
        <div className="cohort-details-card" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', background: '#fff' }}>
            <h3>{cohort.cohortCode}</h3>
            <h4>{cohort.cohortName}</h4>
            <p><strong>Start Date:</strong> {cohort.startDate}</p>
        </div>
    );
}
