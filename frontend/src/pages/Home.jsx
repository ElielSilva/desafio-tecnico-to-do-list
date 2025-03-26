import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBar';
import AddTaskForm from '../components/AddTaskForm';
import { RequestAllTasks, RequestGenerics, RequestGenericsWithId } from '../utils/RequestsAPI';
import EditTaskForm from '../components/EditTaskForm';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({ name: 'João Silva', photoUrl: 'url_da_foto.jpg' });
  // const [ title, setTitle ] = useState('');
  // const [ description, setDescription ] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: null, title: '', description: '' });

  useEffect(() => {
    async function fetchData() {
      await RequesInitialtAllTask();
      // setTasks(response);
    }
    fetchData();
  }, []);

  const RequesInitialtAllTask = async () => {
    const response = await RequestAllTasks();
    setTasks(response);
    console.log(response);
  } 

  // const handleAddTask = async () => {
  //     await RequestGenerics('POST',{title, description}, 'tasks/create');
  //     await RequesInitialtAllTask()
  // }

  const handleEdit = (index) => {
    setCurrentTask(index);
    console.log(currentTask);
    setIsEditing(true);
  };

  const handleStatus = async (taskId) => {
    await RequestGenericsWithId('PATCH',{}, 'tasks/update/status', taskId);
    await RequesInitialtAllTask();
  };

  const handleDelete = async (taskId) => {
    await RequestGenericsWithId('DELETE',{}, 'tasks/delete', taskId);
    await RequesInitialtAllTask();
  };
  
  return(
    <>
      <Navbar name={user.name} />
      {isEditing
      ? 
      // <p>{currentTask}</p>
      <EditTaskForm 
      infoTask={tasks[currentTask]} RequesInitialtAllTask={ RequesInitialtAllTask } setIsEditing={ setIsEditing }
      />
      : <AddTaskForm RequesInitialtAllTask={RequesInitialtAllTask}/>}
      <input type="text" />
      <input type="text" />
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Minhas Tarefas</h2>
        <ul>
          {tasks && tasks.map((task, index)=> (
            <li
              key={task.id}
              className={`flex items-center justify-between p-2 mb-2 rounded-md ${
                task.completed ? 'bg-green-100' : 'bg-yellow-100'
              }`}
            >
              <span className={`flex-1 ${task.completed ? 'line-through' : ''}`}>
                {task.title}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() =>  handleStatus(task.id)}
                  className={`ml-2 text-sm ${task.completed ? 'text-green-500' : 'text-yellow-500'}`}
                >
                  {task.completed ? 'Concluída' : 'Pendente'}
                </button>
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-500 text-sm"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-red-500 text-sm"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;