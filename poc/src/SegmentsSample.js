import React from "react";
import SegmentFloated from "./SegmentFloated";
import SegmentTextAlignment from "./SegmentTextAlignment";
import { Header } from "semantic-ui-react";

const SegmentsSample = () => {
  return (
    <div>
      <Header color="red">
        clearing does not work for me , put SegmentFloated first and you will
        see the problem (i was not able to fix this using clearning).
      </Header>
      <h2>Segment TextAlignment</h2>
      <h2>Segment floated</h2>

      <SegmentTextAlignment />
      <SegmentFloated />
    </div>
  );
};

export default SegmentsSample;
