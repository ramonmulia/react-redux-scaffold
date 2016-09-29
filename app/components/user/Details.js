import React, {Component} from 'react';

class Details extends Component {
  render(){
    return(
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.props.user.id}</td>
          <td>{this.props.user.username}</td>
        </tr>
      </tbody>
    </table>);
  }
}

export default Details;
