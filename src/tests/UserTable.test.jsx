import { render, screen } from "@testing-library/react";
import UserTable from "../components/table/UserTable";

describe("UserTable", () => {
  const users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      department: "IT",
    },
  ];

  test("renders user data correctly", () => {
    render(
      <UserTable
        users={users}
        loading={false}
        error=""
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
    expect(screen.getByText("IT")).toBeInTheDocument();
  });

  test("shows loading message", () => {
    render(
      <UserTable
        users={[]}
        loading={true}
        error=""
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    expect(screen.getByText(/Loading users/i)).toBeInTheDocument();
  });

  test("shows error message", () => {
    render(
      <UserTable
        users={[]}
        loading={false}
        error="Failed to fetch users."
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    expect(
      screen.getByText(/Failed to fetch users/i)
    ).toBeInTheDocument();
  });
});