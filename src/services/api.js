export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = await fetch(url);
  const response = await request.json();
  return response;
}

getCategories();

export async function getProductsFromCategoryAndQuery(CATEGORY_ID, QUERY) {
  const url = ` https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY}`;
  const request = await fetch(url);
  const response = await request.json();
  return response;
}

getProductsFromCategoryAndQuery();

export async function getProductById(productId) {
  const url = `https://api.mercadolibre.com/items/${productId}`;
  const request = await fetch(url);
  const response = await request.json();
  return response;
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
