import React, { useState } from 'react';
import SearchFilter from './components/SearchFilter';
import PackageList from './components/PackageList';
import PackageDetails from './components/PackageDetails';
import BookingForm from './components/BookingForm';
import style from './components/style.css';

function App() {

  const mockPackages = [
    {
      id: 1,
      destination: 'Paris',
      description: 'Explore the beautiful city of Paris!',
      price: 1200,
      rating: 4.7,
      duration: 5,
      Travel_Date: "10/11/2024"
    },
    {
      id: 2,
      destination: 'New York',
      description: 'Visit the bustling city of New York!',
      price: 900,
      rating: 4.5,
      duration: 4,
      Travel_Date: "12/11/2024"
    },
    {
      id: 3,
      destination: 'Tokyo',
      description: 'Experience the wonders of Tokyo!',
      price: 1500,
      rating: 4.8,
      duration: 6,
      Travel_Date: "12/10/2024"
    },
  ];

  const [filteredPackages, setFilteredPackages] = useState(mockPackages);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSearch = (searchCriteria) => {

    const filterdata = mockPackages.filter(pkg =>
      pkg.destination.toLowerCase().includes(searchCriteria.destination.toLowerCase()) &&
      pkg.price <= searchCriteria.budget && pkg.Travel_Date.toLowerCase().includes(searchCriteria.dates.toLowerCase())
    );
    setFilteredPackages(filterdata);

  };

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleBookingSubmit = (booking) => {
    setBookingDetails(booking);
    alert(`Booking Successful! Thank you ${booking.name}`);
  };

  return (
    <div>
      <SearchFilter onSearch={handleSearch} />
      <PackageList packages={filteredPackages} onSelect={handleSelectPackage} />
      <PackageDetails pkg={selectedPackage} onBook={() => setBookingDetails(true)} />
      {bookingDetails && <BookingForm onSubmit={handleBookingSubmit} />}
    </div>
  );
}

export default App;