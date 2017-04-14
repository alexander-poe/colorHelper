import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  height: 250px;
  width: 100%;
  background-color: ${props => props.color};
  bottom: 0;
`;

export default Footer;
