import { GET_MENU } from "./menuType";
// import axios from "axios";

const data = [
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
  {
    id: 2,
    name: "Salmon And Avocado Bruschetta",
    description:
      "Black bread, smoked salmon, Philadelphia cheese, avocado, tomatoes, eggs.",
    price: 12.5,
    image: {
      small: "assets/images/foods/breakfast/2/small.jpg",
      medium: "assets/images/foods/breakfast/2/medium.jpg",
      big: "assets/images/foods/breakfast/2/big.jpg",
    },
    discount: 10,
    ratingsCount: 4,
    ratingsValue: 320,
    availibilityCount: 7,
    cartCount: 0,
    weight: 180,
    isVegetarian: false,
    categoryId: "Breakfast",
    reviews: [
      {
        name: "aravind",
        email: "aravindjai0@gmail.com",
        phone: "3333333123",
        FoodQuality: "Average",
        MenuVariety: "Not Satisfied",
        Service: "Average",
        Atmosphere: "Average",
        message:
          "complete this eros and my ecological financing. The said ugly needs a great cartoon flavor. As expected sometimes vengeful. Therefore, a sad scenario for the kids, to put down the housing, the biggest big thing. Aeneas feasibility, the torturer of the pregnant element to stop, just the vehicle of the arches, the need of the bow of the earth in a great way.",
        rating: 5,
        date: "2021-09-19T20:56:13.084Z",
      },
    ],
  },
  {
    id: 3,
    name: "Croque Madame",
    description:
      "Toasted bread, veal salami, eggs, butter, Gouda cheese, arugula, cucumber, radish.",
    price: 9.5,
    image: {
      small: "assets/images/foods/breakfast/3/small.jpg",
      medium: "assets/images/foods/breakfast/3/medium.jpg",
      big: "assets/images/foods/breakfast/3/big.jpg",
    },
    discount: 0,
    ratingsCount: 4,
    ratingsValue: 370,
    availibilityCount: 5,
    cartCount: 0,
    weight: 125,
    isVegetarian: false,
    categoryId: "Dinner",
    reviews: [
      {
        name: "Ram",
        email: "email@gmail.com",
        phone: "7283988923",
        FoodQuality: "Average",
        MenuVariety: "Average",
        Service: "Not Satisfied",
        Atmosphere: "Average",
        message:
          "complete this eros and my ecological financing. The said ugly needs a great cartoon flavor. As expected sometimes vengeful. Therefore, a sad scenario for the kids, to put down the housing, the biggest big thing. Aeneas feasibility, the torturer of the pregnant element to stop, just the vehicle of the arches, the need of the bow of the earth in a great way.",
        rating: 3,
        date: "2021-09-20T03:51:53.474Z",
      },
    ],
  },
  {
    id: 4,
    name: "Cheese Pancakes",
    description:
      "Puff pastry, cheese filling, arugula, carrot, cucumber, radish.",
    price: 7.3,
    image: {
      small: "assets/images/foods/breakfast/4/small.jpg",
      medium: "assets/images/foods/breakfast/4/medium.jpg",
      big: "assets/images/foods/breakfast/4/big.jpg",
    },
    discount: 0,
    ratingsCount: 4,
    ratingsValue: 380,
    availibilityCount: 7,
    cartCount: 0,
    weight: 110,
    isVegetarian: false,
    categoryId: "Lunch",
    reviews: [],
  },
  {
    id: 5,
    name: "Cheese Sandwich",
    description:
      "Toasted bread, Cheddar cheese, Gouda cheese, butter, arugula, cucumber, radish.",
    price: 7.3,
    image: {
      small: "assets/images/foods/breakfast/5/small.jpg",
      medium: "assets/images/foods/breakfast/5/medium.jpg",
      big: "assets/images/foods/breakfast/5/big.jpg",
    },
    discount: 0,
    ratingsCount: 5,
    ratingsValue: 480,
    availibilityCount: 7,
    cartCount: 0,
    weight: 110,
    isVegetarian: false,
    categoryId: "Breakfast",
    reviews: [],
  },
  {
    id: 31,
    name: "Red Wine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 25.5,
    image: {
      small: "assets/images/foods/drinks/1/small.jpg",
      medium: "assets/images/foods/drinks/1/medium.jpg",
      big: "assets/images/foods/drinks/1/big.jpg",
    },
    discount: 0,
    ratingsCount: 4,
    ratingsValue: 480,
    availibilityCount: 5,
    cartCount: 0,
    weight: 250,
    isVegetarian: false,
    categoryId: "Lunch",
    reviews: [
      {
        name: "Akash",
        email: "as@gmail.com",
        phone: "9998897888",
        FoodQuality: "Average",
        MenuVariety: "Average",
        Service: "Not Satisfied",
        Atmosphere: "Satisfied",
        message:
          "A review of a situation or system is its formal examination by people in authority. ... When a military or political leader reviews troops, they examine them, or watch them marching.\n",
        rating: 3,
        date: "2021-09-20T04:21:35.155Z",
      },
    ],
  },
];

// get all menu data
export const getMenu = () => (dispatch) => {
  const result = [...data];
  dispatch({
    type: GET_MENU,
    payload: result,
  });
};

// // get all menu data
// export const getMenu = () => async (dispatch) => {
//   const result = await axios.get("http://localhost:5000/data");
//   dispatch({
//     type: GET_MENU,
//     payload: result.data,
//   });
// };
