/* eslint-disable */

import React, { useState } from 'react';

const MyForm = () => {
    const [todo, setTodo] = useState({
        title: '', // input type text
        description: '', // input type textarea
        status: '', // input type text
        datestart: '', // input type date
        dateend: '', // input type date
        userId: '2314rtyu8923irj4ntfh12', // usuario fake // input type text
        //id --> logica gestionada en backend
        //createdAt --> logica gestionada en backend
        //modifiedAt --> logica gestionada en backend
        //deletedAt --> logica gestionada en backend
    });
    const [todoList, setTodoList] = useState([]);
    //const { register, handleSubmit, formState: { errors } } = useForm();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setTodo({
            ...todo,
            [name]: value
        })
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch('url del enpoint, method POST', todo)
        //     .then(res => res.json())
        //     .then(data => setTodoList([...todoList, data]))
        //     .catch

    }
    
    const inputStyles = "text-sm bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500";
    return (
        <>
            <form onSubmit={handleSubmit}>

                <label className='text-sm pb-1 text-left text-gray-700'>Add your todo</label>
                <input 
                    type="text"
                    name="todo"
                    placeholder="Username"
                    onChange={handleChange}
                    className={inputStyles}
                />

                <button type="submit">Submit</button>
            </form>
            {todoList}
        </>

    );
};

export default MyForm;

{/* <DynamicInput
type="password"
name="credentials"
label="Credenciales"
placeholder="Credentials"
{...register('credentials', { required: 'Credentials is required' })}
/>
{errors.credentials && <ErrorForm error={errors.credentials.message} />} */}

