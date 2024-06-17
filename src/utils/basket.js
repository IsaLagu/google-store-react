export const getBasket = () => {
  const products = localStorage.getItem("basket");

  if (products) {
    return JSON.parse(products);
  }

  return [];
};

// const productsMock = [
//   {id: 1, color: 'red', quantity: 1},
//   {id: 1, color: 'blue', quantity: 2},
// ];

export const addProductToBasket = () => {};
