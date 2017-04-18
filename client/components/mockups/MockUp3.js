import React from 'react';
import Header1 from '../containers/Header1';
import Product1Main from '../containers/Product1Main';
import Footer1 from '../containers/Footer1';
import StatusBar from '../containers/widgets/statusBar';
import MainContainer from '../containers/MainContainer';
import More from '../containers/More';

const MockUp3 = (props) => {
  return (
    <MainContainer color={props.main}>
        <Header1 color={props.header}>
          <i className="fa fa-bars" style={{color: props.iconColor}}aria-hidden="true"></i>
          <p style={{color: props.textColor}}> Home </p>
          <i className="fa fa-pencil-square-o" style={{color: props.iconColor}}aria-hidden="true"></i>
        </Header1>
        <Product1Main color={props.profileContainer}>
            <i className="fa fa-user-circle-o" style={{color: props.iconColor}}aria-hidden="true"></i>
            <StatusBar color={props.statusBar}>
              <i className="fa fa-bolt" style={{color: props.iconColor}}aria-hidden="true"></i> |
              <i className="fa fa-retweet" style={{color: props.iconColor}}aria-hidden="true"></i> |
              <i className="fa fa-plus-circle" style={{color: props.iconColor}}aria-hidden="true"></i>
            </StatusBar>
          </Product1Main>
          <Footer1 color={props.footer}>
            <i className="fa fa-refresh" style={{color: props.iconColor}}aria-hidden="true"></i>
            <i className="fa fa-cube" style={{color: props.iconColor}}aria-hidden="true"></i>
            <i className="fa fa-cog" style={{color: props.iconColor}}aria-hidden="true"></i>
          </Footer1>
          <More>
            <i className="fa fa-arrow-down" style={{color: props.iconColor}}aria-hidden="true"></i>
          </More>
      </MainContainer>
  );
};

export default MockUp3;
