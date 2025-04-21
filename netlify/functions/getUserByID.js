require('dotenv').config();
const axios = require('axios');

exports.handler = async (event) => {
  const { BASE_URL, API_USERNAME, API_PASSWORD } = process.env;
  const { id } = event.queryStringParameters;

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "User ID is required as a query parameter (e.g. ?id=15)" }),
    };
  }

  const auth = Buffer.from(`${API_USERNAME}:${API_PASSWORD}`).toString('base64');

  try {
    const response = await axios.get(`${BASE_URL}/users/id:${id}`, {
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
    console.error(`Error fetching user ${id}:`, error.message);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        message: 'Failed to fetch user',
        error: error.message
      })
    };
  }
};
