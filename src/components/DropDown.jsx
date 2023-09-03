import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  dropdownItem,
  openDropdown,
  getFilterName,
} from '../app/features/dropdown/dropdownSlice';

const DropDown = ({ data, filterBy }) => {
  console.log(filterBy);
  const dispatch = useDispatch();
  const dropdownStatus = useSelector(
    (state) => state.dropdown[filterBy.toLowerCase()].openDropdownStatus,
  );

  const dropdownItemValue = useSelector(
    (state) => state.dropdown[filterBy.toLowerCase()].dropdownItemValue,
  );

  const handleDropdownToggle = () => {
    dispatch(getFilterName(filterBy.toLowerCase()));
    dispatch(openDropdown(!dropdownStatus));
  };

  const handleItemClick = (item) => {
    dispatch(dropdownItem(item));
    dispatch(openDropdown(false));
  };

  return (
    <div className="relative">
      <div
        className="bg-slate text-slate-800 font-semibold py-2 px-3 rounded-md cursor-pointer flex items-center justify-between hover:bg-slate-200"
        onClick={filterBy !== 'WaterLanding' && handleDropdownToggle}
      >
        <span>{filterBy}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform ${
            dropdownStatus ? 'transform rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {filterBy !== 'WaterLanding' ? (
        <ul>
          <li className="px-3 py-2 border-b border-rose-100">
            {dropdownItemValue || 'Select an item'}
          </li>
        </ul>
      ) : (
        <p className="font-bold text-rose-600">
          Currently this option is unvailable
        </p>
      )}

      {dropdownStatus && (
        <ul className="mt-2 bg-rose-50 max-h-48 overflow-y-auto absolute w-full border border-rose-100 rounded-b-md z-20 pb-5">
          {data.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.name)}
              className="px-3 py-2 hover:bg-rose-100 cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
