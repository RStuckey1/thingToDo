import React, { useEffect, useState } from "react";
import EditToDos from "./EditToDos";

const ListToDos = () => {

    const [todos, setTodos] = useState([]);

    //delete function//
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    },[]);

    
    return (
        <>
        <div>
            {" "}           
  <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        
      </tr> */}
        {todos.map(todo => (
            <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>
                    <button><EditToDos/></button>
                </td>
                <td>
                    <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                </td>
            </tr>
        ))}
    </tbody>
  </table>
</div>
        </>
    );
};

export default ListToDos;
