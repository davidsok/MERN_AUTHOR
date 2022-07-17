import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


const AuthorList = props => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
        .then(res => {
            setAuthors(res.data);
        })
        .catch(err => console.log('Something wrong', err))
    }, [authors])


const removeFromDom = (authorId) => {
    setAuthors(authors.filter( (author) => author._id !== authorId ));
}

return (
    <div>
        {authors.map( (author, idx) => {
            return (
                
                <p key={idx}>
                    <Link to={`/authors/${author._id}`} >
                        { author.name }
                    </Link> |
                    <Link to={`authors/${author._id}/edit`}>
                        Edit
                    </Link> |
                    <DeleteButton authorId={author._id} successCallBack={()=>removeFromDom(author._id)} />
                </p>
            )
        })}
    </div>
)
}
export default AuthorList;