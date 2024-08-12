import React, { useState } from "react";

const TodoApp = () => {
    const [task,setTask] = useState("");
    const [todos,setTodos] = useState([]);
    const changeHandler = e =>{
        setTask(e.target.value)
    }
    const submitHandler = e =>{
        e.preventDefault();
        const newTodos = [...todos,task];
        setTodos(newTodos);
        setTask("");
    }
    return (
        <div>
            <center>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Todo Management Application</h5>
                        <form>
                            <input type="text" name="task" />&nbsp;&nbsp;
                            <input type="submit" value="Add" name="Add" />
                        </form>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default TodoApp