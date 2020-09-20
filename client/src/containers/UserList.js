import React, { Component } from 'react';
import User from './UserActive'
import EditForm from './EditForm'
import { connect } from 'react-redux'
import { loadUser } from '../actions'

class UserList extends Component {
    componentDidMount() {
      this.props.loadUserFormMap();
    }

    render() {
        const nodes = this.props.stateFromMaps.users.map((item, index) => {
          return item.isEdit ?
            (
              <EditForm
                key={index}
                index={this.props.stateFromMaps.offset + index + 1}
                user={item.Phone}
                Name={item.Name}
                added={item.added}
                id={item.id}
                edit={item.isEdit}
              />)
            :
            (
              <User
                key={index}
                index={this.props.stateFromMaps.offset + index + 1}
                user={item.Phone}
                Name={item.Name}
                added={item.added}
                id={item.id}
                edit={item.isEdit}
              />)
        })

        return (
            <div>
              <table className="table table-striped table-light centering  table-hover">
                <thead className="thead-dark">
                  <tr className='table-secondary'>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {nodes}
                </tbody>
              </table>
            </div>
          )
        }

}


const mapStateToProps = ({ users }) => ({ stateFromMaps: users })
const mapDispatchToProps = (dispatch) => ({ loadUserFormMap: () => dispatch(loadUser())})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)