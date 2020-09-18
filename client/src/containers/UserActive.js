import { connect } from 'react-redux';
import { deleteUser, resendUser, clickEditAct } from '../actions';
import User from '../components/User'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteUser(ownProps.id)),
    resend: () => dispatch(resendUser(ownProps.phone, ownProps.Name, ownProps.id)),
    onEdit: () => dispatch(clickEditAct(ownProps.id))
  })
  
  export default connect(
    null,
    mapDispatchToProps
)(User)