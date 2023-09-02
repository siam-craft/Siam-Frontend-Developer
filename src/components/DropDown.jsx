import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  dropdownItem,
  openDropdown,
  getFilterName,
} from '../app/features/dropdown/dropdownSlice';

const DropDown = ({ data, filterBy }) => {
  const dispatch = useDispatch();

  const dropdownStatus = useSelector(
    (state) => state.dropdown[`${filterBy.toLowerCase()}`].openDropdownStatus,
  );

  const dorpdownItem = useSelector(
    (state) => state.dropdown[`${filterBy.toLowerCase()}`].dropdownItemValue,
  );

  const handleClick = (e) => {
    dispatch(dropdownItem(e?.target?.innerHTML));
    dispatch(openDropdown(!dropdownStatus));
  };

  return (
    <div>
      <div
        className="bg-slate- text-slate-800. font-[Poppins] py-5 font-semibold px-1 bg-slate-100 hover:cursor-pointer"
        onClick={() => {
          dispatch(getFilterName(filterBy.toLowerCase()));
          dispatch(openDropdown(!dropdownStatus));
        }}
      >
        {filterBy}
      </div>

      <ul>
        <li className="px-1 py-3  border-b-[1px] border-rose-100">
          {dorpdownItem || 'Select a item'}
        </li>
      </ul>

      {dropdownStatus ? (
        <ul className="mt-2 bg-rose-50 max-h-28 overflow-y-auto">
          <hr />
          {data.map((list) => (
            <li
              key={list.id}
              onClick={(e) => handleClick(e)}
              className="px-1 py-3 border border-b-[1px] border-rose-100 hover:cursor-pointer"
            >
              {list.name}
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default DropDown;
