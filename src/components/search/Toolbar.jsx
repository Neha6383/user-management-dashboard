function Toolbar({
  searchTerm,
  setSearchTerm,
  onAddUser,
  onFilter,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 lg:w-80"
      />

      <div className="flex flex-wrap gap-3">
        {/* Sort Field */}
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          className="rounded-lg border px-3 py-2"
        >
          <option value="id">Sort by ID</option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="email">Email</option>
          <option value="department">Department</option>
        </select>

        {/* Sort Order */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="rounded-lg border px-3 py-2"
        >
          <option value="asc">Ascending ↑</option>
          <option value="desc">Descending ↓</option>
        </select>

        <button
  onClick={onFilter}
  className="rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300"
>
  Filter
</button>

        {/* Add User */}
        <button
          onClick={onAddUser}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add User
        </button>
      </div>
    </div>
  );
}

export default Toolbar;