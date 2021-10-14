import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postComment, getAllComments } from "../../redux/actions/index";
import "./NewComment.css";

const NewComment = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    textComment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postComment(input));
    dispatch(getAllComments());
    setInput({ textComment: "" });
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="new-c">
      <form className="comment-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="input-c"
          name="textComment"
          placeholder="Your comment here"
          value={input.textComment}
          type="text"
          onChange={handleInputChange}
        />

        <button className="comment-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewComment;
