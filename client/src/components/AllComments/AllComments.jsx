import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../../redux/actions/index";

const AllComments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  let comments = useSelector((state) => state.allComments);
  console.log(
    "comentarios:",
    comments.map((e) => e.textComment)
  );

  return (
    <div className="items">
      (
      {comments ? (
        comments.map((e) => <h3 className="text">{e.textComment}</h3>)
      ) : (
        <h3>No comments yet</h3>
      )}
    </div>
  );
};
export default AllComments;
