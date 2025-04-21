require('dotenv').config();
const axios = require('axios');

exports.handler = async (event) => {
  const { BASE_URL, API_USERNAME, API_PASSWORD } = process.env;
  const { id } = event.queryStringParameters; // Grab the ID from query params

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Group ID is required as a query parameter (e.g. ?id=1)" }),
    };
  }

  // Set the basic auth credentials (Base64 encoded)
  const auth = Buffer.from(`${API_USERNAME}:${API_PASSWORD}`).toString('base64');

  try {
    const response = await axios.get(`${BASE_URL}/groups/id:${id}`, {
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
    console.error(`Error fetching group with ID ${id}:`, error.message);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        message: 'Failed to fetch group by ID',
        error: error.message
      })
    };
  }
};
