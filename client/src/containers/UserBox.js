import React, { Component } from 'react';
import UserList from './UserList';
import { connect } from 'react-redux';

class UserBox extends Component {
    render () {
        return (
           
                <div className="card-body">
                  <UserList />
                </div>
               
        )
    }
}

const mapStateToProps = ({ users }) => {
    const {isActive}= users
    return { stateFromMaps: isActive } 
  }
  
  export default connect(
    mapStateToProps
  )(UserBox)