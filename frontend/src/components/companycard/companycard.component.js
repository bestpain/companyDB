import React, { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getFavouriteCompanySelector } from "../../redux/reducers/company/company.selector";
import { selectToken } from "../../redux/reducers/auth/authSelector";
import {
  markFavouriteCompany,
  removeFavouriteCompany,
} from "../../redux/reducers/company/company.actions";
import "./companycard.styles.scss";

class CompanyCard extends Component {
  render() {
    const {
      name,
      address,
      phoneNumber,
      _id,
      favourite,
      token,
      removeFavouriteCompany,
      markFavouriteCompany,
    } = this.props;
    const isFav = favourite.hasOwnProperty(_id);
    return (
      <div className="card-container">
        {name && <h4>Name: {name}</h4>}
        {address && <h4>Address: {address}</h4>}
        {phoneNumber && <h4>Contact: {phoneNumber}</h4>}
        <CustomButton
          Register={!isFav}
          onClick={
            isFav
              ? () => removeFavouriteCompany(_id, token)
              : () => markFavouriteCompany(_id, token)
          }
        >
          {isFav ? "Remove As Favourite" : "Mark As Favourite"}
        </CustomButton>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  favourite: getFavouriteCompanySelector,
  token: selectToken,
});

export default connect(mapStateToProps, {
  markFavouriteCompany,
  removeFavouriteCompany,
})(CompanyCard);
