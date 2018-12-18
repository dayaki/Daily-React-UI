import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName'

const Guest = props => 
  <li>
    <GuestName isEditing={props.guest.isEditing} editingChanged={props.editingChanged}>{ props.guest.name }</GuestName>
    <label>
      <input type="checkbox" checked={props.guest.isConfirmed} onChange={props.confirm} /> Confirmed
    </label>
    <button onClick={props.toggleEditing}>{ props.guest.isEditing ? 'save' : 'edit'}</button>
    <button onClick={props.removeGuest}>remove</button>
  </li>

Guest.propTypes = {
  guest: PropTypes.object.isRequired,
  confirm: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  editingChanged: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired
}

export default Guest;