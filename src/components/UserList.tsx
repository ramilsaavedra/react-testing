import useUserContext from '../hooks/userHooks.ts';

function UserList() {
  const { users } = useUserContext();

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.length ? (
          users.map((user) => (
            <li>
              <span>{user.name}</span>
              <span>{user.email}</span>
            </li>
          ))
        ) : (
          <h2>No users</h2>
        )}
      </ul>
    </div>
  );
}

export default UserList;
