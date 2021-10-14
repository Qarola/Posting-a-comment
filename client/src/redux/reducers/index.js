const initialState = {
  allComments: [],
  addComment: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_COMMENTS":
      return {
        ...state,
        allComments: action.payload,
      };
    case "POST_COMMENT":
      return {
        ...state,
        addComment: action.payload,
      };
    default:
      return state;
  }
}

