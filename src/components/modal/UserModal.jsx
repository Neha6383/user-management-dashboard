function UserModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
                <h2 className="mb-6 text-2xl font-bold">
                    Add User
                </h2>
                <p> Form goes here...</p>

                <div className="mt-6 flex justify-end">
                    <button 
                    onClick={onClose}
                    className="rounded bg-red-500 px-4 py-2 text-white">
                    Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserModal;