import React from 'react';

const Todoitem = ({setTodos},{todos}) => {
    //todos

    const deletehandler = () =>{
        setTodos(todos.filter((el) => el.id!== todos.id));
    }


    return(    
    <div>
        <div className="listcontainer">
        <div className="todolistelement">
            <div className="todo-text">{todos.text}</div>
       
        <div className="button-item">
            <button className="check-button"><i className="fas fa-check"></i></button>
            <button className="trash-button" onclick={deletehandler}><i className="fas fa-trash"></i></button>
        </div>
       
        </div>
    </div>
    </div>
    );
};

export default Todoitem;