import React from "react";
import PropTypes from "prop-types";


const ShowData = (props) => {
  let overview = props.data.overview;
  return (
    <React.Fragment>
      <div className="col-md-12">
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">
              {props.data.type.toUpperCase()}
            </strong>
            <h3 className="mb-0">{props.data.original_name}</h3>
            <div className="mb-1 text-muted">{props.data.first_air_date}</div>
            <p className="card-text mb-auto">
              {overview.length > 500
                ? overview.substr(0, 500) + " ..."
                : overview}
            </p>
          </div>
          <div className={"col-auto d-none d-md-block "}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={`https://image.tmdb.org/t/p/w500/${props.data.backdrop_path}`}
              alt={props.data.name}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

ShowData.propTypes = {
  data: PropTypes.object,
};

export default ShowData;
