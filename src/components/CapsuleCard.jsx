import React from 'react';

const CapsuleCard = ({ capsule }) => {
  const {
    reuse_count,
    water_landings,
    land_landings,
    last_update,
    serial,
    status,
    type,
    id,
  } = capsule;
  return (
    // <div classNameName=" border-red-400 border-2 px-3 py-2 font-[Poppins]">
    //   <p>ID: {id}</p>
    //   <p>Serial: {serial}</p>
    //   <p>Status: {status}</p>
    //   <p>Type: {type}</p>
    //   <p>Reuse Count: {reuse_count}</p>
    //   <p>Water Landing: {water_landings}</p>
    //   <p>Land Landing: {land_landings}</p>
    //   <p>Last Update: {last_update}</p>
    // </div>

    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="text-center">
        <p className="text-2xl font-semibold text-red-400">Rocket Details</p>
      </div>
      <div className="mt-4">
        <p className="text-lg">
          <span className="font-semibold">ID:</span> {id}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Serial:</span> {serial}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Status:</span> {status}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Type:</span> {type}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Reuse Count:</span> {reuse_count}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Water Landings:</span>{' '}
          {water_landings}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Land Landings:</span> {land_landings}
        </p>
        <p className="text-lg">
          <span className="font-semibold">Last Update:</span> {last_update}
        </p>
      </div>
    </div>
  );
};

export default CapsuleCard;
