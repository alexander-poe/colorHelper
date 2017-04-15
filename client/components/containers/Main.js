import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  margin-top: 47px;
  height: 313px;
  margin-left: 3%;
  width: 79%;
  background-color: ${props => props.color};
`;

export default Main;
