require('dotenv').config();
const axios = require('axios');

exports.handler = async (event) => {
  const { BASE_URL, API_USERNAME, API_PASSWORD } = process.env;

  // Get branch ID from the query parameters
  const branchID = event.queryStringParameters.id;

  if (!branchID) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Branch ID is required."
      })
    };
  }

  // Set the basic auth credentials (Base64 encoded)
  const auth = Buffer.from(`${API_USERNAME}:${API_PASSWORD}`).toString('base64');

  try {
    const response = await axios.get(`${BASE_URL}/branches/id:${branchID}`, {
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
    console.error('Error fetching branch by ID:', error.message);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        message: 'Failed to fetch branch by ID',
        error: error.message
      })
    };
  }
};
