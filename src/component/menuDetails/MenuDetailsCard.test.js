import React from "react";
import MenuDetailsCard from "./MenuDetailsCard";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

test("should render MenuCard component", () => {
  const tree = renderer
    .create(
      <Router>
        <MenuDetailsCard
          menuDetails={{
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

// import { create } from "react-test-renderer";
// import { Provider } from "react-redux";
// import { render, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "../../redux/rootReducer";
// import MenuDetailsCard from "./MenuDetailsCard";

// const mockedState = {
//   menuDetails: {
//     menuDetails: [],
//   },
// };

// const mockStore = createStore(rootReducer, mockedState, applyMiddleware(thunk));

// const MockedForm = () => (
//   <Provider store={mockStore}>
//     <BrowserRouter>
//       <MenuDetailsCard />
//     </BrowserRouter>
//   </Provider>
// );

// describe("Our First Snapshot Test Case", () => {
//   test("Testing the Tabs component UI for the App", () => {
//     let main = create(MockedForm());
//     expect(main.toJSON()).toMatchSnapshot();
//   });
// });

// describe("testing text Ingredients exist", () => {
//   test("testing text", () => {
//     render(MockedForm());
//     const textElement = screen.getByText("Ingredients");
//     expect(textElement).toBeInTheDocument();
//   });
// });
