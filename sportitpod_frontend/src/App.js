import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Comments from "./components/Comment";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Comments />
    </div>
  );
}

export default App;
