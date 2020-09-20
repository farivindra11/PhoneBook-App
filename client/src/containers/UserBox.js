import React, { Component } from 'react';
import { connect } from 'react-redux';
import Jumbotron from './Jumbotron';
import UserList from './UserList';
import AddForm from './AddForm';
import SearchForm from './SearchForm';
import Pagination from './Pagination';

class UserBox extends Component {
  render() {
    return (
      <div className="jumbo">
        <Jumbotron />
        <div className="container">
          <div className="main-container">
            <div className="card-body">
              <div className="table-wrapper">
                <div className="card-body">
                  {this.props.stateFromMaps && <AddForm />}
                  <br />
                  <SearchForm />
                </div>
                <div className="card-body">
                  <UserList />
                </div>
                <Pagination />
              </div>
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