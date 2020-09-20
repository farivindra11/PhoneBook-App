import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postUser } from '../actions'

class userForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: "",
            Phone: ""
        }
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePhoneChange(event) {
        this.setState({ Phone: event.target.value });
    }

    handleNameChange(event) {
        this.setState({ Name: event.target.value });
    }

    handleSubmit(event) {
        const id = Date.now()
        if (this.state.Phone && this.state.Name) {
            this.props.postUser(this.state.Phone, this.state.Name, id)
            this.setState({ Phone: "", Name: "" });
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="card text-left" >
                    <div className="card-header text-center font-weight-bold">
                        ADD CONTACT
          </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit} >
                            <div className="form-group row">
                                <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="phone" name="phone" value={this.state.Phone} onChange={this.handlePhoneChange} placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="Name" name="Name" value={this.state.Name} onChange={this.handleNameChange} placeholder="Name" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary float-left">Tambah</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card text-left" >
                    <div className="card-header text-center font-weight-bold">
                        SEARCH CONTACT
          </div>
                    <div className="card-body">
                        <form className="form-inline justify-content-center">
                            <div className="form-group row">
                                <label htmlFor="phone" className="col-sm-2 col-form-label">Number</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="phone" name="phone" value={this.state.Phone} onChange={this.handlePhoneChange} placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="Name" name="Name" value={this.state.Name} onChange={this.handleNameChange} placeholder="Name" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postPhone: (Phone, Name, id) => dispatch(postUser(Phone, Name, id))
})

export default connect(
    null,
    mapDispatchToProps
)(userForm)