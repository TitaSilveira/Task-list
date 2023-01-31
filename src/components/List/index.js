import React from "react";
import { TfiMarkerAlt, TfiTrash } from "react-icons/tfi";
import './List.css';

const TaskList = (props) => {
    const { tasks, onEdit, onDelete } = props;

    const handleDelete = (task) => {
        let LS = localStorage.getItem('tarefas');
        if(LS?.length > 0){
            let tasks = JSON.parse(LS)
            if(tasks.length > 0){
                let index = tasks.findIndex(t => {
                  return t === task
                })

                if(index > -1){
                    onDelete(index);
                }else{
                    alert(`Essa tarefa já não existe mais no cadastro.`);
                }
            }else{
                alert(`Não existem tarefas cadastradas no sistema.`);
            }
        }else{
            alert(`Não existem tarefas cadastradas no sistema.`);
        }
    }

    const handleEdit = (task) => {
        onEdit(task);
    }

    return (
        <div className="lista">
            {tasks.map((el, i) => {
                return (
                    <div className="lista-tarefa" key={i}>{el}
                        <div className="lista-tarefas-icons">
                            <TfiMarkerAlt
                                className="edit"
                                onClick={() => handleEdit(el)}
                            />
                            <TfiTrash
                                className="delete"
                                onClick={() => handleDelete(el)}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TaskList;