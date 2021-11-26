import React from "react";
import Header from "./Header";
import renderer from "react-test-renderer";

test("should render homecard with text", () => {
  const tree = renderer
    .create(
      <Header
        headerData={{
          backgroundImage: "assets/images/others/contact.jpg",
          title: "Contact Us",
          desc: "GOT A QUESTION? WE'LL GIVE YOU STRAIGHT ANSWER",
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot;
});
