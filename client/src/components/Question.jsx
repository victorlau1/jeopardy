import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Modal, Title, Header, Body, Footer, Button } from 'react-bootstrap'; 


const Question = (props) => {
  return (
    <Modal {...props} bsSize="small" aria-labelledby="contained-modal-title-sm">
      <Modal.Body id="question">
        {props.thequestion}
      </Modal.Body>
      <Modal.Footer>

        <Button id="close" onClick={props.onHide}>X</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Question; 