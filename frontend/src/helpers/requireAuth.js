import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getAuthenticationStatus } from "../redux/reducers/auth/authSelector";

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.authStatus) {
        this.props.history.push("/login");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = createStructuredSelector({
    authStatus: getAuthenticationStatus,
  });

  return connect(mapStateToProps)(ComposedComponent);
};
