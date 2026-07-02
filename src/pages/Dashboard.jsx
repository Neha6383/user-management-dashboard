import { useState } from "react";

import Header from "../components/layout/Header";
import Toolbar from "../components/search/Toolbar";
import UserTable from "../components/table/UserTable";
import Pagination from "../components/pagination/Pagination";
import UserModal from "../components/modal/UserModal";

import useUsers from "../hooks/useUsers";

function Dashboard() {
  const {
    users,
    loading,
    error,
    addUser,
    updateUser,
    deleteUser,
  } = useUsers();

  const [searchTerm, setSearchTerm] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter((user) => {
    const firstName =
      user.firstName || user.name?.split(" ")[0] || "";

    const lastName =
      user.lastName ||
      user.name?.split(" ").slice(1).join(" ") ||
      "";

    const department = user.department || "IT";

    const query = searchTerm.toLowerCase();

    return (
      firstName.toLowerCase().includes(query) ||
      lastName.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      department.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="mx-auto flex max-w-7xl flex-col gap-6 p-6">

        <Toolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onAddUser={() => {
            setSelectedUser(null);
            setIsModalOpen(true);
          }}
        />

        <UserTable
          users={filteredUsers}
          loading={loading}
          error={error}
          onEdit={(user) => {
            setSelectedUser(user);
            setIsModalOpen(true);
          }}
          onDelete={deleteUser}
        />

        <Pagination />

        <UserModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedUser(null);
          }}
          selectedUser={selectedUser}
          addUser={addUser}
          updateUser={updateUser}
        />

      </main>
    </div>
  );
}

export default Dashboard;