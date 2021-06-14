
import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, InputGroup, Input} from 'reactstrap';

import cover from "../img/cover.jpg"

const ModalExample = ({setName}) => {

  const [modal, setModal] = useState(false);
 
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info " onClick={toggle}><i className="fas  fa-question-circle fa-3x"></i></Button>
     
      <Modal isOpen={modal} toggle={toggle} >
         
    
    
        <ModalBody>
       
        
        <img width="100%" src={cover} alt=" cap" className="mb-5" />
          <h3>How to Play ? </h3>
          <p>
           The game starts with an empty grid 
           Usually two players take turns adding a single horizontal or 
           vertical line between two unjoined adjacent dots. 
           A player who completes the fourth side of a 1×1 box earns one point and takes another turn.
          </p> 
          <h3>Here Type Your Name  </h3>
 <InputGroup>
   
        <Input placeholder ="your name... "onChange={e => setName(e.target.value)} />
      </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Play Game</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;