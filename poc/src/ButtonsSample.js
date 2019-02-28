import React from "react";
import { Button, Icon} from "semantic-ui-react";

const ButtonsSample = () => {
  return (
    <div>
      
      <Button primary>primary</Button>
      <Button secondary>secondary</Button>
      <Button float='true'>secondary</Button>
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
      <Button basic color="orange">
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
      <hr />
    </div>
  );
};

export default ButtonsSample;
