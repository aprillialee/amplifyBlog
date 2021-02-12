import React from "react";

import styled from "styled-components";

function EditPost() {
  return <EditPostStyled>Edit Post</EditPostStyled>;
}

const EditPostStyled = styled.button`
  margin-top: 20px;
  border: 2px solid lightgreen;
  border-radius: 5px;
  font-weight: 600;
  padding: 10px;
  width: 100px;
  background: white;
  opacity: 50%;
  color: lightgreen;
`;

export default EditPost;
