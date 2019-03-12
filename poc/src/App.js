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
import ModalsSample from "./ModalsSample";
import ResponsiveSamples from "./ResponsiveSamples";
import ConfirmsSamples from "./ConfirmsSamples";
import SegmentsSample from './SegmentsSample'
import TransitionsSample from './TransitionsSample'
import DropdownsSample from './DropdownsSample'
import { Menu, Segment } from "semantic-ui-react";

class App extends Component {
  state = { activeItem: "modal" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const names = {
      buttons: "button",
      labels: "label",
      messages: "message",
      forms: "form",
      list: "list",
      menus: "menu",
      tables: "table",
      steps: "step",
      cards: "card",
      grids: "grid",
      modals: "modal",
      confirms: "confirm",
      responsive: "responsive",
      segments : "segment",
      transitions : "transition",
      dropdowns : "dropdown"
    };

    const sortedNames = Object.entries(names).sort();
    const menuItems = sortedNames.map((it, index) => {
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
          <Menu size="tiny" inverted pointing secondary>
            {menuItems}
          </Menu>
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
        {activeItem === names.modals ? <ModalsSample /> : ""}
        {activeItem === names.responsive ? <ResponsiveSamples /> : ""}
        {activeItem === names.confirms ? <ConfirmsSamples /> : ""}
        {activeItem === names.segments ? <SegmentsSample/> : ""}
        {activeItem === names.transitions ? <TransitionsSample/> : ""}
        {activeItem === names.dropdowns ? <DropdownsSample/> : ""}
      </div>
    );
  }
}

export default App;
