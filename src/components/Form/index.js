import React, { useState } from "react";
import { TfiPlus } from "react-icons/tfi";
import './Form.css';

const Form = (props) => {
    // const[tarefa, setTarefa] = useState("")
    const{onList, setNovaTarefa, novaTarefa} = props;

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
        <button className="btn-tarefa"><TfiPlus /></button>
    </form>
     
    )
}

export default Form;