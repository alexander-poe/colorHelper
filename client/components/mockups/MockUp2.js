import React from 'react';
import MainContainer from '../containers/MainContainer';
import UserContainer from '../containers/UserContainer';
import SignUp from '../inputs/SignUp';
import SignUpOptions from '../containers/widgets/SignUpOptions';

const MockUp2 = (props) => {
  return(
    <MainContainer color={props.footer}>
      <UserContainer color={props.mainContainer}>
        <i style={{color: props.iconColor}}  className="fa fa-user-circle-o" aria-hidden="true"></i>
      </UserContainer>
      <SignUp><p style={{margin: 10, color: props.textColor}}> email / user name</p></SignUp>
      <SignUp><p style={{margin: 10, color: props.textColor}}> password </p></SignUp>
      <SignUpOptions>
        <i style={{color: props.iconColor}} className="fa fa-instagram" aria-hidden="true"></i>
        <i style={{color: props.iconColor}} className="fa fa-facebook-official" aria-hidden="true"></i>
        <i style={{color: props.iconColor}} className="fa fa-tumblr-square" aria-hidden="true"></i>
        <i style={{color: props.iconColor}} className="fa fa-linkedin-square" aria-hidden="true"></i>
      </SignUpOptions>
    </MainContainer>
  );
};

export default MockUp2;
