import { render, waitFor, screen } from "@testing-library/react";
import Products from "../Products";

import axios from "axios";

jest.mock("axios");

const dummyProducts = {
  "products":[
      {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
      },
      {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
      }
  ]
}

describe("Mocking async API request", () => {
  it("should get all products", async () => {
    axios.get.mockResolvedValue({ data: dummyProducts });

    render(<Products />);

    const products = await waitFor(() => screen.getAllByTestId("product"));

    expect(products).toHaveLength(2);
  });
});