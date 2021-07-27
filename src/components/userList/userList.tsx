import React, { useState, useEffect } from 'react';
import './userList.css';
import Collapsible from 'react-collapsible';

const UserList: React.FC<{users: any[]}> = ({users}) => {
    const [ filteredUsers, setFileteredUsers ] = useState(users);
    useEffect(() => {
      setFileteredUsers(users);
    }, [users]);

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target.value;
      const matchingUsers = users.filter(e => e.username.includes(input) || e.email.includes(input));
      setFileteredUsers(matchingUsers);
    };

    return (
      <div>
        <div className="header">Users List</div>
        <input
          type="text"
          className="input-area"
          id="formGroupExampleInput"
          placeholder="Search by user name or email..."
          onChange={inputHandler}
        />
        <div className="list">
        {
          filteredUsers.map((user, ind) => 
            <Collapsible
              key={ind}
              trigger={`${ind+1}. ${user.name}   @${user.username}`}
              className="collapsible-card"
            >
              <div className="onclick-info">
                <p> Email: {user.email}</p>
                <p> Phone: {user.phone}</p>
                <p> Website: {user.website}</p>
              </div>
            </Collapsible>
          )
        }
        </div>
      </div>
    );
  }
  
export default UserList;