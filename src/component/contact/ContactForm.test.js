import React from "react";
import ContactForm from "./ContactForm";
import renderer from "react-test-renderer";

test("should render ContactForm component", () => {
  const tree = renderer.create(<ContactForm />).toJSON();
  expect(tree).toMatchSnapshot;
});
