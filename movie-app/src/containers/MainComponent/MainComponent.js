import React, { useEffect } from "react";
import * as actionTypes from "../../store/actions";
import { connect } from "react-redux";
import Films from "../../components/Films/Films";
import Modal from "../../components/UI/Modal/Modal";
import ShowData from "../../components/UI/ShowData/ShowData";

const MainComponent = (props) => {
  //const inputState = useState([]);

  useEffect(() => {
    if (
      props.actions.data.length === 0 &&
      props.comedy.data.length === 0 &&
      props.crime.data.length === 0
    )
      props.addFilms();
  }, [props]);

  const click = (type,index) => {
    props.onShowFilm(type,index);
  };

  const CancelHandler = () => {
    props.onDisableFilm();
  };

  const modalShow = props.current ? (
    <Modal show={props.show} modalClosed={CancelHandler}>
      <ShowData data={props.current}  />
    </Modal>
  ) : null;
  return (
    <React.Fragment>
      {modalShow}
      <Films
        actions={props.actions}
        comedy={props.comedy}
        crime={props.crime}
        click={click}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    actions: state.actions,
    comedy: state.comedy,
    crime: state.crime,
    current: state.current,
    show: state.show,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFilms: () => dispatch(actionTypes.add_Films()),
    onShowFilm: (filmType, index) =>
      dispatch({ type: actionTypes.SHOW_FILMS, filmIndex: index, filmType: filmType }),
    onDisableFilm: () => dispatch({ type: actionTypes.DISABLE_FILMS }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
