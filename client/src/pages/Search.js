import React, { Component } from "react";
import Nav from "../Components/Nav";
import SearchBar from "../Components/SearchBar";
import BookCard from "../Components/BookCard";
import API from "../utils/API"

class Search extends Component {
    state = {
        search: "",
        results: []
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
      handleFormSubmit = event => {
        event.preventDefault();
        API.searchForBook(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
        }

    render() {
        return (
            <div>
                <Nav />
                <SearchBar 
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                search={this.state.search}
                />
                <BookCard results={this.state.results} />
            </div>
        );
    };
}



export default Search;