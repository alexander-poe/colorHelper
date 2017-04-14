import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 100%;
  background-color: ${props => props.color1};
  color: white;
`;

export default Header;
