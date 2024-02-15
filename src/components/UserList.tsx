import { useEffect } from 'react';
import useUserContext from '../hooks/userHooks.ts';

function UserList() {
  const { users } = useUserContext();

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <div>
      <h1>User List</h1>
      <div>
        {users.length ? (
          users.map((user) => (
            <div>
              <span>{user.name}</span>
              <span>{user.email}</span>
            </div>
          ))
        ) : (
          <h2>No users</h2>
        )}
      </div>
    </div>
  );
}

export default UserList;
