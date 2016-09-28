import React, { Component } from 'react'
import Load from './Load'
import { Button } from 'react-toolbox/lib/button'

class UserInfo extends Component {

  handleNewId() {
    this.props.actions.createNewUserId()
  }

  handleNewIdIfOdd() {
    this.props.actions.createNewUserIdIfOdd()
  }

  handleNewIdAsync() {
    this.props.actions.createNewUserIdAsync()
  }

  render() {
    let style = {};
    style.display = this.props.load ? 'none' : 'block';

    return (
      <li>
        <div>username: {this.props.user.username}</div>
        <div style={style}>id: {this.props.user.id}</div>
        <Load load={this.props.load} />
        <Button className="button primary raised" label="Update with random ID" onClick={this.handleNewId.bind(this)}/>
        <Button label="Update only if odd" onClick={this.handleNewIdIfOdd.bind(this)}/>
        <Button label="Update async" onClick={this.handleNewIdAsync.bind(this)}/>
      </li>
    )
  }

}

export default UserInfo
