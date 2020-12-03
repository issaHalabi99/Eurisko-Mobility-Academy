import React, { useEffect } from "react";
import Films from "../../components/Films/Films";
import Modal from "../../components/UI/Modal/Modal";
import ShowData from "../../components/UI/ShowData/ShowData";

import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-instance/axios-films";

import * as ordersActions from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";



const MainComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);


  useEffect(() => {
    if (
      state.actions.data.length === 0 &&
      state.comedy.data.length === 0 &&
      state.crime.data.length === 0
    )
      dispatch(ordersActions.add_Films());
  }, [state]);

  const click = (type, index) => {
    dispatch(ordersActions.onShowFilm(type, index));
  };

  const CancelHandler = () => {
    dispatch(ordersActions.onDisableFilm());
  };

  const modalShow = state.current ? (
    <Modal show={state.show} modalClosed={CancelHandler}>
      <ShowData data={state.current} />
    </Modal>
  ) : null;
  return (
    <React.Fragment>
      {modalShow}
      <Films
        actions={state.actions}
        comedy={state.comedy}
        crime={state.crime}
        click={click}
      />
    </React.Fragment>
  );
};

export default withErrorHandler(
  (MainComponent),
  axios
);
