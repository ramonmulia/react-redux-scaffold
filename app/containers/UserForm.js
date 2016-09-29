import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import UserInput from '../components/user/Input'
import Load from '../components/load/Load'

class Form extends Component {

  render() {
    return (
      <div>
        <UserInput user={this.props.user} load={this.props.load} actions={this.props.actions}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
