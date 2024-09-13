import React from 'react';

const PackageDetails = ({ pkg, onBook }) => {
    if (!pkg) return <p>Please select a package to view details.</p>;

    return (
        <div>
            <h2>{pkg.destination} Details</h2>
            <p>{pkg.description}</p>
            <p>Price: ${pkg.price}</p>
            <p>Rating: {pkg.rating}</p>
            <p>Duration: {pkg.duration} days</p>
            <button onClick={onBook}>Book Now</button>
        </div>
    );
};

export default PackageDetails;