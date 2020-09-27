import React from "react";
import FavouriteIcon from "../../assets/star.svg";
import "./favouritecompany.styles.scss";
import { connect } from "react-redux";
import { toggleFavouriteDropDownVisibility } from "../../redux/reducers/company/company.actions";

const FavouriteCompany = ({ toggleFavouriteDropDownVisibility }) => (
  <div className="favourite" onClick={toggleFavouriteDropDownVisibility}>
    <FavouriteIcon className="favourite-icon" />
  </div>
);

export default connect(null, { toggleFavouriteDropDownVisibility })(
  FavouriteCompany
);
