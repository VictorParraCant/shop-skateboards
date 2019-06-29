import DATA from '../../data/products.json';

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    // Request to API
    setTimeout(() => resolve(DATA), 200)
  })
}
