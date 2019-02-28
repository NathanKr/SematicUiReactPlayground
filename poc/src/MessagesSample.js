import React from "react";
import { Message } from "semantic-ui-react";

const MessagesSample = () => {
  return (
    <div>
      <Message>
        <Message.Header>Changes in Service</Message.Header>
        <p>
          We updated our privacy policy here to better service our customers. We
          recommend reviewing the changes.
        </p>
      </Message>
      <Message warning>
        <Message.Header>This is an warning</Message.Header>
        <p>
          This is some warning description
        </p>
      </Message>
      <Message error>
        <Message.Header>This is an error</Message.Header>
        <p>
          This is some error description
        </p>
      </Message>
      <hr/>
    </div>
  );
};

export default MessagesSample;
