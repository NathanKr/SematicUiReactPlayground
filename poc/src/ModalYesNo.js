import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

class ModalYesNo extends Component {
  state = { open: false };
  state = { modalOpen: false };
  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Basic Modal</Button>}
        basic
        size="small"
        open={this.state.modalOpen}
      >
        <Header icon="archive" content="Archive Old Messages" />
        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => {
              this.handleClose();
              console.log("clicked no");
            }}
            basic
            color="red"
            inverted
          >
            <Icon name="remove" /> No
          </Button>
          <Button
            onClick={() => {
              this.handleClose();
              console.log("clicked yes");
            }}
            color="green"
            inverted
          >
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalYesNo;
