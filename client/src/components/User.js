
import React from 'react';

const User = (props) => {
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>{props.Name}

      </td>
      <td>{props.user}</td>
      <td>
        {props.added && <button type="button" className="btn btn-outline-danger del" onClick={props.onDelete} >  <i className="fa fa-trash"></i> </button>}
        {!props.added && <button type="button" className="btn btn-outline-warning del" onClick={props.resend}><i className="fa fa-repeat"></i> Resend </button>}
        <button type="button" className="btn btn-outline-success" onClick={props.onEdit}> <i className="fa fa-pencil-square"></i></button>
      </td>
    </tr>
  )
}

export default User;