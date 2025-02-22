import React, { useState } from "react";

const InputToDo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <>
            <div>
                <h1>Input To Do</h1>
                <form onSubmit={onSubmitForm}>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                    <button>Add</button>
                </form>
            </div>
        </>
    )
};


export default InputToDo;