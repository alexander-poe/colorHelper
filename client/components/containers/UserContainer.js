import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  height: 117px;
  margin-top: 100px;
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  background: ${ props => props.color }
  padding-top: 66px;
  font-size: 76px;
`;

export default UserContainer;
