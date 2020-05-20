import React, { useState } from 'react';
import Iframe from 'react-iframe'
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useCheckout, useCheckoutScript } from '../../../hooks';
import '../../styles/Checkout.css';

export const Checkout = ({ type }) => {
  const [loaded] = useCheckoutScript();
  const [result, component, checkout] = useCheckout(loaded);
  const [modal, setModal] = useState(true);
  const [rendered, setRendered] = useState(false);
  
  const toggle = () => setModal(!modal);

  if(checkout && !rendered) {
    checkout.create(type).mount('#checkout');
    setRendered(true);
  }
  // let redirectModal;

  // if(result && result.action && result.action.type === 'redirect') {
  //   redirectModal = (
  //     <Modal isOpen={modal} toggle={toggle} size={'lg'} className="iframe-modal">
  //       <ModalBody>
  //         <Iframe
  //           url={result.action.url}
  //           width="100%"
  //           height="500px"
  //         ></Iframe>
  //       </ModalBody>
  //       <ModalFooter>
  //         <Button onClick={toggle}>Close</Button>
  //       </ModalFooter>
  //     </Modal>
  //   );
  // }

  return (
    <div id="checkout">
      {/* {redirectModal} */}
    </div>
  );
};