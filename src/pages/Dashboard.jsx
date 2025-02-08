import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className="p-6">
      <Header title="Dashboard" />
      <h1 className="text-3xl font-bold mt-4">Welcome to Admin Dashboard</h1>
      <p className="mt-2 text-gray-600">Manage Users and Products efficiently.</p>
    </div>
  );
};

export default Dashboard;
