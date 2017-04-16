import React from 'react';
import MainContainer from '../containers/MainContainer';
import Header from '../containers/Header';
import Main from '../containers/Main';
import Footer from '../containers/Footer';

const MockUp1 = (props) => {
  return(
    <MainContainer color={props.color}>
      <Header color1={props.header}>
        <i
        style={{fontSize: '22px', color: props.iconColor}}
        className="fa fa-user-circle headIcon"
        aria-hidden="true"
        >
        </i>
      </Header>
      <Main>
        <p>{text}</p>
      </Main>
      <Footer color={props.footerColor}>
        <p style={{color: props.textColor}}>sometext</p>
      </Footer>
    </MainContainer>
  );
};

const text = 'Locavore kale chips edison bulb pug, twee fanny pack kombucha live-edge scenester pinterest yuccie cold-pressed. Master cleanse pitchfork hashtag, dreamcatcher';

export default MockUp1;
