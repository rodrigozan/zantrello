import React from 'react';
import Card from './Card';

const List = ({ listTitle, cards }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{listTitle}</h2>
      <div>
        {cards.map((card) => (
          <Card key={card.id} cardTitle={card.title} />
        ))}
      </div>
    </div>
  );
};

export default List;
