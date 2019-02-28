import React from "react";
import { Grid, Image, Label } from "semantic-ui-react";

const GridWithFloat = () => {
  return (
    <div>
      <h2>Grid with float and text aligned</h2>
      <Grid celled>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Label pointing="left">image is floated left</Label>
            <Image
              size="medium"
              floated="left"
              src="https://cdn.pixabay.com/photo/2014/12/22/10/04/lion-577104__340.jpg"
            />
          </Grid.Column>
          <Grid.Column>
            <Label pointing="right">image is floated right</Label>
            <Image
              size="medium"
              floated="right"
              src="https://cdn.pixabay.com/photo/2016/01/02/16/53/lion-1118467__340.jpg"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="equal">
          <Grid.Column textAlign="right">
            Right text aligned content
          </Grid.Column>
          <Grid.Column textAlign="left">Left text aligned content</Grid.Column>
          <Grid.Column textAlign="center">
            Center text aligned content
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default GridWithFloat;
