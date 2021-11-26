import React from "react";
import TabMenu from "./TabMenu";

it("expect to render TabMenu component", () => {
  const mockMenu = [
    {
      id: 1,
      name: "Snack Set",
      description: "Butter, cream, honey, salty cottage cheese, white cheese.",
      price: 8.2,
      image: {
        small: "assets/images/foods/breakfast/1/small.jpg",
        medium: "assets/images/foods/breakfast/1/medium.jpg",
        big: "assets/images/foods/breakfast/1/big.jpg",
      },
      discount: 0,
      ratingsCount: 4,
      ratingsValue: 350,
      availibilityCount: 5,
      cartCount: 0,
      weight: 160,
      isVegetarian: false,
      categoryId: "Breakfast",
      reviews: [],
    },
  ];
  expect(<TabMenu menu={mockMenu} />).toMatchSnapshot();
});
