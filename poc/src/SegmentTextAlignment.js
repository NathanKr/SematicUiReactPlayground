import React from "react";
import { Segment } from "semantic-ui-react";

const SegmentTextAlignment = () => {
  return (
    <div>
      <Segment textAlign="right">Right aligned content.</Segment>
      <Segment textAlign="left">Left aligned content.</Segment>
      <Segment textAlign="center">Center aligned content.</Segment>
    </div>
  );
};

export default SegmentTextAlignment;
