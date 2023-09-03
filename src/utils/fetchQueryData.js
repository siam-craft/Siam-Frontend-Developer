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
          type: {
            $eq: result.type && result.type,
          },
          // water_landings: {
          //   $eq: (result.waterLanding && Math.floor(result.waterLanding)) || 0,
          // },
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
