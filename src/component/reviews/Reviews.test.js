// import React from "react";
// import FeedBackModal from "./FeedBackModal";
// import renderer from "react-test-renderer";

// test("should render FeedBackModal component", () => {
//   const tree = renderer.create(<FeedBackModal />).toJSON();
//   expect(tree).toMatchSnapshot;
// });

import { create } from "react-test-renderer";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../../redux/rootReducer";
// import FeedBackModal from "../feedBackModal/FeedBackModal";
// import MenuDetailsCard from "./MenuDetailsCard";
// import Reviews from "../reviews/Reviews";
import Reviews from "./Reviews";

const mockedState = {
  menuDetails: {
    menuDetails: [],
    reviews: [],
  },
};

const mockStore = createStore(rootReducer, mockedState, applyMiddleware(thunk));

const MockedForm = () => (
  <Provider store={mockStore}>
    <Router>
      <Route path={`/menu/1`} component={Reviews} />
    </Router>
  </Provider>
);

describe("Our First Snapshot Test Case", () => {
  test("Testing the Tabs component UI for the App", () => {
    let main = create(MockedForm());
    expect(main.toJSON()).toMatchSnapshot();
  });
});
