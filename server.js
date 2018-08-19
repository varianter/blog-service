const fetch = require('node-fetch');
const limit = 4;

module.exports = async () => {
  try {
    const request = await fetch(
      `https://medium.com/@variant_as/latest?format=json&limit=${limit}`
    );
    const dataText = await request.text();
    const data = dataText.replace('])}while(1);</x>', '');
    return JSON.parse(data);
  } catch (e) {
    console.error(e);
    return {
      success: false,
      error: 'Unable to get blog entries'
    };
  }
};
