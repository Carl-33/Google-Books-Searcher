import React, { Component } from "react";
import Nav from "../Components/Nav";
import SearchBar from "../Components/SearchBar";
import BookCard from "../Components/BookCard";
import API from "../utils/API"

class Search extends Component {
    state = {
        search: "",
        results: [],
        error: ""
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
      handleFormSubmit = event => {
        event.preventDefault();
        API.searchForBook(this.state.search)
          .then(res => {
            if (res.data.items === "error") {
              throw new Error(res.data.items);
            } else { 
              let searchResults = res.data.items
              let results = searchResults.map(result => {
                result = {
                  title: result.volumeInfo.title,
                  authors: result.volumeInfo.authors,
                  description: result.volumeInfo.description,
                  image: result.volumeInfo.imageLinks.image,
                  link: result.volumeInfo.link
                }
                console.log(result)
                return result;
              })
              this.setState({ results: results, error: "" })
            }
          })
          .catch(err => this.setState({ error: err.message }));
        };

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