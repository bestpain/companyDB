import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { signUpApiCall } from "../../apis";
import "./register.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
      success: "",
      confirmPassword: "",
      userError: {
        userName: "",
        email: "",
        password: "",
      },
    };
  }

  isValid = () => {
    const { password, email, userName, confirmPassword } = this.state;
    const userError = {};

    if (password.length < 6 || !/[0-9]/i.test(password)) {
      userError.password = "Password must be of 6 characters including digits";
    }
    if (password !== confirmPassword) {
      userError.confirmPassword = "Password do not match";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[?=(com|org)]{3}$/i.test(email)) {
      userError.email = "Email is not valid";
    }
    if (!userName) {
      userError.userName = "Display Name cant be empty";
    }
    if (
      userError.hasOwnProperty("password") ||
      userError.hasOwnProperty("email") ||
      userError.hasOwnProperty("userName") ||
      userError.hasOwnProperty("confirmPassword")
    ) {
      this.setState({ userError });
      return false;
    }
    return true;
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.isValid()) {
      const { userName, email, password, userError } = this.state;
      const user = {
        userName,
        password,
        email,
      };
      signUpApiCall(user).then((data) => {
        if (data.error) this.setState({ error: data.error });
        else
          this.setState({
            error: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            userError: {},
            success: "User Successfully created.Verify Your Email to Login",
          });
      });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      userName,
      email,
      password,
      confirmPassword,
      userError,
    } = this.state;
    return (
      <div className="sign-up">
        <p className="danger">{this.state.success}</p>
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="userName"
            value={userName}
            onChange={this.handleChange}
            label="User Name"
          />
          {userError.userName && <p className="danger">{userError.userName}</p>}
          <FormInput
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
          />
          {userError.email && (
            <label className="danger">{userError.email}</label>
          )}
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
          />{" "}
          {userError.password && (
            <label className="danger">{userError.password}</label>
          )}
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
          />{" "}
          {userError.confirmPassword && (
            <label className="danger">{userError.confirmPassword}</label>
          )}
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
