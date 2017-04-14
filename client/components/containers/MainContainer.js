import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  height: 800px;
  width: 100%;
  background-color: ${props => props.color};
`;

export default MainContainer;
