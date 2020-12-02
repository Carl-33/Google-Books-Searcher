import axios from "axios";
import config from "../config";

const API_KEY = config.API_KEY

export default {
    searchForBook: function(book) {
        console.log(API_KEY);
        console.log(book)
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + API_KEY)
        
    }
}