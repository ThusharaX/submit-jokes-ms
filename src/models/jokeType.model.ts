import { Schema, model, Document } from 'mongoose';

interface IJokeType extends Document {
  name: string;
}

const jokeTypeSchema = new Schema<IJokeType>(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
  },
  { timestamps: true }
);

const JokeType = model<IJokeType>('JokeType', jokeTypeSchema);

export default JokeType;
