const UserCard = ({ user }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold">{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>City: {user.address.city}</p>
      </div>
    );
  };
  
  export default UserCard;
  