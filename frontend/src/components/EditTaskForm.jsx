import React, { useState } from 'react';
import { RequestGenericsWithId } from '../utils/RequestsAPI'

const EditTaskForm = ({ infoTask,  RequesInitialtAllTask, setIsEditing}) => {
  const { id, title, description } = infoTask;
  const [ titleEdit, setTitleEdit ] = useState(title);
  const [ descriptionEdit, setDescriptionEdit ] = useState(description);

  const handleEditTask = async () => {
    await RequestGenericsWithId('PATCH',{ title: titleEdit, description: descriptionEdit}, 'tasks/update', id);
    await RequesInitialtAllTask()
  }

  return (
    <form className="mb-4 bg-white p-4 rounded-lg shadow-md">
      <input
        type="text"
        value={titleEdit}
        onChange={(e) => setTitleEdit(e.target.value)}
        className="border border-gray-300 p-2 mb-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Título"
      />
      <textarea
        value={descriptionEdit}
        onChange={(e) => setDescriptionEdit(e.target.value)}
        className="border border-gray-300 p-2 mb-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Descrição"
      />
      
      <button
        type="submit"
        onClick={() => handleEditTask()}
        className="bg-blue-500 text-white p-2 rounded-md w-full mt-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        salvar
      </button>
      <button
        type="submit"
        onClick={() => setIsEditing(false)}
        className="bg-blue-500 text-white p-2 rounded-md w-full mt-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        cancelar
      </button>
    </form>
  );
};

export default EditTaskForm;