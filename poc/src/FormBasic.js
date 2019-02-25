import React from "react";
import {Form , Checkbox , Button} from 'semantic-ui-react'

/*   

    this is as is from the documentation. 
    you need to add handlers e.g. for submit

*/
const FormBasic = () => (
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
    <Button type="submit">Submit</Button>
  </Form>
);

export default FormBasic;