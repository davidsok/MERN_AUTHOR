import React from 'react';
import axios from 'axios';

const DeleteButton = props => {
    const { authorId, successCallBack } = props;
    const deleteAuthor = (e) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        .then( () => successCallBack())
        .catch(err => console.log(err))
    }
    return(
        <button onClick={ deleteAuthor }>Delete</button>
    )
}
export default DeleteButton;