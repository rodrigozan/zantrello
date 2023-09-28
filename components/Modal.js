import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');

  const handleSave = () => {
    onSave(title);
    setTitle('');
    onClose();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-4 z-10">
        <h2 className="text-xl font-semibold mb-4">Nova Tarefa</h2>
        <input
          type="text"
          placeholder="Título da Tarefa"
          className="w-full p-2 border rounded-md mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSave}>
            Salvar
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
