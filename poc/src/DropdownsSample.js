import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropdownsSample = () => {
  return (
    <div>
      <h2>simple dropdown</h2>
      <Dropdown text="File">
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => console.log("clicked on new")}
            text="New"
          />
          <Dropdown.Item
            onClick={() => console.log("clicked on open")}
            text="Open..."
            description="ctrl + o"
          />
          <Dropdown.Item
            onClick={() => console.log("clicked on save as")}
            text="Save as..."
            description="ctrl + s"
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownsSample;
