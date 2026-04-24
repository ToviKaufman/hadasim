

function UserList({ users }) {

  return (
    <div>
      

     
        <ul>
          {users.map((user) => (
            <li key={user.id}>
               {user.fullName} — כיתה {user.className}
            </li>
          ))}
        </ul>
      
    </div>
  );
}

export default UserList;