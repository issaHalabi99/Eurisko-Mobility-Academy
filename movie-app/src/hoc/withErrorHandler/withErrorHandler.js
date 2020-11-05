import React, { useState, useEffect } from "react";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    let [errorValue, setErrorValue] = useState(false);

    useEffect(() => {
      let reqInterceptor = axios.interceptors.request.use((req) => {
        setErrorValue(false);
        return req;
      });

      let resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          setErrorValue(true);
        }
      );

      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      };
    }, []);

    const errorConfirmedHandler = () => {
      setErrorValue(false);
    };

    return (
      <React.Fragment>
        <Modal show={errorValue} modalClosed={errorConfirmedHandler}>
          {errorValue ? "something goes wrong" : null}
        </Modal>
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };
};

export default withErrorHandler;
