import axios from 'axios';

export const getTest = () => {
  return axios
    .get('http://localhost:3001/test')
    .then((res) => {
      return res.data; // Return the data
    })
    .catch((err) => {
      console.log('Error fetching data: ', err);
      throw err; // Rethrow the error to be caught in the component
    });
};
