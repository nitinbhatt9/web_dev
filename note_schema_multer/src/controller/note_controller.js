import Notes from "../schema/note_schema.js";

export const notes = async (req, res) => {
  try {
    const { title, addnotes, discription, authername } = req.body;
    if (!title || !addnotes || !discription) {
      return;
      res
        .status(400)
        .json({ message: "title, addnotes and discription are required" });
    }

    const newUser = new Notes({ title, addnotes, discription, authername });
    await newUser.save();
    res.status(200).json({ message: "Notes are added successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
