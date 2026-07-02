import Button from "../common/Button";

function UserModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-2xl font-bold">
            Add User
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-gray-600">
            User form will go here...
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <Button
            className="bg-gray-200 hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </Button>
        </div>

      </div>
    </div>
  );
}

export default UserModal;