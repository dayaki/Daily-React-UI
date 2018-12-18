import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = props => 
  <ul> 
    <PendingGuest name={props.pendingGuest} />
    { props.guests.filter(guest => !props.filtered || guest.isConfirmed).map((guest, index) => 
    <Guest 
      key={index} 
      confirm={() => props.confirm({index}) }
      toggleEditing={() => props.toggleEditing({index})} 
      editingChanged={(event) => props.editingChanged(event, {index})} 
      removeGuest={() => props.removeGuest({index})}
      guest={guest}
      pendingGuest={props.pendingGuest} /> 
    )} 
  </ul>

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  confirm: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  editingChanged: PropTypes.func.isRequired,
  filtered: PropTypes.bool.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
}

export default GuestList;