import React, { Component } from 'react'
import Load from './Load'

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
        <button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
        <button onClick={this.handleNewIdIfOdd.bind(this)}>Update only if odd</button>
        <button onClick={this.handleNewIdAsync.bind(this)}>Update async</button>
      </li>
    )
  }

}

export default UserInfo
