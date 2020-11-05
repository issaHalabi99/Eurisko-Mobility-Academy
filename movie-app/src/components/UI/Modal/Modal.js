/* eslint-disable react/prop-types */
import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.module.css";
import PropTypes from "prop-types";



const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className={classes.child}>
        {props.children}
        </div>
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.func
};


export default Modal;
