import React, { useState } from 'react';

export default function ValidatedForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email format is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setErrors({});
            setSubmitted(true);
        } else {
            setErrors(validationErrors);
            setSubmitted(false);
        }
    };

    return (
        <div>
            <h2>Form Handling & Validations</h2>
            {submitted && (
                <div style={{ padding: '10px', background: '#d4edda', color: '#155724', borderRadius: '4px', marginBottom: '15px' }}>
                    Form submitted successfully!
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '3px' }}>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        style={{ padding: '8px', width: '300px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    {errors.name && <p style={{ color: 'red', fontSize: '0.85rem', margin: '3px 0' }}>{errors.name}</p>}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '3px' }}>Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        style={{ padding: '8px', width: '300px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    {errors.email && <p style={{ color: 'red', fontSize: '0.85rem', margin: '3px 0' }}>{errors.email}</p>}
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '3px' }}>Message</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        style={{ padding: '8px', width: '300px', height: '100px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    {errors.message && <p style={{ color: 'red', fontSize: '0.85rem', margin: '3px 0' }}>{errors.message}</p>}
                </div>

                <button type="submit" style={{ padding: '10px 15px', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
            </form>
        </div>
    );
}
