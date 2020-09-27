import React from "react";
import "./favourite-dropdown.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getFavouriteCompanySelector } from "../../redux/reducers/company/company.selector";

const FavouriteDropDown = ({ favouriteItems }) => {
  const Items = Object.keys(favouriteItems);
  return (
    <div className="favourite-dropdown">
      <div className="favourite-items">
        {Items.length ? (
          Items.map((item, i) => <p key={i}>{favouriteItems[item].name}</p>)
        ) : (
          <span className="empty-message">Add Item To Favourite</span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  favouriteItems: getFavouriteCompanySelector,
});
export default connect(mapStateToProps)(FavouriteDropDown);
