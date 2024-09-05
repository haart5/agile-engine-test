import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import RecomendedCards from './components/RecomendedCards';
import Directory from './components/Directory';
import { getPlaces } from './services/getPlaces';

const App = () => {

  const [data, setData] = useState([]);
  const [recomended, setRecomended] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const placesFromService = await getPlaces()
      setData(placesFromService)
    }
    fetchData()
  }, []) 

  useEffect(() => {
    if (data.length > 0) {
      getRecomendations()
    }
  }, [data])

  const getRecomendations = () => {
    const placesIndexes = new Set()

    while (placesIndexes.size < 6) {
      const randomIndex = Math.floor(Math.random() * data.length)
      placesIndexes.add(randomIndex)
    }

    const selectedPlaces = Array.from(placesIndexes).map(index => data[index])

    setRecomended(selectedPlaces)
  }

  return (
    <Router>
      <div className="font-sans antialiased text-gray-900">
        <Routes>
          <Route path="/" element={
            <>
              <header className="bg-yellow-400 py-16">
                <div className="container mx-auto text-center">
                  <h1 className="text-4xl font-bold">Welcome to the Food Truck Finder</h1>
                  <p className="text-xl mt-4">Discover the best food trucks in your city!</p>
                </div>
              </header>

              <section className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-8">Recommended Food Trucks</h2>
                  <p className='text-1xl mb-8'>There are some recommendations of new places to eat, give them a try!</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <RecomendedCards data={recomended}/>
                  </div>
                </div>
              </section>

              <section className="py-16">
                <div className="container mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-4">Explore More Food Trucks</h2>
                  <p className="text-lg mb-8">Find more food trucks near you and enjoy a variety of cuisines.</p>
                  <Link to="/directory" className="bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">View All Food Trucks</Link>
                </div>
              </section>

              <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto text-center">
                  <p>Contact me: martinez.rafael.q@gmail.com | +52 (618) 219-3638</p>
                  <p>&copy; Technical Test for Agile Engine by Arturo Martinez</p>
                </div>
              </footer>
            </>
          } />
          <Route path="/directory" element={<Directory data={data} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;