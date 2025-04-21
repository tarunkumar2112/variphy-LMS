require('dotenv').config();
const axios = require('axios');

exports.handler = async (event) => {
  const { BASE_URL, API_USERNAME, API_PASSWORD } = process.env;
  const { email } = event.queryStringParameters;

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Email is required as a query parameter (e.g. ?email=user@example.com)" }),
    };
  }

  const auth = Buffer.from(`${API_USERNAME}:${API_PASSWORD}`).toString('base64');

  try {
    const response = await axios.get(`${BASE_URL}/users/email:${email}`, {
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
    console.error(`Error fetching user by email ${email}:`, error.message);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        message: 'Failed to fetch user by email',
        error: error.message
      })
    };
  }
};
