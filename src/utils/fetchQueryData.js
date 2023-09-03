import axios from 'axios';

const fetchQueryData = async (result) => {
  try {
    const res = await axios.post(
      'https://api.spacexdata.com/v4/capsules/query',
      {
        query: {
          status: {
            $eq: result.status.toLowerCase(),
          },
          water_landings: {
            $eq: 1,
          },
        },
        options: {
          limit: 9, // Adjust the limit as needed
          page: 1, // Adjust the page number as needed
        },
      },
    );
    return res.data;
  } catch (error) {
    // Handle any errors here
    console.error('Error fetching data:', error);
  }
  return 'ok';
};

export default fetchQueryData;
