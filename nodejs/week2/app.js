import express from "express";
import items from "./documents.json" assert { type: "json" };

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
  const query = req.query.q;

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

app.post("/search", (req, res) => {
  const query = req.params.q;
  const { fields } = req.body;

  if (query && fields) {
    return res
      .status(400)
      .send("Cannot provide both query and fields for filtering");
  }

  let result = items;

  if (query) {
    result = result.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" && value.toLowerCase().includes(query)
      )
    );
  }
  if (fields) {
    result = result.filter((item) =>
      Object.entries(fields).every(
        ([key, value]) => item[key] && item[key] === value
      )
    );
  }
  res.status(200).json(result);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
