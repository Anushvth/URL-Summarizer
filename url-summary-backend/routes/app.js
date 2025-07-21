// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// require("dotenv").config();

// const scrapeWebsite = require("./scraper");
// const summarizeCompany = require("./openai");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "../public")));

// app.post("/summarize", async (req, res) => {
//   const { url } = req.body;
//   const rawText = await scrapeWebsite(url);
//   const summary = await summarizeCompany(rawText);
//   res.send(`<pre>${summary}</pre><a href="/">Back</a>`);
// });

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
