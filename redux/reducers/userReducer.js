import { ADD_CUR_USER } from "../actions/userAction";

const initialState = {
  user: undefined,
};

export function currentUser(state = initialState, action) {
  switch (action.type) {
    case ADD_CUR_USER:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
}

