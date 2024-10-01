import React from "react";

const PopUp = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50"  onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto p-6 relative" onClick={(e) => e.stopPropagation()} >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button className="text-gray-400 hover:text-gray-600 text-2xl" onClick={onClose}></button>
        </div>
        <div className="modal-body mb-4">{children}</div>
      </div>
    </div>
  );
};
export default PopUp;
