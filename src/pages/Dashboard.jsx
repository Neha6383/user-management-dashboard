import { useState } from "react";
import Header from "../components/layout/Header";
import Toolbar from "../components/search/Toolbar";
import UserTable from "../components/table/UserTable";
import Pagination from "../components/pagination/Pagination";
import useUsers from "../hooks/useUsers";

function Dashboard() {
    const [searchTerm, setSearchTerm] = useState("");
    const { users, loading, error } = useUsers();

    const filteredUsers = users.filter((user) => {
        const names = user.name.split(" ");
        const firstName = names[0];
        const lastName = names.slice(1).join(" ");

        const department = "IT";

        const query = searchTerm.toLowerCase();

        return(
            firstName.toLowerCase().includes(query) ||
            lastName.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query) ||
            department.toLowerCase().includes(query) 
        );
    });

    return(
        <div className="min-h-screen bg-slate-100">
            <Header />

            <main className="mx-auto flex max-w-7xl flex-col gap-6 p-6">
                <Toolbar 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <UserTable 
                    users={filteredUsers}
                    loading={loading}
                    error={error}
                />
                <Pagination />
            </main>
        </div>
    );
}

export default Dashboard;