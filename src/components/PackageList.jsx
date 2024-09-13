import React from 'react';

const PackageList = ({ packages, onSelect }) => {
    if (packages.length === 0) {
        return <p>No packages found</p>;
    }

    return (
        <div style={{ width: '100%', padding: '10px' }}>
            <h2>Available Travel Packages</h2>
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Destination</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Travel Date</th>
                        <th>Duration</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map((pkg) => (
                        <tr key={pkg.id}>
                            <td>{pkg.destination}</td>
                            <td>{pkg.price}</td>
                            <td>{pkg.rating}</td>
                            <td>{pkg.Travel_Date}</td>
                            <td>{pkg.duration}</td>
                            <td onClick={() => onSelect(pkg)}><button>Click here to get details</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PackageList;