import React from "react";
import { Form, Checkbox, Button, Segment, Grid ,Header} from "semantic-ui-react";

/*   

    this is as is from the documentation. 
    you need to add handlers e.g. for submit

*/
const FormBasic = () => (
  <Grid
    textAlign="center"
    style={{ backgroundColor: "red" ,height : '100vh'}}
    verticalAlign="middle"
  >
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2">This is the form header</Header>
      <Form>
        <Segment stacked>
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
          <Button fluid type="submit">Submit</Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default FormBasic;
