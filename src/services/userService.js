import api from "../api/axios";

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const createUser = async (user) => {
  const response = await api.post("/users", user);
  return response.data;
};

export const editUser = async (id, user) => {
  const response = await api.put(`/users/${id}`, user);
  return response.data;
};

export const removeUser = async (id) => {
  await api.delete(`/users/${id}`);
};