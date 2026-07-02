import Header from "../components/layout/Header";
import Toolbar from "../components/search/Toolbar";
import UserTable from "../components/table/UserTable";
import Pagination from "../components/pagination/Pagination";

function Dashboard() {
    return(
        <div className="min-h-screen bg-slate-100">
            <Header />

            <main className="mx-auto flex max-w-7xl flex-col gap-6 p-6">
                <Toolbar />
                <UserTable />
                <Pagination />
            </main>
        </div>
    );
}

export default Dashboard;