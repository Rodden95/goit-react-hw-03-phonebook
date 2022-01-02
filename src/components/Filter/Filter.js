
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
export default function Filter({filter}){

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Find contact</Form.Label>
        <Form.Control type="text" onChange={filter} />
      </Form.Group>
    </Form>
  );
};

PropTypes.Filter = {
  filter: PropTypes.func.isRequired,
};