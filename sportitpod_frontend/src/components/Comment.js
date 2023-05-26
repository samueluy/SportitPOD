import React from "react";
import ReactMarkdown from "react-markdown";

export default function (props) {
  return (
    <div className="comment">
      <span className="comment-upvotes">32 </span>
      <p className="comment-author">sbpotdbot</p>
      <ReactMarkdown>
        **If you choose to self promote (tips excluded) in the POTD thread:**
        You must have accurate tracking of your full POTD record with detailed
        stats including **ROI+average odds+units won** written into the comment.
        No resetting records. **|** For picks that do not fit the POTD rules use
        the Daily Discussion posts.
      </ReactMarkdown>
    </div>
  );
}
