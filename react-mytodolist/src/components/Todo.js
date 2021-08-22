import React, { useState } from "react";
import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = props => {
  const [showModal, setShowModal] = useState(false);

  const deleteHandler = () => {
    setShowModal(true);
  }
  const setModalStateFalse = () => {
    setShowModal(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler} >Delete</button>
      </div>
      {showModal && <Modal onClick={setModalStateFalse} />}
      {showModal && <Backdrop onClick={setModalStateFalse} />}
    </div>
  );
};

export default Todo;
