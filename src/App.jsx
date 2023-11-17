import { useState } from "react";
import "./App.css";
import { Calculator } from "./components/Calculator";
import MyForm from "./pages/MyForm";

function App() {    

  return (
    <>
      <h1>Mi primer formulario</h1>
      <MyForm />
    </>
  );
}
export default App;

// const [inputValue, setInputValue] = useState({});
// const handleChange = (event) => {
//   const { value, name } = event.target;
//   setInputValue({
//     ...inputValue,
//     [name]: value
//   });
// } 