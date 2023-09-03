import React from 'react';
import SearchBox from '../components/SearchBox';
import AllCapsules from '../components/AllCapsules';
import Banner from '../components/Banner';

const Home = () => (
  <>
    {/* <div className="bg-indigo-600 px-10 py-9 h-[30vh]  w-full" /> */}
    <Banner />
    <SearchBox />
    <AllCapsules />
  </>
);

export default Home;
