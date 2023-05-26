import logo from "./logo.svg";
import "./App.css";
import Comments from "./components/Comment";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
      <Comments />
      <Timer />
    </div>
  );
}

export default App;
