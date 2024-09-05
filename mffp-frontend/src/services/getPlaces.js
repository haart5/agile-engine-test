export const getPlaces = () => {
  return fetch('http://localhost:3000/api/csv-data', {
    method: "GET", 
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    return data;
  })
  .catch(err => {
    console.error('Something went wrong: ', err);
  });
};