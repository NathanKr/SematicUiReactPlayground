import React from "react";
import MenuExampleBasic from "./MenuBasic";
import MenuWithSearch from './MenuWithSearch'

const MenusSample = () => {
  return (
    <div>
      <h1>Menus</h1>
      <h2>Basic Menu</h2>
      <p>click on item issue onClick , check MenuBasic component</p>
      <MenuExampleBasic />
      <h2>Menu with Search</h2>
      <p>click on item issue onClick , check MenuWithSearch component</p>
      <MenuWithSearch/>
      <hr/>
    </div>
  );
};

export default MenusSample;
