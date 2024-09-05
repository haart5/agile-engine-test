import { useState } from 'react'
import DetailsSection from './DetailsSection';

const RecomendedCards = (recomended) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const { data } = recomended

  const shortenedMenu = (menu) => {
    const maxLength = 100

    if (menu) {
      const formattedMenu = menu.replace(':', ',')
      return formattedMenu.length > maxLength 
        ? formattedMenu.slice(0, maxLength) + '...'
        : formattedMenu
    } else {
      return 'Not found'
    }
  }

  return data.map((element) => (
    <div key={element.locationId} className="flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm h-85 flex flex-col justify-between items-center">
        <h3 className="text-xl font-semibold text-center">{element.Applicant}</h3>
        <p className="mt-4 text-center"><b>Menu:</b> {shortenedMenu(element.FoodItems)}</p>
        <p className="mt-4 text-center"><b>Address:</b> {element.LocationDescription || 'Not found'}</p>
        
        <div className="mt-4">
              <button
                onClick={() => {
                  setSelectedPlace(element);
                  setIsModalOpen(true);
                }}
                className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
              >
                View Details <span className="ml-2">→</span>
              </button>
        </div>
      </div>
      {isModalOpen && selectedPlace && (
        <DetailsSection
          place={selectedPlace}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  ))
}

export default RecomendedCards
