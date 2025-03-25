import React from 'react';

const AddTaskForm = (title, setTitle, setDescription, description, handleAddTask) => {

  return (
    <form className="mb-4 bg-white p-4 rounded-lg shadow-md">
      <input
        type="text"
        value={title}
        onChange={setTitle}
        className="border border-gray-300 p-2 mb-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Título"
      />
      <textarea
        value={description}
        onChange={setDescription}
        className="border border-gray-300 p-2 mb-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Descrição"
      />
      <button
        type="submit"
        onClick={handleAddTask}
        className="bg-blue-500 text-white p-2 rounded-md w-full mt-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Inserir
      </button>
    </form>
  );
};

export default AddTaskForm;