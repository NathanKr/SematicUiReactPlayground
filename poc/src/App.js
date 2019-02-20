import React, { Component } from "react";
import { Button, Icon, Label } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Buttons</h2>
        <Button primary>primary</Button>
        <Button secondary>secondary</Button>
        <Button float>secondary</Button>
        <br />
        <br />
        <Button animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
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
        <Button fluid>fluid</Button>
        <br />
        <Button icon>
          <Icon name="cart arrow down" />
        </Button>
        <Button basic color="basic orange">
          Orange
        </Button>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
        <br />
        <br />
        Button groups :
        <Button.Group>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </Button.Group>
        <br />
        <br />
        <hr />
        <h2>Labels</h2>
        <Label>
          <Icon name="mail" /> 23
        </Label>
        <br />
        <br />
        <input type="text" placeholder="First name" />
        <Label pointing="left">Please enter a value</Label>
      </div>
    );
  }
}

export default App;
