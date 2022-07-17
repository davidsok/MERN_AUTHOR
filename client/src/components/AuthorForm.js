import React, { useState } from 'react';

const AuthorForm = (props) => {
    const { initialName, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ name });
        setName(initialName);
    }

    return (
        <form onSubmit={onSubmitHandler}>
               { errors ? errors.map( (err,idx) => <p key={ idx } className="danger">{ err }</p> ) : <p></p> }
            <p>
                <label>Name: </label>
                <input type="text" name="name" onChange={ (e)=>setName(e.target.value) } value={name}/>
            </p>
            <input type="submit" value="Submit" />

        </form>
    )
}

export default AuthorForm;