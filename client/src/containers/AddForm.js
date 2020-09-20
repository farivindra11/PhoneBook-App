import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postUser, TogleButtonCta } from '../actions'

class Addform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: "",
            Phone: ""
        }
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handlePhoneChange(event) {
        this.setState({ Phone: event.target.value });
    }

    handleNameChange(event) {
        this.setState({ Name: event.target.value });
    }

    handleClick(event){  
        event.preventDefault()
        this.props.togleButtonCta()
    }
    
    handleSubmit(event) {
       
        if (this.state.Phone && this.state.Name) {
            this.props.postUser(this.state.Phone, this.state.Name)
            this.setState({ Phone: "", Name: "" });
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="card">
                <div className="card-header text-center font-weight-bold">
                        ADD NEW CONTACT
                     </div>
                     <div className="card-body">
                        <form onSubmit={this.handleSubmit} className="form-inline justify-content-center">
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

                            <div className="form-group row align-self-center">
                                <div className="col-sm-12">
                                    <button type="button" className="btn btn-warning  btn-cancel float-right addc" onClick={this.handleClick}><i className="fa fa-ban"></i> Cancel </button>

                                    <button type="submit" className="btn btn-primary  btn-add float-right addc"> <i className="fa fa-floppy-o"></i> Save</button>
                                </div>
                            </div>

                        </form>
                    </div>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    postUser: (Phone, Name) => dispatch(postUser(Phone, Name)),
    togleButtonCta: () => dispatch(TogleButtonCta()),
})

export default connect(
    null,
    mapDispatchToProps
)(Addform)