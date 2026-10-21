import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: { type: String, reduired: true },
    addnotes: { type: String, reduired: true },
    discription: { type: String, reduired: true },
    authername: { type: String, reduired: true },
  },
  { timestamps: true },
);

const Notes = mongoose.model("Note", noteSchema);

export default Notes;
