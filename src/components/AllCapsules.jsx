import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCapsules } from '../app/features/allcapsules/allcapsulesSlice';
import CapsuleCard from './CapsuleCard';

const AllCapsules = () => {
  const dispatch = useDispatch();
  const capsules = useSelector((state) => state.allcapsule);

  useEffect(() => {
    dispatch(fetchCapsules());
  }, []);

  return (
    <div className="px-7 py-5">
      <h2 className="text-3xl mb-3">Show All Capsules</h2>
      <div className="grid xs:grid-cols-1  sm:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 md:gap-3">
        {capsules?.data?.map((capsule) => (
          <CapsuleCard capsule={capsule} />
        ))}
      </div>
    </div>
  );
};

export default AllCapsules;
