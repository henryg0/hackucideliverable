import "./App.css";
import Form from "./components/Form";
import "./css/Form.css";
import petr from "./img/petr.png";

function App() {
  return (
    <div className='flex-container'>
      <Form />
      <img className="petr" src={petr} alt="petr" />
    </div>
  );
}

export default App;
