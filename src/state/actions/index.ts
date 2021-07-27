import { Dispatch } from "redux";

export const fetchUsers = () => {   
    return (dispatch: Dispatch) => {    
        dispatch({
            type: "fetchUser"
        })
    };
}