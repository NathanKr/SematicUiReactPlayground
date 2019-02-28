import React from "react";
import { Segment } from "semantic-ui-react";

const SegmentFloated = () => {
  return (
    <div>
      <Segment floated="left">This segment will appear to the left</Segment>
      <Segment floated="right">This segment will appear to the right</Segment>
    </div>
  );
};

export default SegmentFloated;
