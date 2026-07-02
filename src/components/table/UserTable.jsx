import { FaEdit, FaTrash } from "react-icons/fa";

function UserTable({
  users,
  loading,
  error,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="rounded-lg bg-white p-6 text-center shadow">
        Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-100 p-6 text-red-600 shadow">
        {error}
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="rounded-lg bg-white p-6 text-center shadow">
        No users found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-slate-200">
          <tr>
            <th className="px-4 py-3 text-left">ID</th>
            <th className="px-4 py-3 text-left">First Name</th>
            <th className="px-4 py-3 text-left">Last Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Department</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            const firstName =
              user.firstName ||
              user.name?.split(" ")[0] ||
              "";

            const lastName =
              user.lastName ||
              user.name?.split(" ").slice(1).join(" ") ||
              "";

            const department =
              user.department || "IT";

            return (
              <tr
                key={user.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="px-4 py-3">{user.id}</td>

                <td className="px-4 py-3">
                  {firstName}
                </td>

                <td className="px-4 py-3">
                  {lastName}
                </td>

                <td className="px-4 py-3">
                  {user.email}
                </td>

                <td className="px-4 py-3">
                  {department}
                </td>

                <td className="px-4 py-3">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => onEdit(user)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit User"
                    >
                      <FaEdit />
                    </button>

                    <button
  onClick={() => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${firstName} ${lastName}?`
    );

    if (confirmDelete) {
      onDelete(user.id);
    }
  }}
  className="text-red-600 hover:text-red-800"
  title="Delete User"
>
  <FaTrash />
</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;