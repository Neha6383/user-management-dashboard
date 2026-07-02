import Header from "../components/layout/Header";
import Toolbar from "../components/search/Toolbar";
import UserTable from "../components/table/UserTable";
import Pagination from "../components/pagination/Pagination";
import useUsers from "../hooks/useUsers";

function Dashboard() {
    const { users, loading, error } = useUsers();

    return(
        <div className="min-h-screen bg-slate-100">
            <Header />

            <main className="mx-auto flex max-w-7xl flex-col gap-6 p-6">
                <Toolbar />
                <UserTable 
                    users={users}
                    loading={loading}
                    error={error}
                />
                <Pagination />
            </main>
        </div>
    );
}

export default Dashboard;