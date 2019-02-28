import React from "react";

import { Grid, Segment , Button } from "semantic-ui-react";

const GridStretched = () => (
  <div>
    <h2>Grid stretch</h2>
    <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column>
          <Button>This is a Button</Button>
        </Grid.Column>
        <Grid.Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
          <Segment>3</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default GridStretched;
