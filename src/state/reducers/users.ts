const initialState = {
  users: [],
  usersloading: false
};

const userReducer = (state = initialState, action: { type: any; data: any; }) => {
  switch (action.type) {
    case "fetchUser": 
      return Object.assign(initialState, {usersloading: true});
    case "fetchUserSuccess":
      return { users: action.data, usersloading: false };
    case "fetchUserFailure":
      return { users: [], usersloading: false };
    default:
      return initialState;
  }
}

export default userReducer;
