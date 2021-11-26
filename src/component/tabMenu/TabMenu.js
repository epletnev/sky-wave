import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMenu } from "../../redux/menu/menuAction";
import MenuCard from "../card/Card";
import "./TabMenu.scss";

function TabMenu({ category }) {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.menu);
  const location = useLocation();

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  return (
    <div className="flex-container">
      {location.pathname === "/"
        ? menu.map((item) => <MenuCard key={item.id} item={item} />)
        : menu
            .filter(
              (item) => category === "All" || item.categoryId === category
            )
            .map((item) => <MenuCard key={item.id} item={item} />)}
    </div>
  );
}

export default TabMenu;
