import React from "react";
import { Modal, Header, Button, Image } from "semantic-ui-react";

const ModalBasic = () => {
  return (
    <>
      <p>trigger is the important props</p>
      <p>ESC will close the modal</p>
      <Modal trigger={<Button>Show Modal</Button>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image
            wrapped
            size="medium"
            src="https://media.gettyimages.com/photos/lion-picture-id144860547?s=612x612"
          />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ModalBasic;
