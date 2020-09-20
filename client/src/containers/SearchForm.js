import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postUser, searchUsers, searchMode, loadUser, cancelSearch } from '../actions'

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: "",
            Phone: ""
        }
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    handlePhoneChange(event) {
        this.setState({ Phone: event.target.value });
        this.props.searchUsers(this.state.Name, event.target.value)
        this.props.searchMode({ name: this.state.Name, phone: event.target.value })
    }

    handleNameChange(event) {
        this.setState({ Name: event.target.value });
        this.props.searchUsers(event.target.value, this.state.Phone)
        this.props.searchMode({ name: event.target.value, phone: this.state.Phone })
    }
    handleClick(event) {
        this.props.loadUser()
        this.props.cancelSearch()
        this.setState({ Name: "", Phone: "" });
        event.preventDefault()

    }

    render() {
        return (
            <div className="card text-left" >
                <div className="card-header text-center font-weight-bold">
                    SEARCH CONTACT
                    </div>
                <div className="card-body">
                    <form className="form-inline justify-content-center">
                        <div className="form-group row">
                            <label htmlFor="phone" className="col-sm-2 col-form-label">Number</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="phone" name="phone" value={this.state.Phone} onChange={this.handlePhoneChange} placeholder="Search Phone Number" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="Name" name="Name" value={this.state.Name} onChange={this.handleNameChange} placeholder="Search Name" />
                            </div>
                        </div>
                        <div className="form-group row align-self-center">
                            <div className="col-sm-12">
                                <button type="button" className="btn btn-outline-warning  btn-cancel float-right reset" onClick={this.handleClick}><i className="fa fa-refresh"></i> Reset </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postUser: (phone, Name, id) => dispatch(postUser(phone, Name, id)),
    searchUsers: (name, phone) => dispatch(searchUsers(name, phone)),
    searchMode: (filter) => dispatch(searchMode(filter)),
    loadUser: () => dispatch(loadUser()),
    cancelSearch:()=>dispatch(cancelSearch())

})

export default connect(
    null,
    mapDispatchToProps
)(SearchForm)