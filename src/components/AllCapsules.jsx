import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCapsules } from '../app/features/allcapsules/allcapsulesSlice';

const AllCapsules = () => {
  const dispatch = useDispatch();
  const capsules = useSelector((state) => state.allcapsule);

  useEffect(() => {
    dispatch(fetchCapsules());
  }, []);

  console.log(capsules.data);

  return (
    <div className="px-7 py-5">
      <h2 className="font-[Poppins] text-3xl mb-3">Show All Capsules</h2>
      <div className="grid grid-cols-4 gap-3">
        {capsules?.data?.map((capsule) => (
          <div className=" border-red-400 border-2 px-3 py-2">
            {capsule.serial}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCapsules;
