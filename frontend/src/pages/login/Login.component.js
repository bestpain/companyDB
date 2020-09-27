import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./log-in.styles.scss";
import { Link, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { getAuthErrorMessage } from "../../redux/reducers/auth/authSelector";
import { signInRequest } from "../../redux/reducers/auth/auth.actions";
import { getAuthenticationStatus } from "../../redux/reducers/auth/authselector";
import { connect } from "react-redux";

class LogIn extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      userError: {
        password: "",
        email: "",
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      const { email, password } = this.state;
      const user = {
        password,
        email,
      };
      this.props.signInRequest(user);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  isValid = () => {
    const { password, email } = this.state;
    const userError = {};

    if (password.length < 6 || !/[0-9]/i.test(password)) {
      userError.password = "Password must be of 6 characters including digits";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[?=(com|org)]{3}$/i.test(email)) {
      userError.email = "Email is not valid";
    }
    if (
      userError.hasOwnProperty("password") ||
      userError.hasOwnProperty("email")
    ) {
      this.setState({ userError });
      return false;
    }
    return true;
  };

  render() {
    const { email, password, userError } = this.state;
    if (this.props.authStatus) {
      return <Redirect to="/search" />;
    }
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            value={email}
            label="email"
          />
          {userError.email && (
            <label className="danger">{userError.email}</label>
          )}
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
          />
          {userError.password && <p className="danger">{userError.password}</p>}
          <div className="buttons">
            <CustomButton type="submit"> Log In </CustomButton>
            <CustomButton
              type="button"
              onClick={() => this.props.history.push("/register")}
              Register
            >
              Create Account
            </CustomButton>
          </div>
          <p className="danger">{this.props.authError}</p>
        </form>
        <Link className="forgot-password" to="/forgotpassword">
          Forgot Password
        </Link>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  authError: getAuthErrorMessage,
  authStatus: getAuthenticationStatus,
});

export default connect(mapStateToProps, { signInRequest })(LogIn);
