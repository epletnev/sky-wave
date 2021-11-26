import React, { useState } from "react";
import TabMenu from "../tabMenu/TabMenu";
import "./Tabs.scss";

function TabsCategory() {
  const [category, setCategory] = useState("All");

  const changeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="tabs-menu">
      <button onClick={changeCategory} value="All" autoFocus>
        All Category
      </button>
      <button onClick={changeCategory} value="Breakfast">
        Breakfast
      </button>
      <button onClick={changeCategory} value="Lunch">
        Lunch
      </button>
      <button onClick={changeCategory} value="Dinner">
        Dinner
      </button>
      <TabMenu category={category} />
    </div>
  );
}

export default TabsCategory;
