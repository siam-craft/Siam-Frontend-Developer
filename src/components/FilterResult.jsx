import React from 'react';
import { useSelector } from 'react-redux';
import CapsuleCard from './CapsuleCard';

const FilterResult = () => {
  const data = useSelector((state) => state.queryresult.data.docs);

  return (
    <div className="px-7 py-5">
      <h2 className="text-3xl mb-3">Filtered Result</h2>
      <div className="grid xs:grid-cols-1  sm:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 md:gap-3">
        {data.length <= 0 ? (
          <p>No items to show</p>
        ) : (
          data.map((capsule) => <CapsuleCard capsule={capsule} />)
        )}
      </div>
    </div>
  );
};

export default FilterResult;
