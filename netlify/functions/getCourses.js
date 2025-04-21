require('dotenv').config();
const axios = require('axios');

exports.handler = async () => {
  const { BASE_URL, API_USERNAME, API_PASSWORD } = process.env;

  // Generate base64-encoded credentials
  const auth = Buffer.from(`${API_USERNAME}:${API_PASSWORD}`).toString('base64');

  try {
    const response = await axios.get(`${BASE_URL}/courses`, {
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Error fetching courses:', error.message);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        message: 'Failed to fetch courses',
        error: error.message
      })
    };
  }
};
