import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-full md:w-64 p-4">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <nav className="mt-4">
        <ul>
          <li className="p-2 hover:bg-gray-700 rounded">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="p-2 hover:bg-gray-700 rounded">
            <Link to="/users">All Users</Link>
          </li>
          <li className="p-2 hover:bg-gray-700 rounded">
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
