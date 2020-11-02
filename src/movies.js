import React from "react";
import PropTypes from "prop-types";

function Movie({id , years , title , summary , poster}) {
    return <h5>{title}</h5>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    years : PropTypes.number,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
}

export default Movie;