import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 31.8%;
  margin-left: 15.2%;
  height: 471px;
  width: 73.6%;
  background-color: ${props => props.color};
`;

export default MainContainer;
