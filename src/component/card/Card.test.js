import React from "react";
import MenuCard from "./Card";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

test("should render MenuCard component", () => {
  const tree = renderer
    .create(
      <Router>
        <MenuCard
          item={{
            id: 1,
            name: "Snack Set",
            description:
              "Butter, cream, honey, salty cottage cheese, white cheese.",
            price: 8.2,
            image: {
              small: "assets/images/foods/breakfast/1/small.jpg",
            },
            availibilityCount: 5,
            weight: 160,
            isVegetarian: false,
            categoryId: "Breakfast",
          }}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot;
});
