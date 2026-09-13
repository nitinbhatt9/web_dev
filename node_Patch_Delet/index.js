import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

const message = [];

app.get("/get", (req, res) => {
  res.status(200).json({
    initialMsg: "Here are your all messages",
    message,
  });
});

app.patch("/message/:id", (req, res) => {
  const id = req.params.id;
  const updatedData = req.body.description;
  message[id].description = updatedData;

  // const getMessage = message[id];
  res.status(200).json({ Note: " Here are all your messages", data: message });
});

app.post("/post", (req, res) => {
  const data = req.body;
  console.log(data);

  message.push(data);
  console.log("message", message);

  res.status(200).json({
    initialMsg: "Here your messages are been displied",
  });
});

app.listen(PORT, () => {
  console.log(`Server Initates on port http://localhost:${PORT}`);
});
