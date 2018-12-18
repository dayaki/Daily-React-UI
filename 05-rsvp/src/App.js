import React, { Component } from 'react';

// components
import GuestList from './GuestList';
import Counter from './Counter';

class App extends Component {
  state = {
    guests: [
      { name: 'Jose', isConfirmed: false, isEditing: false },
      { name: 'Miriam', isConfirmed: true, isEditing: false },
      { name: 'Jessica', isConfirmed: false, isEditing: false }
    ],
    isFiltered: false,
    pendingGuest: ''
  }

  changeStateProperty = (property, guestIndex) => {
    const guests = [...this.state.guests];
    const guest = guests.filter((guest, index) => index === guestIndex.index);
    guest[0][property] = !guest[0][property];
    guests[guestIndex] = guest[0];
    this.setState({
      guests
    });
  }

  handleConfirmation = index => this.changeStateProperty('isConfirmed', index);

  handleEditing = index => this.changeStateProperty('isEditing', index);

  handleFiltered = () => this.setState((prevState) => {
    return {
      isFiltered: !prevState.isFiltered
    }
  })

  handleEditingChanged = (event, guestIndex) => {
    event.preventDefault();
    const guests = [...this.state.guests];
    const guest = guests.filter((guest, index) => index === guestIndex.index);
    guest[0]['name'] = event.target.value;
    guests[guestIndex] = guest[0];
    this.setState({
      guests
    });
  }

  handleNewUser = e => {
    e.preventDefault();
    this.setState({ pendingGuest: e.target.value });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.state.pendingGuest,
      isConfirmed: false,
      isEditing: false
    }
    this.setState((prevState) => {
      return {
        guests: prevState.guests.concat(data),
        pendingGuest: ""
      }
    });
  }

  handleRemoveGuest = guestIndex => {
    const guests = [...this.state.guests];
    const guest = guests.filter((guest, index) => index !== guestIndex.index);
    this.setState({
      guests: guest
    });
  }

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuests = () => this.state.guests.reduce((total, guest) => guest.isConfirmed ? total = total + 1 : total, 0)

  render() {
    const total = this.getTotalInvited();
    const attendingGuest = this.getAttendingGuests();
    const totalUnconfirmed = total - attendingGuest;
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A social invite App</p>
          <form onSubmit={this.handleFormSubmit}>
              <input 
                type="text" 
                value={this.state.pendingGuest} 
                onChange={this.handleNewUser}
                placeholder="Invite Someone" />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" onChange={this.handleFiltered} /> Hide those who haven't responded
            </label>
          </div>
          <Counter totalAttending={attendingGuest} totalUnconfirmed={totalUnconfirmed} total={total} />
          <GuestList 
            guests={this.state.guests} 
            confirm={this.handleConfirmation} 
            toggleEditing={this.handleEditing} 
            editingChanged={this.handleEditingChanged}
            filtered={this.state.isFiltered} 
            removeGuest={this.handleRemoveGuest}
            pendingGuest={this.state.pendingGuest} />
        </div>
      </div>
    );
  }
}

export default App;