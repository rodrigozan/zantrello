import React from 'react';

const Card = ({ cardTitle }) => {
  return (
    <div className="bg-white p-2 rounded-md shadow-sm mb-2">
      <p>{cardTitle}</p>
    </div>
  );
};

export default Card;
