import React, { Component } from "react";
import requireAuth from "../../helpers/requireAuth";
import { createStructuredSelector } from "reselect";
import { getSearchCompanySelector } from "../../redux/reducers/company/company.selector";
import CompanyCard from "../../components/companycard/companycard.component";
import { connect } from "react-redux";
import './SearchCompany.styles.scss';

class SearchCompany extends Component {
  showResults = () => {
    return this.props.searchResults.map(({ ...otherProps }, i) => (
      <CompanyCard key={i} {...otherProps} />
    ));
  };
  render() {
    return (
      <div className="results-container">
        {this.props.searchResults.length > 0 ? (
          this.showResults()
        ) : (
          <p>Search a company name to begin</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  searchResults: getSearchCompanySelector,
});

export default connect(mapStateToProps)(requireAuth(SearchCompany));
