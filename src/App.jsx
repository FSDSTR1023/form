import "./App.css";
import { Calculator } from "./components/Calculator";
import MyForm from "./pages/MyForm";

function App() {   
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) =>{
    const { value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value
  });
  }

  return (
    <>
      {/*</><MyForm />*/}
      <h1>Mi primer formulario</h1>
      <form className="flex flex-col items-start">
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          onChange={handleChange} 
          className="bg-orange-50 p-3 rounded-full border-solid border-2 border-orange-400 hover:border-dotted w-full"
        />
        <label>Lugar de nacimiento:</label>
        <input
          type="text"
          name="birth-place"
          onChange={handleChange} 
          className="bg-orange-50 p-3 rounded-full border-solid border-2 border-orange-400 hover:border-dotted w-full"
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange} 
          className="bg-orange-50 p-3 rounded-full border-solid border-2 border-orange-400 hover:border-dotted w-full"
        />
      </form>
    </>
  );
}
export default App;