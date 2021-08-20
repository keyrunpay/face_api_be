import mongoose, { Schema, Document } from 'mongoose';

export interface IFace extends Document {
  label: string;
  details: string;
}

const schema = new Schema(
  {
    label: String,
    details: String,
  },
  {
    timestamps: {
      updatedAt: false,
      createdAt: 'created_at',
    },
  }
);

export default mongoose.model<IFace>(
  'Face',
  schema,
  'faces'
);
