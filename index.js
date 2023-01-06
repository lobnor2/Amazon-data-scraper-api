const express = require("express");
const request = require("request-promise");

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = "01f05b43ff733163be06ed9b2537e9e2";
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Amazon Data Scraper Api");
});

//Get Product Details
app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params;

  try {
    // const response = await request(
    //   `${baseUrl}&url=https://www.flipkart.com/p/${productId}`
    // );
    const response = await request(
      `${baseUrl}&url=https://www.amazon.com/dp/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => console.log("Server running on port 5000"));
