import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  height: 65px;
  width: 100%;
  background-color: ${props => props.color};
  position: absolute;
  bottom: 0;
`;

export default Footer;
