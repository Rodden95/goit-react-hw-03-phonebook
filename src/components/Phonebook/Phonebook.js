import { Component } from "react";
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Contacts from "../Contacts";
import Filter from "../Filter";
import shortid from "shortid";
export default class Phonebook extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };
  onSubmitInputHander = event => {
    event.preventDefault();
    const name = this.state.name;
    const number = this.state.number;
    let id = shortid.generate();
    this.setState({ id });
    this.props.onSubmitFunc({ name, number, id });
    
  };

  inputValueHandler = event => {
    const dataName = event.target.name;

    this.setState({ [dataName]: event.target.value });
 
  };
  render() {
    
    return (
      <div className="container">
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.inputValueHandler}
            />
            <Form.Label>Number</Form.Label>
            <Form.Control
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.inputValueHandler}
            />
          </Form.Group>
            
            
          <Button variant="primary" type="submit" onClick={this.onSubmitInputHander}>
            Submit
          </Button>
        </Form>
        <Filter filter={this.props.filter} />
        {this.props.contacts.length === 0 ?
          <h2>List clear</h2> :
          <Contacts
            contacts={this.props.contacts}
            deleteContact={this.props.deleteContact}
          />}
        
        
      </div>
    
    );
  
  };
};

PropTypes.Phonebook = {
  onSubmitFunc: PropTypes.func,
  contacts: PropTypes.array,
  filter: PropTypes.func,
  deleteContact: PropTypes.func,
};