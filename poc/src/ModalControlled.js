import React, { Component } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

export default class ModalControlled extends Component {
  state = { modalOpen: false };
  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <>
        <p>open\onClose are the important props</p>
        <Modal
          trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size="tiny"
        >
          <Header icon="browser" content="Cookies policy" />
          <Modal.Content>
            <h3>
              This website uses cookies to ensure the best user experience.
            </h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.handleClose} inverted>
              <Icon name="checkmark" /> Got it
            </Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}
