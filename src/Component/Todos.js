import React,{useState} from'react'
import { Button } from 'react-bootstrap';

const Todos=()=>{

    const [todo,setTodo]=useState([])
    const [list,setList]=useState("")
    const addTodo=()=>{
        const idlist={
            id:todo.length+1,
            name:list
        }
        setTodo([...todo,idlist])
    }

    const delTodo=(val)=>{
        setTodo(todo.filter((task)=>task!==val))
    }

    return(
        <React.Fragment>
            <input type="text" onChange={e=>setList(e.target.value)} />
            <Button variant="primary" onClick={addTodo}>+</Button>
            
            {todo.map((task)=>{
                return (<div>
                    <center>
                    <table border="1px" width="50%">
                    <tr>
                        <td align='right'width="350px">{task.name}</td>
                        <td align='left'><button onClick={()=>delTodo(task)}>-</button></td>
                    </tr>
                    </table>
                    </center>
                    </div>)
            })}
        </React.Fragment>
    )
}

export default Todos