import React from 'react';
import { SketchPicker } from 'react-color';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKey: 0
    };
  }
  changeColorControls(e) {
    this.setState({currentKey: e.target.value});
  }

  render() {
    const keys = [
      this.props.mainContainer, this.props.header, this.props.profileContainer, this.props.statusBar,
      this.props.footer, this.props.iconColor, this.props.textColor
    ];
    return (
      <div>
        <select id="select" onChange={this.changeColorControls.bind(this)}>
          <option value={0}>Main Container</option>
          <option value={1}>Header</option>
          <option value={2}>Profile Container</option>
          <option value={3}>Status Bar</option>
          <option value={4}>Footer</option>
          <option value={5}>Icon Color</option>
          <option value={6}>Text Color</option>
        </select>
        <SketchPicker
          style={{backgroundColor: '#1E7BD8'}}
          color={'#1E7BD8'}
          onChangeComplete={keys[this.state.currentKey]}
        />
      </div>
    );
  }
}

export default Controls;
