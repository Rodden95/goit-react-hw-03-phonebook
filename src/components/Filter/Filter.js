
import { Form } from 'react-bootstrap';

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
