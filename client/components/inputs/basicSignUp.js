import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  width: 29%;
  height: 100px;
  flex-direction: column;
  background-color: 'white';
`;

const Input = styled.input`
  color: #EEAA7B;
  height: 40px;
`;

const basicSignUp = (props) => {
  return (
  <Form>
    <Input type={props.type1} />
    <Input type={props.type2} />
    <Input type={props.type3} />
    <Input type={props.type4} />
  </Form>
  );
};

export default basicSignUp;
