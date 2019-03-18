import React from "react";
import { Comment } from "semantic-ui-react";

const CommentsSample = () => {
  return (
    <div>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" />
          <Comment.Content>
            <Comment.Author>Nathan Kr</Comment.Author>
            <Comment.Metadata>two days ago</Comment.Metadata>
            <Comment.Text>
              Hey guys, I hope this example comment is helping you read this
              documentation.
            </Comment.Text>
          </Comment.Content>
        </Comment>
        <Comment>
          <Comment.Avatar src="https://cdn.pixabay.com/photo/2017/01/31/19/07/avatar-2026510__340.png" />
          <Comment.Content>
            <Comment.Author>Jim Smith</Comment.Author>
            <Comment.Metadata>1 day ago</Comment.Metadata>
            <Comment.Text>
              Hey guys, I also hope this example comment is helping you read this
              documentation.
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </div>
  );
};

export default CommentsSample;
