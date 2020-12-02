import React from "react";

function BookCard(props) {
    return (
        <div>
            <ul className="list-group">
                {props.results.map(result => (
                    <li key={result} className="list-group-item">
                        {result.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookCard;