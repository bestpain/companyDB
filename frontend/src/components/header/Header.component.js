import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/enterprise.svg";
import SearchBar from "../searchbar/SearchBar.component";
import FavouriteCompany from "../favouritecompany/FavouriteCompany.component";
import FavouriteDropDown from "../favourite-dropdown/favourite-dropdown.component";
import { createStructuredSelector } from "reselect";
import { getAuthenticationStatus } from "../../redux/reducers/auth/authSelector";
import { selectFavouriteDropDownVisibility } from "../../redux/reducers/company/company.selector";

import "./header.styles.scss";

const Header = ({ authStatus, favouriteDropDownVisible }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      {authStatus && <SearchBar />}
      <div className="options">
        {authStatus && <FavouriteCompany />}
        {authStatus ? (
          <Link to="/logout" className="option">
            LOG OUT
          </Link>
        ) : (
          <>
            <Link to="/login" className="option">
              LOG IN
            </Link>
            <Link to="/register" className="option">
              REGISTER
            </Link>
          </>
        )}
      </div>
      {favouriteDropDownVisible && <FavouriteDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  authStatus: getAuthenticationStatus,
  favouriteDropDownVisible: selectFavouriteDropDownVisibility,
});

export default connect(mapStateToProps)(Header);
