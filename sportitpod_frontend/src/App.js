import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Comments from "./components/Comment";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Comments />
      <Timer />
    </div>
  );
}

export default App;
