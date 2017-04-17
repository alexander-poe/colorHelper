import React from 'react';
import styled from 'styled-components';

const Header1 = styled.div`
  background: ${props => props.color},
  display: inline-flex;
  justify-content: space-between;
  font-size: 23px;
  padding: 10px;
`;

export default Header1;
