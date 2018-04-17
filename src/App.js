import React, { Component } from 'react'
import ListContacts from './ListContacts.js'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state ={
    contacts: [ ]
  }

  componentDidMount() {
    ContactsAPI.getAll()
    .then((contacts) => {
      this.setState(() => ({
        contacts
      }))
    })

  }

    //Implement a way to remove a contact from the contacts array. Since the data is living inside of our App component we want to implement this removeContact component in there as well.

    // Very intuitive program. I am really understanding at a high level and I feel the gears turning. I find that the best way to grasp these concepts is to write comments as your learning and ask questions. Mos def matches my needs.

    //In tylers words: If we want to create a method that modifys that data we need to do so whereever our state is living which currently is the app component.



    //we can use set state by passing in an object whose keys are to  get merged to the current state.

    // this.setState({
    //   key: 'tyler'
    // })

// Method 1 update the state with no regards to the previouState.


    // Method 2 is passing in a function.

    // This function returns an object that gets merge to the current state.
    //



// If we are keeping something from the object being passed we have to use method 2 becuase it will return the modified object and merge it to the current state. Method one only adds to the state.
// Method 2 takes care of both adding(merging) and removing(filtering) objects in the currentState. method 1 just adds(merge) objects.
// Beneift of method 2 is that it can pass us the currentState. Once we have it with the function (callback) we can then proceed to alter it. This allows us to update the state based on the previousState which will result in the currentState.



    // Tyler likes to use Method 2(functional/callback setState) because it incorporates method 1(object setState) functionality.

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))

  ContactsAPI.remove(contact)
  }
  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}

        />
      </div>
    )
  }
}

export default App;
