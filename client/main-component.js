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
import Footer from './components/containers/Footer';



class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '#1E7BD8',
      mainContainer: '#F8E3B6',
      sideBar: '#196C8C',
      footer: '#D82F4E',
      textColor: '#E98C7D',
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

        </MainHeader>
        <OuterContainer>
          <ImageContainer>
            <MainContainer color={this.state.mainContainer}>
              <Header color1={this.state.header}>
                <i
                  className="fa fa-user-circle headIcon"
                  style={{color: this.state.iconColor}}
                  aria-hidden="true"
                >
                </i>
              </Header>
              <Main>
                <p style={{color: this.state.textColor}}>
                  {text}
                </p>
              </Main>
              <Footer color={this.state.footer}>
                <p style={{color: this.state.textColor}}>
                  sometext
                </p>
              </Footer>
            </MainContainer>
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

const text = 'Locavore kale chips edison bulb pug, twee fanny pack kombucha live-edge scenester pinterest yuccie cold-pressed. Master cleanse pitchfork hashtag, dreamcatcher';

export default connect(
	//Select your state -> props mappings here
	({paula}) => ({paula})
)(MainComponent);
