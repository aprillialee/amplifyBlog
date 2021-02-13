import { API, graphqlOperation } from "aws-amplify";
import React, { useState, useEffect } from "react";

import { createPost } from "../graphql/mutations";

import styled from "styled-components";

const initialState = {};

function CreatePost() {
  const [postState, updatePostState] = useState(initialState);

  function onChange(event) {
    updatePostState({ postTitle: event.target.value });
  }

  async function handleAddPost(event) {
    const input = {
      postOwnerId: "1234",
      postOwnerUsername: "Jimbo",
      postTitle: postTitle,
      postBody: postBody,
      createdAt: new Date().toISOString(),
    };
    const newPost = await API.graphql(
      graphqlOperation(createPost, {
        input: {
          postOwnerId: postOwnerId,
          postOwnerUsername: postOwnerUsername,
          postTitle: postTitle,
          postBody: postBody,
        },
      })
    );
    updatePostState(newPost);
  }

  return (
    <FormStyled>
      <Form onSubmit={handleAddPost}>
        <InputStyled
          type="text"
          placeholder="Enter Your Title Here"
          name="postTitle"
          required
          value={postTitle}
          onChange={onChange}
        />
        <TextAreaStyled
          type="text"
          name="postBody"
          placeholder="Type a new post"
          required
          onChange={onChange}
        />
        <SubmitButtonStyled>Create Post</SubmitButtonStyled>
      </Form>
    </FormStyled>
  );
}

const FormStyled = styled.div`
  margin-top: 50px;
  border-radius: 5px;
  width: 500px;
  height: 280px;
  border: 1px solid grey;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 100%;
`;

const InputStyled = styled.input`
  width: 350px;
  height: 35px;
  padding-left: 20px;
`;

const TextAreaStyled = styled.textarea`
  height: 100px;
  width: 350px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SubmitButtonStyled = styled.button`
  margin-top: 10px;
  border: 2px solid #e93838;
  border-radius: 5px;
  font-weight: 600;
  padding: 10px;
  width: 200px;
  background: blueviolet;
  opacity: 50%;
  color: white;
`;

export default CreatePost;

/* async function handleAddPost() {
  if (!postState.postTitle) return;

  const newPost = await API.graphql(
    graphqlOperation(createPost, {
      input: {
        postOwnerId: "9876",
        postOwnerUsername: "createPoster1",
        postTitle: postTitle,
        postBody: "This post was created using CreatePost",
      },
    })
  );
  updatePostState(newPost);
}
*/
