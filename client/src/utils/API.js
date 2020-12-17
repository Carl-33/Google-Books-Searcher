import axios from "axios";
import config from "../config";

const API_KEY = config.API_KEY

export default {
    // get all saved books
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    searchForBook: function(book) {
        // console.log(API_KEY);
        console.log(book)
        console.log("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + API_KEY)
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book) 
        // + "&key=" + API_KEY)
        .then(res => {
            console.log(res.data.items)
        })
    }
};