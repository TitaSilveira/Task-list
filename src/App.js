import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TaskList from './components/List';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState('');
  const [noContent, setNoContent] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    let storageRecovery = [];
    try {
      if (localStorage.getItem('tarefas').length > 0) {
        storageRecovery = JSON.parse(localStorage.getItem('tarefas'))
        setTasks(storageRecovery);
      } else {
        setNoContent(true);
      }
    } catch (error) {
      alert('Houve um erro ao recuperar informações de tarefas. Reiniciando a base de dados.')
      setTasks([]);
      setNoContent(true);
    }
  }, [])

  const deleteTask = (indexToDelete) => {
    let tempList = tasks;
    tempList.splice(indexToDelete, 1);
    localStorage.setItem('tarefas', JSON.stringify(tempList))
    setTasks(tempList);
    alert('Tarefa deletada com sucesso!')
  }

  const editTask = (task) => {
    setTaskToEdit(task)
    setIsEditing(true)
  }

  const submitEdit = (i, task) => {
    let tempList = tasks;
    tempList[i] = task
    localStorage.setItem('tarefas', JSON.stringify(tempList))
    setTasks(tempList);
    alert('Tarefa editada com sucesso!')
  }

  const saveTask = (taskToSave) => {
    let tempList = tasks;
    tempList.push(taskToSave)
    localStorage.setItem('tarefas', JSON.stringify(tempList))
    setTasks(tempList);
    alert('Tarefa criada com sucesso!')
  }
  
  const cancelEdit = () => {
    setIsEditing(false);
    setTaskToEdit("");
  }

  return (
    <div className='container'>
      <h1>O que você planeja para hoje?</h1>
      {/* Atualizar view quando editar, criar ou deletar tasks */}
      <Form
        taskToEdit={taskToEdit}
        editing={isEditing}
        onAdd={saveTask}
        onCancel={cancelEdit}
        submitEdit={submitEdit}
      />
      {
        tasks.length > 0 &&
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      }
      {
        noContent &&
        <span>Não há nenhuma tarefa cadastrada!</span>
      }
    </div>
  );
}

export default App;

