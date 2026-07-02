import { useState, useEffect } from "react";

function FilterModal({
  isOpen,
  onClose,
  filters,
  setFilters,
}) {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setLocalFilters({
      ...localFilters,
      [e.target.name]: e.target.value,
    });
  };

  const applyFilters = () => {
    setFilters(localFilters);
    onClose();
  };

  const clearFilters = () => {
    const emptyFilters = {
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    };

    setLocalFilters(emptyFilters);
    setFilters(emptyFilters);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">

        <h2 className="mb-4 text-xl font-bold">
          Filter Users
        </h2>

        <div className="space-y-4">

          <input
            name="firstName"
            placeholder="First Name"
            value={localFilters.firstName}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />

          <input
            name="lastName"
            placeholder="Last Name"
            value={localFilters.lastName}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />

          <input
            name="email"
            placeholder="Email"
            value={localFilters.email}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />

          <input
            name="department"
            placeholder="Department"
            value={localFilters.department}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />

        </div>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={clearFilters}
            className="rounded bg-gray-200 px-4 py-2"
          >
            Clear
          </button>

          <button
            onClick={applyFilters}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            Apply
          </button>

        </div>

      </div>
    </div>
  );
}

export default FilterModal;