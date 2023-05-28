import React from "react";
import Navbar from "./components/Navbar";
import Comments from "./components/Comment";
import data from "./comments.json";
import "./App.css";

function App() {
  const comments = data.map((item) => {
    return (
      <Comments author={item.author} body={item.body} upvotes={item.upvotes} />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <div className="comments-container">
        {comments.slice(0, Math.ceil(comments.length / 2))}
        {comments.slice(Math.ceil(comments.length / 2))}
      </div>
    </div>
  );
}

export default App;
