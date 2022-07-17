import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AuthorForm from "../components/AuthorForm";
import DeleteButton from "../components/DeleteButton";

const Update = props => {
    const [author, setAuthor] = useState({});
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect( () => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            setAuthor(res.data);
            setLoaded(true);
        })
        .catch(err=> console.log(err))
    }, [])

    const updateAuthor = (author) => {
        axios.put(`http://localhost:8000/api/authors/${id}`, author )
        .then(res => {
            console.log(res.data);
            navigate('/');
        })
        .catch(err=> {
            console.log("Error updating", err);
            const errResponse = err.response.data.errors;
            const errArr = [];
            for (const key of Object.keys(errResponse)) {
                errArr.push(errResponse[key].message);
            };
            console.log(errArr);
            setErrors(errArr);
        });
    }

    return (
        <div>
            <h1>Update Author</h1>
            {loaded && (
                <div>
                    <AuthorForm errors={errors} onSubmitProp={updateAuthor} initialName={author.name} />
                    <DeleteButton authorId={author._id} successCallBack={() => { navigate('/')}} />
                </div>
            )}
        </div>
    )
}
export default Update;