const express = require("express");
const cors = require("cors");
const contactHandler = require("./api/contact");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/api/contact", contactHandler);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Contact API running on port ${port}`);
});
