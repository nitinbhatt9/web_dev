import express from "express";

const app = express();

const PORT = 3001;

app.get("/my-self", (req, res) => {
  res.send("New Api Project..!!!");
});

app.get("/my-name", (req, res) => {
  res.json({
    name: "abc-def",
    image:
      "https://plus.unsplash.com/premium_photo-1676648181598-d2d718305a0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
  });
});

app.get("/my-address", (req, res) => {
  res.json({ address: "ashalernology,Saket,New Delhi,110074" });
});

app.get("/my-contact", (req, res) => {
  res.json({ email: "abc@gmail.com", contact: 9876543210 });
});

app.listen(PORT, () => {
  console.log(`Server Initate on port http://localhost:${PORT}`);
});
