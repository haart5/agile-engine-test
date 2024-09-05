const DetailsSection = ({ place, onClose }) => {
  const { Applicant, LocationDescription, FoodItems, dayshours, permit } = place;

  const formattedMenu = FoodItems.replace(':', ',')
  const formattedDaysHours = dayshours.replace(':',' ')

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">{Applicant}</h2>
        <p className="mb-4"><b>Full Menu:</b> {formattedMenu || 'Not available'}</p>
        <p className="mb-2"><b>Days:</b> {formattedDaysHours || 'Not found'}</p>
        <p className="mb-2"><b>Address:</b> {LocationDescription || 'Not found'}</p>
        <p className="mb-2"><b>Permit:</b> {permit || 'Not found'}</p>

      </div>
    </div>
  );
};

export default DetailsSection