import { Price, Product } from "../types";

const filterProductPrices = (
  products: Product[],
  isExistingCustomer: boolean,
): Product[] => {
  const productsWithFilteredPrice = products;

  for (let i = 0; i < products.length; i += 1) {
    if (Array.isArray(productsWithFilteredPrice[i].prices)) {
      // @ts-ignore
      const filteredPrice = productsWithFilteredPrice[i].prices.filter(
        (price: Price) => price.isExistingCustomer === isExistingCustomer,
      )[0];
      productsWithFilteredPrice[i].price = filteredPrice;
    } else if (
      // @ts-ignore
      productsWithFilteredPrice[i].prices.isExistingCustomer ===
      isExistingCustomer
    ) {
      // @ts-ignore
      productsWithFilteredPrice[i].price = productsWithFilteredPrice[i].prices;
    } else {
      productsWithFilteredPrice[i].price = undefined;
    }
    // @ts-ignore
    productsWithFilteredPrice[i].prices = undefined;
  }
  // finally remove products from list that don't have price
  return productsWithFilteredPrice.filter(
    (product) => product.price !== undefined,
  );
};

export default filterProductPrices;