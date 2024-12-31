export async function fetchProductById() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const product = await response.json();
    const productDetails = document.getElementById('product-details');

    productDetails.innerHTML = `
      <h2>${product.title}</h2>
      <img src="${product.image}" alt="${product.title}" style="width:200px;height:200px;">
      <p>${product.description}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Category:</strong> ${product.category}</p>
    `;
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
}

fetchProductById();
