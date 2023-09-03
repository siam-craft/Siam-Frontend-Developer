import React, { useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const fetchData = async () => {
    try {
      const res = await axios.post(
        'https://api.spacexdata.com/v4/capsules/query',
        {
          query: {
            // status: {
            //   $eq: 'retired',
            // },
            water_landings: {
              $gt: 1,
            },
          },
          options: {
            limit: 9, // Adjust the limit as needed
            page: 1, // Adjust the page number as needed
          },
        },
      );
      // Handle the response data here
      console.log(res.data);
      return res.data;
    } catch (error) {
      // Handle any errors here
      console.error('Error fetching data:', error);
    }
    return 'ok';
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>Login</div>;
};

export default Login;
