import React from "react";
import { Icon, Label} from "semantic-ui-react";

const LabelsSample = () => {
  return (
    <div>
      <h1>Labels</h1>
      <Label>
        <Icon name="mail" /> 23
      </Label>
      <br />
      <br />
      <input type="text" placeholder="First name" />
      <Label pointing="left">Please enter a value</Label>
      <hr />
    </div>
  );
};

export default LabelsSample;
