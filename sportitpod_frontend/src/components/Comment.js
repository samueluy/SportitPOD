import React from "react";
import ReactMarkdown from "react-markdown";

export default function Comments(props) {
  return (
    <div className="comment">
      <div className="comment--meta">
        <div className="comment--meta-box">
          <span className="comment--upvotes">{props.upvotes}</span>
          <p className="comment--author">{props.author}</p>
        </div>
      </div>
      <ReactMarkdown className="comment--body">{props.body}</ReactMarkdown>
    </div>
  );
}
