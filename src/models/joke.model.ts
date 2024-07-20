import { Schema, model, Document } from 'mongoose';

interface IJoke extends Document {
  setup: string;
  punchline: string;
  type: Schema.Types.ObjectId;
  author: string;
}

const jokeSchema = new Schema<IJoke>(
  {
    setup: {
      type: String,
      required: true,
    },
    punchline: {
      type: String,
      required: true,
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: 'JokeType',
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Joke = model<IJoke>('Joke', jokeSchema);

export default Joke;
