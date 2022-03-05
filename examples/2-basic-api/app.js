const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/basic-api');
    const products = data
      .map(({ name, image, price }) => {
        return `<article class="product">
        <img src=${image.url} alt=${name} />
        <div class="info">
          <h5>${name}</h5>
          <h5 class="price">$${price}</h5>
        </div>
      </article>`;
      })
      .join('');
    result.innerHTML = products;
  } catch (err) {
    result.innerHTML = `<h2>There was a error</h2>`;
  }
};

fetchData();
