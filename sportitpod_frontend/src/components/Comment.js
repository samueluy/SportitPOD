import React from "react";
import ReactMarkdown from "react-markdown";

export default function Comments(props) {
  return (
    <div className="comment">
      <div className="comment--meta">
        <span className="comment--upvotes">{props.upvotes}</span>
        <span className="comment--spacer"> </span>
        <p className="comment--author">{props.author}</p>
      </div>
      <ReactMarkdown className="comment--body">{props.body}</ReactMarkdown>
    </div>
  );
}
