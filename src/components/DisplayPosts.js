import React, { useState, useEffect } from "react";

import * as queries from "../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

import DeletePost from "./DeletePost";
import EditPost from "./EditPost";

import styled from "styled-components";

function DisplayPosts() {
  const [posts, updatePosts] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    getPosts().then((posts) => {
      if (isSubscribed) {
        updatePosts(posts);
      }
    });
    return () => (isSubscribed = false);
  }, []);

  async function getPosts() {
    const allPostsData = await API.graphql({ query: queries.listPosts });
    const allPosts = allPostsData.data.listPosts.items;
    return allPosts;
  }
  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <Title>{post.postTitle}</Title>
          <Body>{post.postBody}</Body>
          <Author>Written By: {post.postOwnerUsername}</Author>
          <DateStyled>
            Posted on: {new Date(post.createdAt).toDateString()}
          </DateStyled>
          <br />
          <Buttons>
            <EditPost />
            <DeletePost />
          </Buttons>
        </PostCard>
      ))}
    </div>
  );
}

const PostCard = styled.div`
  width: 500px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 2px #ccc;
  padding: 10px;
  margin: 50px;
`;

const Title = styled.h1`
  font-size: 25px;
`;

const Body = styled.h2`
  font-size: 15px;
`;

const Author = styled.p`
  font-size: 10px;
`;

const DateStyled = styled.time`
  font-size: 10px;
  color: lightblue;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default DisplayPosts;
