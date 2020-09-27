import React, { useState } from "react";
import SearchIcon from "../../assets/glass.svg";
import { connect } from "react-redux";
import { searchCompanyRequest } from "../../redux/reducers/company/company.actions";
import "./searchbar.styles.scss";

const SearchBar = ({ searchCompanyRequest }) => {
  const [term, changeTerm] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (term) {
      searchCompanyRequest(term);
    }
  };
  return (
    <div>
      <form className="search-container" onSubmit={onFormSubmit}>
        <input
          className="search-input"
          placeholder="Search by Company Name"
          type="text"
          value={term}
          onChange={(event) => changeTerm(event.target.value)}
        />
        <button type="submit" className="search-button">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default connect(null, { searchCompanyRequest })(SearchBar);
