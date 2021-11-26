import React from "react";
import TabsCategory from "./Tabs";
// import renderer from "react-test-renderer";

// test("should render TabsCategory component", () => {
//   const tree = renderer.create(<TabsCategory />).toJSON();
//   expect(tree).toMatchSnapshot;
// });

test("expect to render TabsCategory component", () => {
  expect(<TabsCategory />).toMatchSnapshot();
});
