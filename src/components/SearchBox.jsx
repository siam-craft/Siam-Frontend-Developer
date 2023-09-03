import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DropDown from './DropDown';
import createQuery from '../utils/createQuery';
import { STATUS, TYPE, WATERLANDING } from '../data/static';
import { fetchData } from '../app/features/queryresult/queryresult';

const SearchBox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dropdown);

  const status = 'Status';
  const type = 'Type';
  const waterLanding = 'WaterLanding';

  const sendRequest = async () => {
    const result = createQuery(data);
    dispatch(fetchData(result));
  };

  return (
    <div className="md:py-6 py-2 px-8 ">
      <h2 className="text-center md:text-4xl text-2xl font-[Poppins] font-medium text-slate-900 mb-1 md:mb-3">
        Search Capsule
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <DropDown data={TYPE} filterBy={type} />
        <DropDown data={STATUS} filterBy={status} />
        <DropDown data={WATERLANDING} filterBy={waterLanding} />
        <div>
          <button
            onClick={sendRequest}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-all duration-300 ease-in-out"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
