import React, { useState } from "react";

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
        <input type="text" placeholder="Digite sua tarefa" onChange={changeHandle} value={novaTarefa}></input>
        <button>Enviar</button>
    </form>
     
    )
}

export default Form;