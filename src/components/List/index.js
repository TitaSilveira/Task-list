import React from "react";
import { TfiMarkerAlt, TfiTrash } from "react-icons/tfi";


const List = (props) => {
    const { tarefas, handleDelete, handleEdit } = props;

    
    return(
        <ul className="tarefas">
            {tarefas.map((el, index) => {
                return(
                   <li key={el}>{el}
                    <span>
                        <TfiMarkerAlt 
                            className="edit"
                            onClick={(e) => handleEdit(e, index)}
                        />

                        <TfiTrash
                            className="delete"
                            onClick={(e) => handleDelete(e, index)}
                        />
                    </span>
                </li>  
                )
            })}
        </ul>
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