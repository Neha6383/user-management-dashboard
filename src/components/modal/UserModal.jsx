import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../common/Button";
import { userSchema } from "../../schemas/userSchema";

function UserModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    },
  });

  if (!isOpen) return null;

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-2xl font-bold">
            Add User
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        

      <form onSubmit={handleSubmit(onSubmit)}>

  <div className="grid gap-4 p-6">

    {/* First Name */}
    <div>
      <label className="mb-1 block text-sm font-medium">
        First Name
      </label>

      <input
        type="text"
        {...register("firstName")}
        className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {errors.firstName && (
        <p className="mt-1 text-sm text-red-500">
          {errors.firstName.message}
        </p>
      )}
    </div>

    {/* Last Name */}
    <div>
      <label className="mb-1 block text-sm font-medium">
        Last Name
      </label>

      <input
        type="text"
        {...register("lastName")}
        className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {errors.lastName && (
        <p className="mt-1 text-sm text-red-500">
          {errors.lastName.message}
        </p>
      )}
    </div>

    {/* Email */}
    <div>
      <label className="mb-1 block text-sm font-medium">
        Email
      </label>

      <input
        type="email"
        {...register("email")}
        className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {errors.email && (
        <p className="mt-1 text-sm text-red-500">
          {errors.email.message}
        </p>
      )}
    </div>

    {/* Department */}
    <div>
      <label className="mb-1 block text-sm font-medium">
        Department
      </label>

      <input
        type="text"
        {...register("department")}
        className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {errors.department && (
        <p className="mt-1 text-sm text-red-500">
          {errors.department.message}
        </p>
      )}
    </div>

  </div>

  <div className="flex justify-end gap-3 border-t px-6 py-4">

    <Button
      type="button"
      className="bg-gray-200 hover:bg-gray-300"
      onClick={() => {
        reset();
        onClose();
      }}
    >
      Cancel
    </Button>

    <Button
      type="submit"
      className="bg-blue-600 text-white hover:bg-blue-700"
    >
      Save
    </Button>

  </div>

</form>
    </div>
    </div>
  );
}

export default UserModal;