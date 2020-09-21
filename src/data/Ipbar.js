import React,{useEffect,useState} from 'react';
import Todoitem from './Todoitem';

// function Ipbar() {
//  <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"></link> 
    const Ipbar = () =>{
    const[inputv,setInputv]=useState("");
    // const[todos,setTodos]=useState([{text:"jerry",completed:"false",id:"1"},{text:"joanna",completed:"false" ,id:"2"}]);
    const[todos,setTodos]=useState([]);

    const inputtexthandler = (e) =>{
        setInputv(e.target.value);
        // console.log(e.target.value);
        console.log(todos+" food is good");
        console.log(todos);

    }

    const submithandler = (e) =>{
            e.preventDefault();
        setTodos(
            [...todos,
            {text:inputv,completed:false,id: Math.random()*100}
            ]);
          
            console.log("hurray");
         
        setInputv("");

        }



    return(
        <div className="mainlayout">
            <div className="mainlist">
                    <form  className="form-todo">
                        <input value={inputv} onChange={inputtexthandler} type="text" className="input-todo"/>
                        <button type="submit" onClick={submithandler} className="submit-button">
                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    
                        </button>
                    </form>
                    <div className="formdata">
                    {/* {todos.map(todo =>(
                        <Todoitem todos={todo}/>
                    ))} */}

                    {todos.map( tt => (
                                          <Todoitem text={tt} setTodos={tt.setTodos}/>

                    )
                    )};
                    {/* <Todoitem />
                    <Todoitem /> */}
                    
                    </div>
        
            </div>
    </div>
    );
};

export default Ipbar;