import React from 'react';
import {connect} from 'react-redux';
import { SketchPicker } from 'react-color';
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
import Footer1 from './components/containers/footer1';
import Product1Main from './components/containers/Product1Main';
import Header1 from './components/containers/header1';
import StatusBar from './components/containers/widgets/statusBar';


import MockUp1 from './components/mockups/MockUp1';
import MockUp2 from './components/mockups/MockUp2';
import MockUp3 from './components/mockups/MockUp3';



class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '#873447',
      mainContainer: '#64f8f1',
      footer: '#873447',
      textColor: '#000000',
      iconColor: '#fff',
      statusBar: '#000000',
      profileContainer: '#873447',
    };
    this.header = this.header.bind(this);
    this.mainContainer = this.mainContainer.bind(this);
    this.footer = this.footer.bind(this);
    this.statusBar = this.statusBar.bind(this);
    this.profileContainer = this.profileContainer.bind(this);
    this.textColor = this.textColor.bind(this);
    this.iconColor = this.iconColor.bind(this);
  }

  header(e) {
    this.setState({header: e.hex});
  }

  mainContainer(e) {
    this.setState({mainContainer: e.hex});
  }

  footer(e) {
    this.setState({footer: e.hex});
  }

  profileContainer(e) {
    this.setState({profileContainer: e.hex});
  }

  statusBar(e) {
    this.setState({statusBar: e.hex});
  }

  textColor(e) {
    this.setState({textColor: e.hex});
  }

  iconColor(e) {
    this.setState({iconColor: e.hex});
  }

	render() {
		return (
			<div>
        <MainHeader color1={this.state.header}>
          <img className="logo" src="./color-wheel.svg" />
        </MainHeader>
        <OuterContainer>
          <ImageContainer>
            <MockUp3
              header={this.state.header}
              iconColor={this.state.iconColor}
              main={this.state.mainContainer}
              statusBar={this.state.statusBar}
              profileContainer={this.state.profileContainer}
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
            MockUp3={true}
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
            profileContainer={this.profileContainer}
            profileContainerValue={this.state.profileContainer}
            statusBar={this.statusBar}
            statusBarValue={this.state.statusBar}
          />
        </ColorControlContainer>

			</div>
		);
	}
}

export default connect(
	({paula}) => ({paula})
)(MainComponent);
