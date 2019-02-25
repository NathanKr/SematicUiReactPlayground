import React, { Component } from "react";
import "./App.css";
import {
  Button,
  Icon,
  Label,
  Message,
  Form,
  Checkbox,
  List,
  Menu,
  Table,
  Statistic
} from "semantic-ui-react";

class App extends Component {
  state = { activeItem: "bio" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <h2>Buttons</h2>
        <Button>Click Here !</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <br />
        <br />
        <Button animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
        <br />
        <br />
        <Button icon>
          <Icon name="heart" />
          Like
        </Button>
        <br />
        <br />
        <Button fluid>Fluid</Button>
        <br />
        <br />
        <Button icon>
          <Icon name="shopping cart" />
        </Button>
        <Button basic color="orange">
          Orange
        </Button>
        <Button disabled>disabled</Button>
        <Button loading>Loading</Button>
        <br />
        <br />
        <Button.Group basic>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </Button.Group>
        <h2>Labels</h2>
        <Label>
          <Icon name="mail" /> 23
        </Label>
        <input type="text" placeholder="First name" />
        <Label pointing="left">Please enter a value</Label>
        <h2>Messages</h2>
        <Message warning>
          <Message.Header>
            You must register before you can do that!
          </Message.Header>
          <p>Visit our registration page, then try again.</p>
        </Message>
        <Message negative>
          <Message.Header>
            We're sorry we can't apply that discount
          </Message.Header>
          <p>That offer has expired</p>
        </Message>
        <h2>Forms</h2>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button
            type="submit"
            onClick={() => {
              console.log("i was clicked");
            }}
          >
            Submit
          </Button>
        </Form>
        <h2>Lists</h2>
        <List ordered>
          <List.Item as="a">Getting Started</List.Item>
          <List.Item as="a">Introduction</List.Item>
          <List.Item>
            <p>Languages</p>
            <List.List>
              <List.Item as="a">HTML</List.Item>
              <List.Item as="a">Javascript</List.Item>
              <List.Item as="a">CSS</List.Item>
            </List.List>
          </List.Item>
          <List.Item as="a">Review</List.Item>
        </List>
        <h2>Menus</h2>
        <Menu tabular>
          <Menu.Item
            name="bio"
            active={activeItem === "bio"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="photos"
            active={activeItem === "photos"}
            onClick={this.handleItemClick}
          />
        </Menu>
        <h2>Tables</h2>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
              <Table.HeaderCell>Header</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>First</Label>
              </Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        <h2>Statistics</h2>
        <Statistic>
          <Statistic.Value>10000</Statistic.Value>
          <Statistic.Label>Downloads</Statistic.Label>
        </Statistic>
        )
      </div>
    );
  }
}

export default App;
