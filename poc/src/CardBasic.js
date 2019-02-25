import React from "react";
import {Icon , Card} from 'semantic-ui-react'

const extra = (
  <div>
    <Icon name="user" />
    16 Friends
  </div>
);

const CardsBasic = () => (
  <Card
    image="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
    header="Elliot Baker"
    meta="Friend"
    description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
    extra={extra}
  />
);

export default CardsBasic;
