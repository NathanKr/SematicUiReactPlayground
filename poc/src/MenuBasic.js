import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MenuBasic extends Component {
  state = {};

  /*
   event and all props are passed, - this is good design
   hover over onClick of Menu.Item to see documentation
   */

  handleItemClick = (e, { name }) => {
    console.log(`clicked : ${name}`);
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="editorials"
          active={activeItem === "editorials"}
          onClick={this.handleItemClick} 
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name="reviews"
          active={activeItem === "reviews"}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name="upcomingEvents"
          active={activeItem === "upcomingEvents"}
          onClick={this.handleItemClick}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
    );
  }
}
