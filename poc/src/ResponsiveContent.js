import React, { Component } from "react";
import { Responsive, Menu,  Header } from "semantic-ui-react";

class ResponsiveContent extends Component {
  menuItems = ["home", "messages", "posts", "partners", "team", "about"];
  state = { active: this.menuItems[0] };
  handleItemClick = (e, { name }) => this.setState({ active: name });
  breakpoint = 500;

  render() {
    const { active } = this.state;
    const menuItemsElements = this.menuItems.map((item, index) => (
      <Menu.Item
        active={active === item}
        name={item}
        onClick={this.handleItemClick}
        key={index}
      >
        <Header as='h4'>{item[0].toUpperCase() + item.slice(1)}</Header>
      </Menu.Item>
    ));

    return (
      <>
        <p>
          change the width of the window and see the menu changes from horizontal to vertical on the breakpoint - hard code on {`${this.breakpoint}px`}
        </p>
        <Responsive as={Menu} minWidth={this.breakpoint + 1} vertical={false}>
          {menuItemsElements}
        </Responsive>
        <Responsive as={Menu} maxWidth={this.breakpoint} vertical={true}>
          {menuItemsElements}
        </Responsive>
      </>
    );
  }
}

export default ResponsiveContent;
