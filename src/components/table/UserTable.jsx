function UserTable({ users, loading, error }) {
    if (loading) {
        return(
            <div className="rounded-lg bg-white p-6 shadow text-center">
                Loading users...
            </div>
        );
    }

    if (error) {
        return(
            <div className="rounded-lg bg-red-100 p-6 text-red-600 shadow">
                {error}
            </div>
        );
    }

    return(
        <div className="overflow-x-auto rounded-lg bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-slate-200">
          <tr>
            <th className="px-4 py-3 text-left">ID</th>
            <th className="px-4 py-3 text-left">First Name</th>
            <th className="px-4 py-3 text-left">Last Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Department</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => {
            const names = user.name.split(" ");

            return (
              <tr
                key={user.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="px-4 py-3">{user.id}</td>

                <td className="px-4 py-3">
                  {names[0]}
                </td>

                <td className="px-4 py-3">
                  {names.slice(1).join(" ")}
                </td>

                <td className="px-4 py-3">
                  {user.email}
                </td>

                <td className="px-4 py-3">
                  IT
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