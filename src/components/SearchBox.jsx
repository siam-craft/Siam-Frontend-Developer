import React from 'react';
import DropDown from './DropDown';

const SearchBox = () => {
  const typesItem = [
    {
      id: 1,
      name: 'Bangladesh',
      value: 'bangladesh',
    },
    {
      id: 2,
      name: 'India',
      value: 'india',
    },
    {
      id: 3,
      name: 'Pakistan',
      value: 'pakistan',
    },
    {
      id: 4,
      name: 'Nepal',
      value: 'nepal',
    },
  ];
  const statusItem = [
    {
      id: 1,
      name: 'Active',
      value: 'active',
    },
    {
      id: 2,
      name: 'Unused',
      value: 'unused',
    },
    {
      id: 3,
      name: 'Example 1',
      value: 'example1',
    },
    {
      id: 4,
      name: 'Example 2',
      value: 'example2',
    },
    {
      id: 5,
      name: 'Example 3',
      value: 'example3',
    },
  ];
  const reviewItem = [
    {
      id: 1,
      name: 'Reviewed',
      value: 'reviewed',
    },
    {
      id: 2,
      name: 'Pending',
      value: 'pending',
    },
    {
      id: 3,
      name: 'Approved',
      value: 'approved',
    },
    {
      id: 4,
      name: 'Rejected',
      value: 'rejected',
    },
    {
      id: 5,
      name: 'In Progress',
      value: 'in_progress',
    },
  ];

  const TYPES = 'Types';
  const STATUS = 'Status';
  const REVIEW = 'Review';

  return (
    <div className="md:py-6 py-2 px-8 bg-red-500">
      <h2 className="text-center md:text-4xl text-2xl font-[Poppins] font-medium text-slate-900 mb-1 md:mb-3">
        Search Capsule
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <DropDown data={typesItem} filterBy={TYPES} />
        <DropDown data={statusItem} filterBy={STATUS} />
        <DropDown data={reviewItem} filterBy={REVIEW} />
      </div>
    </div>
  );
};

export default SearchBox;
