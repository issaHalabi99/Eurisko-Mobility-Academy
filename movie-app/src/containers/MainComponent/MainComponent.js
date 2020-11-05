import React, { useEffect } from "react";
import * as actionTypes from "../../store/actions";
import { connect } from "react-redux";
import Films from "../../components/Films/Films";
import Modal from "../../components/UI/Modal/Modal";
import ShowData from "../../components/UI/ShowData/ShowData";

const MainComponent = (props) => {
  //const inputState = useState([]);

  useEffect(() => {
    if (props.actions.length === 0) props.addFilms();
  }, [props]);

  const click = (index) => {
    props.onShowFilm(index);
  };

  const CancelHandler = () => {
    props.onDisableFilm();
  };

  const modalShow = props.current ? (
    <Modal show={props.show} modalClosed={CancelHandler}>
      <ShowData data={props.current} />
    </Modal>
  ) : null;
  return (
    <React.Fragment>
      {modalShow}
      <Films actions={props.actions} click={click} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    actions: state.actions,
    current: state.current,
    show: state.show,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFilms: () => dispatch(actionTypes.add_Films()),
    onShowFilm: (index) =>
      dispatch({ type: actionTypes.SHOW_FILMS, filmIndex: index }),
    onDisableFilm: () => dispatch({ type: actionTypes.DISABLE_FILMS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
