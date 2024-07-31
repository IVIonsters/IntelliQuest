const axios = require('axios');
const cheerio = require('cheerio');

const fetchOpenGraphImage = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const imageUrl = $('meta[property="og:image"]').attr('content');
    return imageUrl || null;
  } catch (error) {
    console.error('Error fetching OpenGraph image:', error.message);
    return null;
  }
};

module.exports = fetchOpenGraphImage;
