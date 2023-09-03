import React from 'react';

import { useSelector } from 'react-redux';
import SearchBox from '../components/SearchBox';
import AllCapsules from '../components/AllCapsules';
import Banner from '../components/Banner';
import FilterResult from '../components/FilterResult';

const Home = () => {
  const data = useSelector((state) => state.queryresult.data);
  console.log(data);

  return (
    <>
      <Banner />
      <SearchBox />
      {data ? <FilterResult /> : <AllCapsules />}
    </>
  );
};

export default Home;
