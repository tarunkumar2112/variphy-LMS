require('dotenv').config();
const axios = require('axios');

exports.handler = async () => {
  const { BASE_URL, API_USERNAME, API_PASSWORD } = process.env;

  const auth = Buffer.from(`${API_USERNAME}:${API_PASSWORD}`).toString('base64');

  try {
    const response = await axios.get(`${BASE_URL}/users`, {
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
    console.error('Error fetching users:', error.message);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        message: 'Failed to fetch users',
        error: error.message
      })
    };
  }
};
