// require("dotenv").config();

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("SErver is ready and running on the specific port");
});
const port = process.env.PORT || 3000;

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 2,
      title: "Why did the computer go to therapy?",
      content: "Because it had too many Windows open!",
    },
    {
      id: 3,
      title: "Parallel lines have so much in common",
      content: "It’s a shame they’ll never meet.",
    },
    {
      id: 4,
      title: "Why don’t programmers like nature?",
      content: "It has too many bugs!",
    },
    {
      id: 5,
      title: "I told my wife she should embrace her mistakes",
      content: "She gave me a hug.",
    },
    {
      id: 6,
      title: "Why did the math book look sad?",
      content: "Because it had too many problems!",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
