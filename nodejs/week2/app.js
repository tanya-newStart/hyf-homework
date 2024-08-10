import express from "express";
import items from "./documents.json" assert { type: "json" };

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", async (req, res) => {
  const query = req.query.q;

  try {
    if (!query) {
      res.status(200).json(items);
    } else {
      const match = items.filter((item) =>
        Object.values(item).some(
          (value) =>
            typeof value === "string" && value.toLowerCase().includes(query)
        )
      );
      res.status(200).json(match);
    }
  } catch (err) {
    console.log("Error reading file", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/documents/:id", (req, res) => {
  const itemId = Number(req.params.id);
  const item = items.find((item) => item.id === itemId);
  if (!item) {
    res.status(404).send("Not Found");
  } else {
    res.status(200).json(item);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
