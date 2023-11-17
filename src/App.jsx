import { useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator";
import MyForm from "./pages/MyForm";

function App() {   
    
    // const [inputValue, setInputValue] = useState({})

    // const handleChange = (e) => {
    //     const { value, name } = e.target

    //     setInputValue({
    //         ...inputValue,
    //         [name]: value
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }
    
    return (
        <>
        <MyForm />

        {/* <h1 className="m-3">Mi primer formulario</h1>
        <form
            className="flex flex-col items-start"
            onSubmit={handleSubmit}    
        >

            <label htmlFor="name">Nombre:</label>
            <input
                id="name"
                name="name"
                className="bg-slate-100 p-2 rounded-full w-full"
                type="text"
                onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
                id="email"
                name="email"
                className="bg-slate-100 p-2 rounded-full w-full"
                type="text"
                onChange={handleChange}
            />

            <label htmlFor="password">Password:</label>
            <input
                id="password"
                name="password"
                className="bg-slate-100 p-2 rounded-full w-full"
                type="password"
                onChange={handleChange}
            />

        </form> */}

        </>
    );
}
export default App;