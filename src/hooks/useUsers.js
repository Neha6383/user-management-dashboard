import { useEffect, useState } from "react";
import {
  getUsers,
  addUser as addUserApi,
  updateUser as updateUserApi,
  deleteUser as deleteUserApi,
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
      const createdUser = await addUserApi(user);

      const newUser = {
        ...user,
        id: createdUser.id || Date.now(),
      };

      setUsers((prev) => [...prev, newUser]);

      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async function updateUser(id, updatedUser) {
    try {
      await updateUserApi(id, updatedUser);

      setUsers((prev) =>
        prev.map((user) =>
          user.id === id ? { ...updatedUser, id } : user
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
      await deleteUserApi(id);

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