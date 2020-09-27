import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./resetpassword.styles.scss";
import { Link } from "react-router-dom";
import { resetPasswordApiCall } from "../../apis";

class ResetPassword extends React.Component {
  constructor(props) {
    super();
    this.state = {
      resetPasswordLink: "",
      password: "",
      confirmPassword: "",
      message: "",
      userError: {
        password: "",
        confirmPassword: "",
      },
    };
  }

  componentDidMount() {
    if (typeof window !== undefined) {
      this.setState({
        resetPasswordLink: new URLSearchParams(window.location.search).get(
          "acc"
        ),
      });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      const { password, resetPasswordLink } = this.state;
      const newPassword = {
        password,
        resetPasswordLink,
      };
      resetPasswordApiCall(newPassword).then((data) => {
        if (data.error) this.setState({ message: data.error });
        else
          this.setState({
            password: "",
            confirmPassword: "",
            resetPasswordLink: "",
            message: data.message,
          });
      });
    }
  };

  isValid = () => {
    const { password, confirmPassword } = this.state;
    const userError = {};

    if (password.length < 6 || !/[0-9]/i.test(password)) {
      userError.password = "Password must be of 6 characters including digits";
    }
    if (password !== confirmPassword) {
      userError.confirmPassword = "Password do not match";
    }
    if (
      userError.hasOwnProperty("password") ||
      userError.hasOwnProperty("confirmPassword")
    ) {
      this.setState({ userError });
      return false;
    }
    return true;
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { userError } = this.state;
    return (
      <div className="sign-in">
        <p className="danger">{this.state.message}</p>

        <span className="title">Reset Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="Enter New Password"
          />
          {userError.password && (
            <label className="danger">{userError.password}</label>
          )}

          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm New Password"
          />
          {userError.confirmPassword && (
            <label className="danger">{userError.confirmPassword}</label>
          )}
          <div className="buttons">
            <CustomButton type="submit" Register>
              Update Password
            </CustomButton>
          </div>
        </form>
        <Link className="forgot-password" to="/login">
          Go to Login
        </Link>
      </div>
    );
  }
}

export default ResetPassword;
