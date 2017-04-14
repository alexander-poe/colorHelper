import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
  display: flex;
  height: 100%;
  width: 25%;
  background-color: ${props => props.color};
`;

export default Sidebar;
