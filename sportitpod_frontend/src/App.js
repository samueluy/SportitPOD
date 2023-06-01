import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Comments from "./components/Comment";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/get-data/");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  if (!data || data.length === 0) {
    return <div>Loading...</div>; // Render a loading state or handle the case when data is not available
  }

  const comments = data.map((item) => {
    return (
      <Comments key={item.id} author={item.author} body={item.body} upvotes={item.upvotes} />
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
