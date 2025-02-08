const Header = ({ title }) => {
    return (
      <header className="bg-gray-100 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">{title}</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </header>
    );
  };
  
  export default Header;
  