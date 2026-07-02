function Pagination() {
    return(
        <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow">
            <p className="text-sm text-gray-600">
                Showing 0 users
            </p>

            <div className="space-x-2">
                <button className="rounded border px-3 py-1">
                    Previous
                </button>

                <button className="rounded border px-3 py-1">
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;