import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
    const [destination, setDestination] = useState('');
    const [dates, setDates] = useState('');
    const [budget, setBudget] = useState('');

    const handleSearch = () => {
        onSearch({ destination, dates, budget });
    };

    return (
        <div>
            <h2>Filter Travel Packages</h2>
            <input type="text" placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
            <input type="text" placeholder="Travel Dates" value={dates} onChange={(e) => setDates(e.target.value)} />
            <input type="number" placeholder="Budget" value={budget} onChange={(e) => setBudget(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};
export default SearchFilter;