import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import MainContainer from './components/containers/MainContainer';
import Header from './components/containers/Header';
import Main from './components/containers/Main';
import Sidebar from './components/containers/Sidebar';
import loremIpsum from './components/text/loremIpsum';
import BasicSignUp from './components/inputs/basicSignUp';
import NewPaula from './new-paula';
import Footer from './components/containers/Footer';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '#F2E4BD',
      mainContainer: '#F8E3B6',
      sideBar: '#196C8C',
      footer: '#D82F4E',
      main: '#E98C7D',
    };
    this.header = this.header.bind(this);
    this.mainContainer = this.mainContainer.bind(this);
    this.sideBar = this.sideBar.bind(this);
    this.footer = this.footer.bind(this);
    this.main = this.main.bind(this);
  }

  header(e) {
    this.setState({header: e.target.value});
  }

  mainContainer(e) {
    this.setState({mainContainer: e.target.value});
  }

  sideBar(e) {
    this.setState({sideBar: e.target.value});
  }

  footer(e) {
    this.setState({footer: e.target.value});
  }

  main(e) {
    this.setState({main: e.target.value});
  }

	render() {
		return (
			<div>
        <Header color1={this.state.header}>
          <label>
            Header:
            <input onChange={this.header} type="color" value={this.state.header} />
            <input onChange={this.header} type="text" value={this.state.header} />
          </label>
          <label>
            Container:
            <input onChange={this.mainContainer} type="color" value={this.state.mainContainer} />
            <input onChange={this.mainContainer} type="text" value={this.state.mainContainer} />
          </label>
          <label>
            Sidebar:
            <input onChange={this.sideBar} type="color" value={this.state.sideBar} />
            <input onChange={this.sideBar} type="text" value={this.state.sideBar} />
          </label>
          <label>
            Footer:
            <input onChange={this.footer} type="color" value={this.state.footer} />
            <input onChange={this.footer} type="text" value={this.state.footer} />
          </label>
          <label>
            Main:
            <input onChange={this.main} type="color" value={this.state.main} />
            <input onChange={this.main} type="text" value={this.state.main} />
          </label>
          <Title> Color Helper </Title>
        </Header>
				<MainContainer color={this.state.mainContainer}>
          <Sidebar color={this.state.sideBar}/>
          <Main color={this.state.main}>
            <loremIpsum>
              {text}
            </loremIpsum>
          </Main>
				</MainContainer>
        <Footer color={this.state.footer} />
			</div>
		);
	}
}

const text = 'Locavore kale chips edison bulb pug, twee fanny pack kombucha live-edge scenester pinterest yuccie cold-pressed. Master cleanse pitchfork hashtag, dreamcatcher cred 8-bit blog selvage venmo food truck whatever vaporware stumptown intelligentsia lomo. Raclette quinoa vegan, yr artisan small batch mustache enamel pin kale chips blue bottle iceland williamsburg pour-over umami glossier. Wayfarers tumeric brunch viral hell of. Woke roof party raw denim aesthetic, synth bicycle rights forage heirloom direct trade jianbing hoodie. Hell of hoodie quinoa, iPhone williamsburg fingerstache ugh sartorial. Pork belly polaroid selfies, glossier pok pok air plant celiac.';

export default connect(
	//Select your state -> props mappings here
	({paula}) => ({paula})
)(MainComponent);
