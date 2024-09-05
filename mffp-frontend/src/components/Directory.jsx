import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DetailsSection from './DetailsSection';

const Directory = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 9;

  useEffect(() => {
    const loadMoreItems = () => {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setDisplayedData(prevData => [...prevData, ...data.slice(start, end)]);
    };

    loadMoreItems();
  }, [currentPage, data]);

  useEffect(() => {
    const filteredData = data.filter(place =>
      place.Applicant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.FoodItems?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.LocationDescription?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDisplayedData(filteredData.slice(0, itemsPerPage)); // Initialize displayed data
  }, [searchQuery, data]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const shortenedMenu = (menu) => {
    const maxLength = 100;

    if (menu) {
      const formattedMenu = menu.replace(':', ',');
      return formattedMenu.length > maxLength
        ? formattedMenu.slice(0, maxLength) + '...'
        : formattedMenu;
    } else {
      return 'Not found';
    }
  };

  return (
    <>
      <header className="bg-yellow-400 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Directory of Food Trucks</h1>
          <p className="text-xl mt-4">All places where you can find in city, feel free to click in any Food Truck</p>
        </div>
      </header>
      <div className="p-4">
        <div className="mb-6">
          <p className="text-m mt-4" style={{'margin': '15px 0px'}}>Are you looking for something in special?</p>
          <input
            type="text"
            placeholder="Search for food trucks..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedData.map((element) => (
            <div key={element.locationId} className="bg-white shadow-lg rounded-lg p-4" onClick={() => {
              setSelectedPlace(element);
              setIsModalOpen(true);
            }}>
              <h3 className="text-xl font-semibold">{element.Applicant}</h3>
              <p><b>Menu:</b> {shortenedMenu(element.FoodItems) || 'Not found'}</p>
              <p><b>Address:</b> {element.LocationDescription || 'Not found'}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          {displayedData.length < data.length && (
            <button 
              onClick={handleLoadMore} 
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
            >
              Load More
            </button>
          )}
          <Link 
            to="/" 
            className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>Contact me: martinez.rafael.q@gmail.com | +52 (618) 219-3638</p>
          <p>&copy; Technical Test for Agile Engine by Arturo Martinez</p>
        </div>
      </footer>
      {isModalOpen && selectedPlace && (
        <DetailsSection
          place={selectedPlace}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default Directory;
