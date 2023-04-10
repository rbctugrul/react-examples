import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function notify() {
  toast("parolayı yanlış girdiniz");
}

function App() {
  return (
    <div className="App">
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
}

export default App;
