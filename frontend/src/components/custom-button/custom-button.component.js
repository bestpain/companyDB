import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  Register,
  inverted,
  onClick,
  ...otherProps
}) => (
  <button
    onClick={onClick}
    className={`${Register ? "register" : ""} ${
      inverted ? "inverted" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
