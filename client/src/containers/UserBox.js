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

const mapStateToProps = ({ phones }) => {
    const {isActive}=phones
    return { stateFromMaps: isActive } 
  }
  
  export default connect(
    mapStateToProps
  )(UserBox)