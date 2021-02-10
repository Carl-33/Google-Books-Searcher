import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import SavedBookCard from "../Components/SavedBookCard";
import API from "../utils/API"




function Saved() {
    // Set State for saved books
    const[books, setBooks] = useState([]);

    // const [title, setTitle] = useState('');
    // const [author, setAuthor] = useState([]);
    // const [description, setDescription] = useState('');
    // const [image, setImage] = useState('');
    // const [link, setLink] = useState('');


    useEffect(() => {
        let dbData = API.getSavedBooks();
        setBooks(dbData.data)
        console.log(books)
    })


    return (
        <div>
            <Nav />
            <SavedBookCard />
        </div>
    )
}



export default Saved;