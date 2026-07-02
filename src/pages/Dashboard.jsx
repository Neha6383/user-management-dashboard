import { useState } from "react";

import Header from "../components/layout/Header";
import Toolbar from "../components/search/Toolbar";
import UserTable from "../components/table/UserTable";
import Pagination from "../components/pagination/Pagination";
import UserModal from "../components/modal/UserModal";
import FilterModal from "../components/filter/FilterModal";
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

  const [sortField, setSortField] = useState("id");
const [sortOrder, setSortOrder] = useState("asc");

const [isFilterOpen, setIsFilterOpen] = useState(false);

const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(10);

const [filters, setFilters] = useState({
  firstName: "",
  lastName: "",
  email: "",
  department: "",
});

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users
  .filter((user) => {
    const firstName =
      user.firstName || user.name?.split(" ")[0] || "";

    const lastName =
      user.lastName ||
      user.name?.split(" ").slice(1).join(" ") ||
      "";

    const department = user.department || "IT";

    const query = searchTerm.toLowerCase();

    return (
  firstName.toLowerCase().includes(query) &&
  firstName.toLowerCase().includes(filters.firstName.toLowerCase()) &&

  lastName.toLowerCase().includes(filters.lastName.toLowerCase()) &&

  user.email.toLowerCase().includes(filters.email.toLowerCase()) &&

  department.toLowerCase().includes(filters.department.toLowerCase())
);
  })
  .sort((a, b) => {
    let valueA;
    let valueB;

    switch (sortField) {
      case "firstName":
        valueA = a.firstName || a.name?.split(" ")[0] || "";
        valueB = b.firstName || b.name?.split(" ")[0] || "";
        break;

      case "lastName":
        valueA =
          a.lastName || a.name?.split(" ").slice(1).join(" ") || "";
        valueB =
          b.lastName || b.name?.split(" ").slice(1).join(" ") || "";
        break;

      case "email":
        valueA = a.email;
        valueB = b.email;
        break;

      case "department":
        valueA = a.department || "IT";
        valueB = b.department || "IT";
        break;

      default:
        valueA = a.id;
        valueB = b.id;
    }

    if (typeof valueA === "string") {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
    }

    if (valueA < valueB)
      return sortOrder === "asc" ? -1 : 1;

    if (valueA > valueB)
      return sortOrder === "asc" ? 1 : -1;

    return 0;
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="mx-auto flex max-w-7xl flex-col gap-6 p-6">

        <Toolbar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  sortField={sortField}
  setSortField={setSortField}
  sortOrder={sortOrder}
  setSortOrder={setSortOrder}
  onAddUser={() => {
    setSelectedUser(null);
    setIsModalOpen(true);
  }}
  onFilter={() => setIsFilterOpen(true)}
/>

const startIndex = (currentPage - 1) * pageSize;

const paginatedUsers = filteredUsers.slice(
  startIndex,
  startIndex + pageSize
);

        <UserTable
          users={paginatedUsers}
          loading={loading}
          error={error}
          onEdit={(user) => {
            setSelectedUser(user);
            setIsModalOpen(true);
          }}
          onDelete={deleteUser}
        />

        <Pagination
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
  pageSize={pageSize}
  setPageSize={setPageSize}
  totalUsers={filteredUsers.length}
/>

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

        <FilterModal
  isOpen={isFilterOpen}
  onClose={() => setIsFilterOpen(false)}
  filters={filters}
  setFilters={setFilters}
/>

      </main>
    </div>
  );
}

export default Dashboard;