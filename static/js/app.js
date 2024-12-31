import { fetchAllProducts } from './products.js';
import { fetchProductById } from './product.js';

const currentPage = window.location.pathname;

if (currentPage.includes('products.html')) {

  fetchAllProducts();
} else if (currentPage.includes('product.html')) {
  
  fetchProductById();
}
