const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    // An HTTP get request
    // const { data } = await axios.get('/.netlify/functions/hello');
    const { data } = await axios.get('/api/hello');
    result.textContent = data;
    console.log(data);
  } catch (err) {
    console.log(error.response);
  }
};

fetchData();
