const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeWebsite(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const title = $("title").text();
    const metaDesc = $('meta[name="description"]').attr("content");
    const bodyText = $("body").text().replace(/\s+/g, " ").slice(0, 5000);

    return `${title}\n\n${metaDesc}\n\n${bodyText}`;
  } catch (error) {
    console.error("Error scraping site:", error);
    return "Unable to retrieve site content.";
  }
}

module.exports = scrapeWebsite;
