import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  const[tarefas, setTarefas] = useState([]);
  const[novaTarefa, setNovaTarefa] = useState("");
  const[index, setIndex]  = useState(-1);

  const onChangeList = (tarefa) => {

    if(tarefas.indexOf(tarefa) !== -1) return;
  
    const novasTarefas = [...tarefas];

    if(index === -1) {
      setTarefas([tarefa, ...novasTarefas])
      setNovaTarefa('')
    } else {
      novasTarefas[index] = novaTarefa;
      setTarefas([...novasTarefas])
      setIndex(-1)
      setNovaTarefa('')
    }

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }

  const handleDelete = (e, index) => {
    e.preventDefault();
    setTarefas(tarefas.filter((tarefa, i) => i !== index));
  }

  const handleEdit = (e, index) => {
    e.preventDefault();
    setIndex(index)
    setNovaTarefa(tarefas[index])
  }

  const loadTarefas = () => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))

    if(!tarefas) return;
    setTarefas(tarefas)
  }

  useEffect(() => {
    loadTarefas()
  }, [])

  return (
    <>
    <h1>O que você planeja para hoje?</h1>
      <Form onList={onChangeList} setNovaTarefa={setNovaTarefa} novaTarefa={novaTarefa}/>
      <List tarefas={tarefas} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>
  );
}

export default App;

