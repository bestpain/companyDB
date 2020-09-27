import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./ForgotPassword.styles.scss";
import { forgotPasswordApiCall } from "../../apis";
import { Link } from "react-router-dom";

class ForgotPassword extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      userError: {
        email: "",
        message: "",
      },
    };
  }

  isValid = () => {
    const { email } = this.state;
    const userError = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[?=(com|org)]{3}$/i.test(email)) {
      userError.email = "Email is not valid";
    }
    if (userError.hasOwnProperty("email")) {
      this.setState({ userError });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      const { email } = this.state;
      const body = {
        email,
      };
      forgotPasswordApiCall(body).then((data) => {
        if (data.error) this.setState({ message: data.error });
        else
          this.setState({
            message: data.message,
          });
      });
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <p className="danger">{this.state.message}</p>

        <span className="title">Enter your registered email id</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <div className="buttons">
            <CustomButton type="submit" Register>
              Send Reset Link
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

export default ForgotPassword;
