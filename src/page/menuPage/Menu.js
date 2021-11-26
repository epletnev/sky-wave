import React from "react";
import Header from "../../component/header/Header";
import TabsCategory from "../../component/tabs/Tabs";
import TabMenu from "../../component/tabMenu/TabMenu";
import "./Menu.scss";

function Menu() {
  return (
    <div>
      <Header
        backgroundImage="assets/images/others/menu.jpg"
        title="Menu"
        description='"IF MORE OF US VALUED FOOD AND CHEER AND SONG ABOVE HOARDED GOLD, IT WOULD BE A MERRIER WORLD." – J.R.R. TOLKIEN'
      />
      <div className="container-menu">
        <TabsCategory />
        <TabMenu />
      </div>
    </div>
  );
}

export default Menu;
