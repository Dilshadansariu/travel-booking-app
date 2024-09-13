import React, { useState } from 'react';

const BookingForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dates, setDates] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, email, dates });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Booking Information</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="date"
                placeholder="Travel Dates"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                required
            />
            <button type="submit">Submit Booking</button>
        </form>
    );
};

export default BookingForm;