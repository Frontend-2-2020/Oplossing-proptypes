import React, { Component } from "react";
import PropTypes from "prop-types";
import PacmanLoader from "react-spinners/PacmanLoader";

class Loader extends Component {
  render() {
    return <PacmanLoader loading={this.props.loading} />;
  }
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Loader;
