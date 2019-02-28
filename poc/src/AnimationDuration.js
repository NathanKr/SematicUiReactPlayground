import React, { Component } from 'react'
import { Form, Grid, Image, Transition } from 'semantic-ui-react'

class AnimationDuration extends Component {
  state = { hide: 500, show: 500, visible: true }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { hide, show, visible } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column as={Form}>
          <Form.Input
            label={`Hide duration: ${hide}ms `}
            min={100}
            max={5000}
            name='hide'
            onChange={this.handleChange}
            step={100}
            type='range'
            value={hide}
          />
          <Form.Input
            label={`Show duration: ${show}ms `}
            min={100}
            max={5000}
            name='show'
            onChange={this.handleChange}
            step={100}
            type='range'
            value={show}
          />
          <Form.Button content='Run' onClick={this.toggleVisibility} />
        </Grid.Column>

        <Grid.Column>
          <Transition duration={{ hide, show }} visible={visible}>
            <Image centered      src='https://image.shutterstock.com/image-photo/extreme-sport-kite-surfer-riding-260nw-135894995.jpg' />
          </Transition>
        </Grid.Column>
      </Grid>
    )
  }
}

export default AnimationDuration;