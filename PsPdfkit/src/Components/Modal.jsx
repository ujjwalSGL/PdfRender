import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[80vh] overflow-y-auto p-6 relative" onClick={(e) => e.stopPropagation()}  >
        <div ><h2>{title}</h2>
          <button className="text-gray-400 text-2xl" onClick={onClose}> </button>
        </div>
        <div className="mb-4 h-[70vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;