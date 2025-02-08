import { useEffect, useState } from "react";
import { fetchUsers } from "../api/api";
import Header from "../components/Header";
import UserCard from "../components/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  // Search filter
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting function
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <div className="p-6">
      <Header title="Users" />
      <h1 className="text-2xl font-bold mt-4">Users List</h1>

      {/* Search & Sort Controls */}
      <div className="flex gap-4 my-4">
        <input
          type="text"
          placeholder="Search users..."
          className="border p-2 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Search
        </button>
      </div>

      {/* Display Users */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
