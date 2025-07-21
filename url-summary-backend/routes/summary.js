// // const express = require('express');
// // const router = express.Router();
// // const db = require('../db/connection');

// // // Route: POST /api/summary
// // router.post('/', (req, res) => {
// //   const { url } = req.body;

// //   // Generate mock summary and points (you can replace this with actual logic later)
// //   const summary = `Summary of ${url}`;
// //   const points = [
// //     "Important point 1",
// //     "Important point 2",
// //     "Important point 3",
// //     "Important point 4",
// //     "Important point 5"
// //   ];

// //   db.query(
// //     'INSERT INTO summaries (url, summary, points) VALUES (?, ?, ?)',
// //     [url, summary, JSON.stringify(points)],
// //     (err, result) => {
// //       if (err) {
// //         console.error('Database insert error:', err);
// //         return res.status(500).json({ error: err });
// //       }
// //       res.json({ url, summary, points });
// //     }
// //   );
// // });

// // // Route: GET /api/summary/history
// // router.get('/history', (req, res) => {
// //   db.query('SELECT * FROM summaries ORDER BY created_at DESC', (err, results) => {
// //     if (err) {
// //       console.error('Database fetch error:', err);
// //       return res.status(500).json({ error: err });
// //     }
// //     res.json(results);
// //   });
// // });

// // module.exports = router;
// //
// //
// //
// const express = require('express');
// const router = express.Router();
// const db = require('../db/connection');
// const axios = require('axios');
// const { GoogleGenerativeAI } = require('@google/generative-ai');

// // ✅ Load Gemini API Key from .env
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // 🔧 Function to generate summary and points using Gemini
// async function generateSummaryFromURL(url) {
//   // 1. Get raw webpage content (basic method)
//   const { data: pageContent } = await axios.get(url);

//   // 2. Use Gemini to summarize the content
//   const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

//   const summaryResult = await model.generateContent(`Summarize this webpage content:\n\n${pageContent}`);
//   const summary = summaryResult.response.text();

//   const pointsResult = await model.generateContent(`List 5 important points from this content:\n\n${pageContent}`);
//   const pointsText = pointsResult.response.text();
//   const points = pointsText
//     .split('\n')
//     .filter(p => p.trim() !== '')
//     .map(p => p.replace(/^\d+\.\s*/, '').trim());

//   return { summary, points };
// }

// // 🔹 POST /api/summary
// router.post('/', async (req, res) => {
//   const { url } = req.body;

//   if (!url) {
//     return res.status(400).json({ error: 'URL is required' });
//   }

//   try {
//     const { summary, points } = await generateSummaryFromURL(url);
//     const title = `Summary of ${url}`;

//     // Save to database
//     db.query(
//       'INSERT INTO summaries (url, summary, points) VALUES (?, ?, ?)',
//       [url, summary, JSON.stringify(points)],
//       (err, result) => {
//         if (err) {
//           console.error('Database insert error:', err);
//         }
//         res.json({ url, summary, points, title });
//       }
//     );
//   } catch (error) {
//     console.error('Gemini API error:', error);
//     res.status(500).json({ error: 'Failed to generate summary' });
//   }
// });

// // 🔹 GET /api/summary/history
// router.get('/history', (req, res) => {
//   db.query('SELECT * FROM summaries ORDER BY created_at DESC', (err, results) => {
//     if (err) {
//       console.error('Database fetch error:', err);
//       return res.status(500).json({ error: err });
//     }
//     res.json(results);
//   });
// });

// module.exports = router;
// //
// //
// //
// // const express = require('express');
// // const router = express.Router();
// // const cors = require('cors');
// // const bodyParser = require('body-parser');

// // const app = express();


// // require('dotenv').config();
// // const db = require('./db/connection');

// // app.use(cors());
// // app.use(bodyParser.json());

// // // Dummy data - replace with real DB/API logic if needed
// // const companyData = {
// //   company: {
// //     employee_count: "120",
// //     founded: "2015",
// //     country: "India",
// //     city: "Chennai",
// //     website: "https://example.com",
// //     linkedIn: "https://linkedin.com/company/example",
// //     logo: "https://logo.clearbit.com/example.com",
// //     name: "Example Inc",
// //     overview: "Example Inc provides innovative solutions using AI and big data."
// //   },
// //   investors: {
// //     title: "Who are the investors of Example Inc?",
// //     list: ["Sequoia Capital", "Accel", "Not Available"]
// //   },
// //   stock: {
// //     stock_exchange: null,
// //     stock_symbol: null,
// //     date: null
// //   },
// //   funding: {
// //     total_funcding: "$25M",
// //     most_recent_funding: "$10M",
// //     number_of_rounds: 3,
// //     latest_funding: "March 12, 2024"
// //   }
// // };

// // router.get('/', (req, res) => {
// //   res.json(companyData);
// // });

// // module.exports = router;
