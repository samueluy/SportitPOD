import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Comments from "./components/Comment";
import data from "./comments.json";

function App() {
  const comments = data.map((item) => {
    return (
      <Comments author={item.author} body={item.body} upvotes={item.upvotes} />
    );
  });

  return (
    <div className="App">
      <Navbar />
      {comments}
    </div>
  );
}

export default App;
