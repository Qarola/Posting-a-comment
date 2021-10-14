import axios from 'axios';

export const getAllComments = () => {
    return function(dispatch) {
        axios.get("http://localhost:3001/comments")
        .then((res) => {
            console.log(res);
            dispatch({
                type: "GET_ALL_COMMENTS",
                payload: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        });
    };

}

export const postComment = ({ textComment }) => {
  return function(dispatch) {
    const Comment = { textComment };
    axios.post("http://localhost:3001/comment", Comment)
    .then((res) => 
    dispatch({
        type: "POST_COMMENT",
        payload:res.data
    })
    )
    .catch((err) => {
        console.log(err)
    });
  };
}