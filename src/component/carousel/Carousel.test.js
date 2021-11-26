import React from "react";
import HomePageCarousel from "./Carousel";
import renderer from "react-test-renderer";

test("should render HomePageCarousel component", () => {
  const tree = renderer.create(<HomePageCarousel />).toJSON();
  expect(tree).toMatchSnapshot;
});
