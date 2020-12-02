import axios from "axios";
import API_KEY from "../../config";

export default {
    search: function() {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=" + API_KEY)
    }

}