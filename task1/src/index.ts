import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import CustomerDataBase from "./CustomerDataBase";
import productData from "./data/products-service-a.json";
import { Product } from "./types";
import filterProductPrices from "./helper/filterProductPrices";


dotenv.config();

const app: Express = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const customerDataBase = new CustomerDataBase();
app.get("/", async (req: Request, res: Response) => {
  const { customerId, isBusinessCustomer } = req.body;
  let customer;
  if (customerId === undefined && isBusinessCustomer === undefined) {
    res.status(400).send({ error: "Invalid Request", data: req.body });
  }

  if (customerId !== undefined) {
    customer = customerDataBase.findById(`${customerId}`);
  }

  // Call Service A - Product Service
  const productServiceResponse = await fetch(
    `http://localhost:${port}/productService`,
  )
    .then((data) => data.json())
    .catch((err) => {
      res
        .status(400)
        .send({ message: "Could not load products", error: err.message });
    });
  const productsData = await productServiceResponse;
  const { products } = productsData;

  if (!customer) {
    const generallyAvailableProducts = products.filter(
      (product: Product) => product.generallyAvailable,
    );

    res
      .status(200)
      .json(filterProductPrices(generallyAvailableProducts, false));
    return;
  }

  // call product availability service
  const productAvailabilityServiceResponse = await fetch(
    `http://localhost:${port}/productAvailabilityService/${customer.customerId}`,
  )
    .then((data) => data.json())
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  const productAvailabilityServiceData =
    await productAvailabilityServiceResponse;

  const { availableProducts } = productAvailabilityServiceData ?? [];

  if (!availableProducts || availableProducts.length === 0) {
    res.json(
      filterProductPrices(
        products.filter((product: Product) => product.generallyAvailable),
        !!customer,
      ),
    );
    return;
  }

  // continue with available products only
  const availableProductsStrings = availableProducts.map(
    (availableProduct: { productCode: string }) => availableProduct.productCode,
  );

  const filteredProducts = products.filter(
    (product: Product) =>
      availableProductsStrings.indexOf(product.productCode) > -1,
  );

  res.status(200).json(filterProductPrices(filteredProducts, !!customer));
});

/* ******************* */
/* DUMMY API for calls */
/* ******************* */
app.get("/productService", (req: Request, res: Response) => {
  res.json(productData);
});

app.get(
  "/productAvailabilityService/:customerId",
  async (req: Request, res: Response) => {
    try {
      const availableProducts = await import(
        `./data/product-availability-for-customer-${req.params.customerId}.json`
      )
        .then((data) => data.default)
        .catch((err) => {
          res.status(404).send({ error: err.message });
        });
      res.status(200).json(availableProducts);
    } catch (err) {
      // @ts-ignore
      res.status(404).send({ error: err.message });
    }
  },
);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up and running on port ${port}`);
});
