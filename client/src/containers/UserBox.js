import React, { Component } from 'react';
import UserList from './UserList';
import { connect } from 'react-redux';
import Jumbotron from './Jumbotron'
import AddForm from './AddForm';
class UserBox extends Component {
  render() {
    return (
      <div className="jumbo">
      <Jumbotron />
      <div className="container">
        <div className="main-container">
        <div className="card-body">
           {this.props.stateFromMaps && <AddForm />}
            </div>
        <div className="card-body">
          <UserList />
          </div>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const { isActive } = users
  return { stateFromMaps: isActive }
}

export default connect(
  mapStateToProps
)(UserBox)