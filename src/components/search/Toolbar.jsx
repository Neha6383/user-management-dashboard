function Toolbar({ searchterm, setSearchTerm }) {
    return(
        <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow md:flex-row md:items-center md:justify-between">
            <input 
            type="text"
            placeholder="Search users..."
            value={searchterm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-blue-500 md:w-80"
            />

            <div className="flex gap-3">
                <button className="rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300">
                    Filter
                </button>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                    Add User
                </button>
            </div>
        </div>

    );
}

export default Toolbar;