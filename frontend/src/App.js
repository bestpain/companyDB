import React, { Component } from "react";
import Header from "./components/header/Header.component";
import SearchCompany from "./pages/searchCompany/SearchCompany.component";
import Login from "./pages/login/Login.component";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword.component";
import ResetPassword from "./pages/resetpassword/resetpassword.component";
import Register from "./pages/register/Register.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { getAuthenticationStatus } from "./redux/reducers/auth/authselector";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="content-container">
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                this.props.authStatus ? (
                  <Redirect to="/search" />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route exact path="/search" component={SearchCompany} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/resetpassword" component={ResetPassword} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  authStatus: getAuthenticationStatus,
});

export default connect(mapStateToProps)(App);
