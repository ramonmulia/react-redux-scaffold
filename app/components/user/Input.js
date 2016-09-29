import React, { Component } from 'react'
import Load from '../load/Load'
import { Link } from 'react-router'

class Input extends Component {

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
      <div>
        <Load load={this.props.load} />
        <button onClick={this.handleNewId.bind(this)}>Update with random ID</button>
        <button onClick={this.handleNewIdIfOdd.bind(this)}>Update only if odd</button>
        <button onClick={this.handleNewIdAsync.bind(this)}>Update async</button>
        <Link to={`/users`}>details</Link>
      </div>
    )
  }

}

export default Input
