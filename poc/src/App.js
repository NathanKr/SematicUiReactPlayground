import React, { Component } from "react";
import ButtonsSample from "./ButtonsSample";
import LabelsSample from "./LabelsSample";
import ListsSample from "./ListsSample";
import MenusSample from "./MenusSample";
import FormsSample from "./FormsSample";
import MessagesSample from "./MessagesSample";
import TablesSample from "./TablesSample";
import StepsSample from "./StepsSample";
import CardsSample from "./CardsSample";
import GridsSample from "./GridsSample";
import { Menu , Segment} from "semantic-ui-react";

class App extends Component {
  state = { activeItem: "buttons" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const names = {
      buttons: "buttons",
      labels: "labels",
      messages: "messages",
      forms: "forms",
      list: "lists",
      menus: "menus",
      tables: "tables",
      steps: "steps",
      cards: "cards",
      grids: "grids"
    };

    const menuItems = Object.entries(names).map((it, index) => {
      const name = it[1];
      return (
        <Menu.Item
          key={index}
          name={name}
          active={activeItem === name}
          onClick={this.handleItemClick}
        />
      );
    });
    return (
      <div>
        <h1>
          The number of components and UI designs is AMAZING -
          <a href="https://react.semantic-ui.com">check documentation here</a>
        </h1>
        <Segment inverted>
          <Menu inverted pointing secondary>{menuItems}</Menu>
        </Segment>
        {activeItem === names.buttons ? <ButtonsSample /> : ""}
        {activeItem === names.labels ? <LabelsSample /> : ""}
        {activeItem === names.messages ? <MessagesSample /> : ""}
        {activeItem === names.forms ? <FormsSample /> : ""}
        {activeItem === names.list ? <ListsSample /> : ""}
        {activeItem === names.menus ? <MenusSample /> : ""}
        {activeItem === names.tables ? <TablesSample /> : ""}
        {activeItem === names.steps ? <StepsSample /> : ""}
        {activeItem === names.cards ? <CardsSample /> : ""}
        {activeItem === names.grids ? <GridsSample /> : ""}
      </div>
    );
  }
}

export default App;
