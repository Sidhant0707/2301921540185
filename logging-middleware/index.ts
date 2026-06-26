const LOG_API_URL = 'http://4.224.186.213/evaluation-service/logs';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjc2RzMjMxMDhAZ2xiaXRtLmFjLmluIiwiZXhwIjoxNzgyNDU0Mzk0LCJpYXQiOjE3ODI0NTM0OTQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJmYjFjYTZlYy05MDU4LTQxZTgtOWE3Yi1jNzcxOGZlZWViY2QiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzaWRoYW50IGt1bWFyIiwic3ViIjoiYzY5ZGE4MWYtMjZiYi00ZTZkLWE1N2MtYTI3MTI1NGFlZWUwIn0sImVtYWlsIjoiY3NkczIzMTA4QGdsYml0bS5hYy5pbiIsIm5hbWUiOiJzaWRoYW50IGt1bWFyIiwicm9sbE5vIjoiMjMwMTkyMTU0MDE4NSIsImFjY2Vzc0NvZGUiOiJ4eGtKbmsiLCJjbGllbnRJRCI6ImM2OWRhODFmLTI2YmItNGU2ZC1hNTdjLWEyNzEyNTRhZWVlMCIsImNsaWVudFNlY3JldCI6InZXZXFDcEJwaGdQV0t2QWsifQ.1eR6krhAjeeUcbzwh7DWwadzLe5yO2pPAtZ8lZYpdJA';

async function Log(
  stack: string,
  level: string,
  packageName: string,
  message: string
) {
  try {
    const response = await fetch(LOG_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      },
      body: JSON.stringify({ stack, level, package: packageName, message }),
    });
    return await response.json();
  } catch (error) {
    console.error('Logging failed:', error);
    return null;
  }
}

export default Log;