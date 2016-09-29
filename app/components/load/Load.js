import React, {Component} from 'react'

class Load extends Component{
  render(){
    let style = {};
    style.display = this.props.load ? 'block' :'none';

    return (
      <div style={style}>
        <img src="assets/images/load.gif" />
      </div>
    );
  }
}

export default Load;
