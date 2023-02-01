import React, { useState } from "react";
import { TfiPlus, TfiMarkerAlt } from "react-icons/tfi";
import './Form.css';

const Form = (props) => {
    // const[tarefa, setTarefa] = useState("")
    const{onList, setNovaTarefa, novaTarefa, addEdit} = props;

    const changeHandle = (e) => {
        setNovaTarefa(e.target.value)
    }
    
    const submitHandle = (e) => {
        e.preventDefault();
        onList(novaTarefa);
    }
   

    return(
    <form onSubmit={submitHandle}>
        <input type="text" 
        placeholder="Adicione..." 
        onChange={changeHandle} 
        value={novaTarefa}
        className='input-tarefa'
        ></input>
        {
            addEdit? <button className="btn-tarefa-edit"> <TfiMarkerAlt /></button> : <button className="btn-tarefa-add"><TfiPlus /></button>
        }
    </form>
     
    )
}

export default Form;