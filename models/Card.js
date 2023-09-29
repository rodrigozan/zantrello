import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tasks: [
    {
      title: String,
      description: String,
      members: [String],
      tags: [String],
      checklist: [
        {
          title: String,
          done: Boolean,
        },
      ],
      dateStart: Date,
      dateEnd: Date,
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Card = mongoose.model('Card', cardSchema);

export default Card;
