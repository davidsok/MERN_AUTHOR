import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const Detail = props => {
    const [author, setAuthor] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        console.log(`http://localhost:8000/api/authors/${id}`);
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            console.log(res.data);
            setAuthor(res.data);
            console.log("Author:", author);
        })
        .catch(err => console.log("Error: ", err))
    }, []);

    const deleteAuthor = authorId => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        .then(res => {
            deleteAuthor(authorId);
            navigate('/');
        })
    }

    return (
        <div key={author._id} >
            <p>Name: { author.name }</p>
            <Link to={`/authors/${author._id}/edit`} >Edit</Link>
            <button onClick={ (e) => { deleteAuthor(author._id)}}>Delete</button>
        </div>
    )

}
export default Detail;