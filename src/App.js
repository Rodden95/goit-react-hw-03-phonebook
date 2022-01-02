import { Component } from "react";
import './App.scss';



import Phonebook from "./components/Phonebook";
class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };
 
  contactAdd = ({ name, number, id }) => {
    const newContact = { id, name, number };
    let findResult = this.state.contacts.find(e => e.name === name);
    const catchThisContactIsNotPresentIn = typeof findResult !== 'object';
    
    catchThisContactIsNotPresentIn ?
      this.setState(prevState =>
        ({ contacts: [...prevState.contacts, newContact] })) : alert('this name is present in');
      
  };
  contactsFilter = () =>
    this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter));

  filterInputValueToState = data =>
    this.setState({ filter: data.target.value.toLowerCase() });
  
  contactDelete = currentId =>
    this.setState(({ contacts }) =>
      ({ contacts: contacts.filter(({ name }) => name !== currentId) }));
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    
    contacts !== null ?
      this.setState({contacts:JSON.parse(localStorage.getItem('contacts'))}) :
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  };
  render() {
    const filteredContacts = this.contactsFilter();
   
    return (
      <div>

        <Phonebook
          onSubmitFunc={this.contactAdd}
          contacts={filteredContacts}
          
          filter={this.filterInputValueToState}
          deleteContact={this.contactDelete}
        />
      </div>
    );
  
  };
};
export default App;
