import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import MainContainer from './components/containers/MainContainer';
import ColorControlContainer from './components/containers/ColorControlContainer';
import OuterContainer from './components/containers/OuterContainer';
import Controls from './components/inputs/Controls';
import MainHeader from './components/containers/MainHeader';
import ImageContainer from './components/containers/ImageContainer';
import Header from './components/containers/Header';
import Main from './components/containers/Main';
import Sidebar from './components/containers/Sidebar';
import loremIpsum from './components/text/loremIpsum';
import Title from './components/text/Title';
import BasicSignUp from './components/inputs/basicSignUp';
import NewPaula from './new-paula';
import More from './components/containers/More';
import Footer from './components/containers/Footer';
import Footer1 from './components/containers/Footer1';
import Product1Main from './components/containers/Product1Main';
import Header1 from './components/containers/Header1';
import StatusBar from './components/containers/widgets/statusBar';


import MockUp1 from './components/mockups/MockUp1';
import MockUp2 from './components/mockups/MockUp2';
import MockUp3 from './components/mockups/MockUp3';



class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '#37d5d8',
      mainContainer: '#64f8f1',
      footer: '#873447',
      textColor: '#000000',
      iconColor: '#fff'
    };
    this.header = this.header.bind(this);
    this.mainContainer = this.mainContainer.bind(this);
    this.footer = this.footer.bind(this);
    this.textColor = this.textColor.bind(this);
    this.iconColor = this.iconColor.bind(this);
  }

  header(e) {
    this.setState({header: e.target.value});
  }

  mainContainer(e) {
    this.setState({mainContainer: e.target.value});
  }

  footer(e) {
    this.setState({footer: e.target.value});
  }

  textColor(e) {
    this.setState({textColor: e.target.value});
  }

  iconColor(e) {
    this.setState({iconColor: e.target.value});
  }

	render() {
		return (
			<div>
        <MainHeader color1={this.state.header}>
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          <img className="logo" src="./logo.png" />
        </MainHeader>
        <OuterContainer>
          <ImageContainer>
            <MockUp3
              header={this.state.header}
              iconColor={this.state.iconColor}
              main={this.state.mainContainer}
              statusBar={this.state.footer}
              textColor={this.state.textColor}
              footer={this.state.footer}
            />
            <img
              src="./iphone.png"
              className="iphoneMockUp"
            />
          </ImageContainer>
        </OuterContainer>
        <ColorControlContainer>
          <Controls
            header={this.header}
            headerValue={this.state.header}
            mainContainer={this.mainContainer}
            mainContainerValue={this.state.mainContainer}
            footer={this.footer}
            footerValue={this.state.footer}
            textColor={this.textColor}
            textColorValue={this.state.textColor}
            iconColor={this.iconColor}
            iconColorValue={this.state.iconColor}
          />
        </ColorControlContainer>
			</div>
		);
	}
}

export default connect(
	({paula}) => ({paula})
)(MainComponent);
