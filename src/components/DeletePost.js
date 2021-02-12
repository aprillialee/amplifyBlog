import React from "react";

import styled from "styled-components";

function DeletePost() {
  return <ButtonStyled>Delete</ButtonStyled>;
}

const ButtonStyled = styled.button`
  margin-top: 20px;
  border: 2px solid #e93838;
  border-radius: 5px;
  font-weight: 600;
  padding: 10px;
  width: 100px;
  background: white;
  opacity: 50%;
  color: #e93838;
`;

export default DeletePost;
