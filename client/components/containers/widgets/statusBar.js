import React from 'react';
import styled from 'styled-components';

const StatusBar = styled.div`
  background: ${props => props.color};
  color: black;
  font-size: 27px;
  margin-top: 30px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

export default StatusBar;
