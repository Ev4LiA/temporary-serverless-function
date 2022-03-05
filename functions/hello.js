// domain/.netlify/functions/hello
// exports

exports.handler = async (event, context) => {
  // return promise
  return {
    statusCode: 200,
    body: 'Our first Netlify Function Example',
  };
};
