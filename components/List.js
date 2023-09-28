import React, { useState, useEffect } from 'react';
import Card from './Card';
import db from '../libs/db'; 

const List = ({ listTitle }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {  
    const fetchCards = async () => {
      try {
        const response = await db.collection('cards').find({ list: listTitle }).toArray();
        setCards(response);
      } catch (error) {
        console.error('Erro ao buscar cartas do MongoDB:', error);
      }
    };

    fetchCards();
  }, [listTitle]);

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{listTitle}</h2>
      <div>
        {cards.map((card) => (
          <Card key={card._id} cardTitle={card.title} />
        ))}
      </div>
    </div>
  );
};

export default List;
