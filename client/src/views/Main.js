import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';

const Main = () =>{
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect( () => {
        axios.get(`http://localhost:8000/api/authors`)
        .then(res => {
            console.log(res.data);
            setAuthors(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    },[]);

    const removeFromDom = (authorId) => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    const createAuthor = author => {
        axios.post(`http://localhost:8000/api/authors`, author)
        .then(res => {
            console.log(res.data);
            setAuthors([...authors, res.data]);
        })
        .catch(err=> {
            const errResponse = err.response.data.errors;
            console.log(errResponse);
            const errorArr = [];
            for (const key of Object.keys(errResponse)){
                errorArr.push(errResponse[key].message);
            };
            setErrors(errorArr);
        })
    }

    return (
        <div>
            <AuthorForm errors={errors} onSubmitProp={createAuthor} initialName="" /> <hr/>
            { loaded && <AuthorList authors={ authors } removeFromDom={ removeFromDom }/>}
        </div>
    )

}
export default Main;