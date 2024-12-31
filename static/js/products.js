export async function fetchAllProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    const productList = document.getElementById('product-list');

    products.forEach(product => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = `./product.html?id=${product.id}`;
      link.textContent = product.title;
      link.target = '_blank';
      listItem.appendChild(link);
      productList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

fetchAllProducts();
