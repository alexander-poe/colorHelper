import React from 'react';
import styled from 'styled-components';

const Footer1 = styled.div`
  position: absolute;
  background: ${props => props.color}
  display: flex;
  justify-content: space-around;
  padding-top: 14px;
  font-size: 24px;
  bottom: 0;
  width: 100%;
  height: 46px;
`;

export default Footer1;
