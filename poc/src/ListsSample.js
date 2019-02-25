import React from "react";
import {  List ,Image} from "semantic-ui-react";

const ListsSample = () => {
  return (
    <div>
      <h1>Lists</h1>
      <h2>Simple list</h2>
      <List>
        <List.Item>Apples</List.Item>
        <List.Item>Pears</List.Item>
        <List.Item>Oranges</List.Item>
      </List>
      <h2>List with icons</h2>
      <List>
        <List.Item icon="users" content="Semantic UI" />
        <List.Item icon="marker" content="New York, NY" />
        <List.Item
          icon="mail"
          content={
            <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
          }
        />
        <List.Item
          icon="linkify"
          content={<a href="http://www.semantic-ui.com">semantic-ui.com</a>}
        />
      </List>
      <h2>horizontal list</h2>
      <List horizontal>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/tom.jpg"
          />
          <List.Content>
            <List.Header>Tom</List.Header>
            Top Contributor
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
          />
          <List.Content>
            <List.Header>Christian Rocha</List.Header>
            Admin
          </List.Content>
        </List.Item>
        <List.Item>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
          />
          <List.Content>
            <List.Header>Matt</List.Header>
            Top Rated User
          </List.Content>
        </List.Item>
      </List>
      <hr/>
    </div>
  );
};

export default ListsSample;
