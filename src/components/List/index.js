import React from "react";
import { TfiMarkerAlt, TfiTrash } from "react-icons/tfi";
import './List.css';


const List = (props) => {
    const { tarefas, handleDelete, handleEdit } = props;

    
    return(
        <div className="lista">
            {tarefas.map((el, index) => {
                return(
                   <div className="lista-tarefa" key={el}>{el}
                    <div className="lista-tarefas-icons">
                        <TfiMarkerAlt 
                            className="edit"
                            onClick={(e) => handleEdit(e, index)}
                        />

                        <TfiTrash
                            className="delete"
                            onClick={(e) => handleDelete(e, index)}
                        />
                    </div>
                </div>  
                )
            })}
        </div>
    )
    //         { tarefas.map((el, index) => {
    //             return(
    //              <div className="card" key={index}>
    //              <div>
    //                 <p>{el}</p>
    //              </div>
    //              <div>
    //                 <button><HiOutlinePencil /></button>
    //                 <button onClick={(e) => handleDelete(e, index)}><HiOutlineTrash /></button>
    //              </div>
    //              </div>
    //             )     
    //         })} 
    // );
}

export default List;