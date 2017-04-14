import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  padding: 20px;
  width: 90%;
  background-color: ${props => props.color};
`;

export default Main;
