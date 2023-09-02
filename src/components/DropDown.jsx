import React, { useState } from 'react';

const DropDown = ({ data, filterBy }) => {
  const [openTypeMenu, setOpenTypeMenu] = useState(false);
  const [targetListItem, setTargetListItem] = useState('');

  return (
    <div>
      <div
        className="bg-slate- text-slate-800. font-[Poppins] py-5 font-semibold px-1 bg-slate-100"
        onClick={() => {
          setOpenTypeMenu(!openTypeMenu);
        }}
      >
        {filterBy}
      </div>

      {targetListItem && (
        <ul>
          <li className="px-1 py-3  border-b-[1px] border-rose-100">
            {targetListItem}
          </li>
        </ul>
      )}

      {openTypeMenu ? (
        <ul className="mt-2 bg-rose-50 max-h-28 overflow-y-auto">
          <hr />
          {data.map((list) => (
            <li
              onClick={(e) => {
                setTargetListItem(e?.target?.innerHTML);
                setOpenTypeMenu(!openTypeMenu);
              }}
              className="px-1 py-3 border border-b-[1px] border-rose-100"
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
