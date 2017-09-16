export async function get(url, payload) {
  let response = getServerResponse(url, payload);
  return await response;
}

// fake server
const getServerResponse = (url, payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!payload) {
        reject({
          message: 'Invalid request.'
        });
      } else {
        resolve({
          message: `Hello, ${payload.name}!`
        });
      }
    }, 100); // simulate 0.1+ second response time
  });
}