import "./App.css";
import Form from "./components/Form";
import "./css/Form.css";
import petr from "./img/petr.png";

function App() {
  document.body.style = "background: #ff7b5c";
  return (
    <div>
      <Form />
      <img className="petr" src={petr} alt="petr" />
    </div>
  );
}

export default App;
