import express from "express";
import fs from "fs/promises";

const app = express();
const port = process.env.PORT || 3000;

const filePath = "./documents.json";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", async (req, res) => {
  const query = req.query.q;

  try {
    const data = await fs.readFile(filePath, "utf8");
    const items = JSON.parse(data);

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
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
