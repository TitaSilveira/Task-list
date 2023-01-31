import React, { useState, useEffect } from "react";
import { TfiPlus, TfiWrite, TfiClose } from "react-icons/tfi";

import './Form.css';

const Form = (props) => {
    // const[tarefa, setTarefa] = useState("")
    const { taskToEdit, editing, onAdd, onCancel, submitEdit } = props;


    const [task, setTask] = useState("");

    useEffect(() => {
        if (!!taskToEdit) {
            setTask(taskToEdit);
        }
    }, []);

    useEffect(() => {
        if (!!taskToEdit) {
            setTask(taskToEdit);
        }
    }, [taskToEdit]);

    // useEffect(() => {
    // }, [task]);

    const handleAdd = () => {
        if (task) {
            let LS = localStorage.getItem('tarefas');
            if (LS?.length > 0) {
                let tasks = JSON.parse(LS)
                if (tasks.length > 0) {
                    let index = tasks.findIndex(t => {
                        return t === task
                    })

                    if (index > -1) {
                        alert(`Não é possível criar tarefas duplicadas.`);
                    } else {
                        onAdd(task);
                    }
                } else {
                    onAdd(task);
                }
            } else {
                onAdd(task);
            }
        } else {
            alert(`Não é possível adicionar tarefas com nome vazio`);
        }
    }

    const handleCancel = () => {
        setTask("");
        onCancel();
    }

    const handleEdit = () => {
        let LS = localStorage.getItem('tarefas');
        if (LS?.length > 0) {
            let tasks = JSON.parse(LS)
            if (tasks.length > 0) {
                let index = tasks.findIndex(t => {
                    return t === taskToEdit
                })

                if (index > -1) {
                    submitEdit(index, task);
                } else {
                    alert(`Essa tarefa já não existe mais no cadastro.`);
                }
            } else {
                alert(`Não existem tarefas cadastradas no sistema.`);
            }
        } else {
            alert(`Não existem tarefas cadastradas no sistema.`);
        }
    }

    return (
        // <form onSubmit={submitHandle}>
        //     <input type="text" 
        //     placeholder="Adicione..." 
        //     onChange={changeHandle} 
        //     value={novaTarefa}
        //     className='input-tarefa'
        //     ></input>
        //     <button className="btn-tarefa"><TfiPlus /></button>
        // </form>

        // <div className='input-tarefa'>

        <div>

            <input
                type={'text'}
                placeholder={'Tarefa:'}
                onChange={(e) => { setTask(e.target.value) }}
                value={task}
            />
            {
                !editing &&
                <button className="btn-tarefa"
                    onClick={() => { handleAdd() }}
                ><TfiPlus /></button>
            }
            {
                editing &&
                <>
                    <button className="btn-tarefa"
                        onClick={() => { handleEdit() }}
                    ><TfiWrite /></button>
                    <button className="btn-tarefa"
                        onClick={() => { handleCancel() }}
                    ><TfiClose /></button>
                </>
            }
        </div>

    )
}

export default Form;