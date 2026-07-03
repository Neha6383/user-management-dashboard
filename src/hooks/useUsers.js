import { useEffect, useState } from "react";
import {
  getUsers,
  createUser,
  editUser,
  removeUser,
} from "../services/userService";

function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  }

  async function addUser(user) {
    try {
      const createdUser = await createUser(user);

      const newUser = {
        id: createdUser.id || Date.now(),
        ...user,
      };

      setUsers((prev) => [newUser, ...prev]);

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async function updateUser(id, updatedUser) {
  try {
    // Only call the API for users that exist in JSONPlaceholder
    if (id <= 10) {
      await editUser(id, updatedUser);
    }

    // Always update local state
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, ...updatedUser }
          : user
      )
    );

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

  async function deleteUser(id) {
    try {
      await removeUser(id);

      setUsers((prev) =>
        prev.filter((user) => user.id !== id)
      );

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  return {
    users,
    loading,
    error,
    addUser,
    updateUser,
    deleteUser,
  };
}

export default useUsers;