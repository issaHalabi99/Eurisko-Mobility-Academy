/* eslint-disable react/display-name */
import React, { useState, useEffect } from "react";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    let [errorValue, setErrorValue] = useState(false);
    let [merror, setMerorr] = useState("");

    let reqInterceptor = axios.interceptors.request.use((req) => {
      setErrorValue(false);
      return req;
    });

    let resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (err) => {
        console.log(err);
        setErrorValue(true);
        setMerorr(err.message);
        return Promise.reject({ ...err });
      }
    );

    useEffect(() => {

      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, [reqInterceptor, resInterceptor]);

    const errorConfirmedHandler = () => {
      setErrorValue(false);
    };

    return (
      <React.Fragment>
        <Modal show={errorValue} modalClosed={errorConfirmedHandler}>
          {errorValue ? <span style={{color:"red"}}>{merror}</span> : null}
        </Modal>
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
};

export default withErrorHandler;
