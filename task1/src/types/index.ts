export type Product = {
  productCode: string;
  productCategoryCode: string;
  productName: string;
  generallyAvailable: boolean;
  prices: Price[] | Price | undefined; // just for that one product that does not have an array of prices
  price: Price | undefined; // only one price to return
};

export type Price = {
  isExistingCustomer: boolean;
  netPrice: string;
  bruttoPrice: string;
  bonusPercentage: number;
};
