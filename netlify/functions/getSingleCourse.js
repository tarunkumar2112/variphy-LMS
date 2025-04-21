require('dotenv').config();
const axios = require('axios');

exports.handler = async (event) => {
  const { BASE_URL, API_USERNAME, API_PASSWORD } = process.env;
  const { id } = event.queryStringParameters;

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Course ID is required as a query parameter (e.g. ?id=126)" }),
    };
  }

  const auth = Buffer.from(`${API_USERNAME}:${API_PASSWORD}`).toString('base64');

  try {
    const response = await axios.get(`${BASE_URL}/courses/id:${id}`, {
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
    console.error(`Error fetching course ${id}:`, error.message);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        message: 'Failed to fetch course',
        error: error.message
      })
    };
  }
};
