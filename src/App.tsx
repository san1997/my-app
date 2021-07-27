import React, { useEffect } from 'react';
import './App.css';
import * as  actionCreators from "./state/actions";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserList from "./components/userList/userList";

function App() {
  const dispatch = useDispatch();
  const { fetchUsers } = bindActionCreators(actionCreators, dispatch);

  const state = useSelector((state: any) => state);

  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <UserList
          users={state.user.users}
        />
      </header>
    </div>
  );
}

export default App;
