import React from 'react';
import PropTypes from 'prop-types'; 
import CardModel from '../models/Card'; 

const Card = ({ card }) => {
  return (
    <div className="bg-white p-2 rounded-md shadow-sm mb-2">
      <p>{card.title}</p>
      {card.tasks.map((task) => (
        <div key={task.id} className="bg-gray-100 p-2 rounded-md shadow-sm mb-2">
          <p>{task.title}</p>
        </div>
      ))}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.instanceOf(CardModel).isRequired,
  someOtherProp: PropTypes.string.isRequired,
  anotherProp: PropTypes.number,
};

export default Card;
