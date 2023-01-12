const express = require("express");
const axios = require("axios");

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
  // res.send(productId);

  try {
    // const response = await request(
    //   `${baseUrl}&url=https://www.flipkart.com/p/${productId}`
    // );
    const response = await axios.get(
      `${baseUrl}&url=https://www.amazon.com/dp/${productId}`
    );
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => console.log("Server running on port 5000"));
