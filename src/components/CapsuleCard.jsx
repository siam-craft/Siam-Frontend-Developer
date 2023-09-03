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
    <div className=" border-red-400 border-2 px-3 py-2 font-[Poppins]">
      <p>ID: {id}</p>
      <p>Serial: {serial}</p>
      <p>Status: {status}</p>
      <p>Type: {type}</p>
      <p>Reuse Count: {reuse_count}</p>
      <p>Water Landing: {water_landings}</p>
      <p>Land Landing: {land_landings}</p>
      <p>Last Update: {last_update}</p>
    </div>
  );
};

export default CapsuleCard;
