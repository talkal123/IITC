import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

function App() {
 const [tasks,setTasks] = useState([])
 const [taskValue,setTaskValue] = useState("")
 const [updateValue,setUpdateValue] = useState("")
 const [objectToChange,setObjectToChange] = useState(null)
 const [loading, setLoading] = useState(true)
 


useEffect(() => {
  axios.get("http://localhost:3000/tasks")
    .then((response) => {
      setTasks(response.data);
      console.log(response.data);
      setLoading(false) 
    })
    .catch((error) => console.error(error));
    setLoading(false);

}, []);


const addObj = () => {
  const newTask = {task:taskValue}
  axios.post("http://localhost:3000/task" , newTask)
  .then((response) => {
      setTasks([...tasks, response.data]);
      console.log(response.data); 
    })
    .catch((error) => console.error(error));
}


const deleteTask = (id) => {
  const deleteObj = tasks.filter(t => t.id !== id)
  
  axios.delete(`http://localhost:3000/task/${id}`)
  .then((response) => {
      setTasks(deleteObj)
      console.log(response.data); 
    })
    .catch((error) => console.error(error));
}


const sendKeysToInput = (task) => {
  setUpdateValue(task.task)
  setObjectToChange(task.id)
}


const taskChange = () => {
  const findTask = tasks.find(t => t.id === objectToChange)
  if (findTask) {
    const update = tasks.map(t => t.id === objectToChange ? {...t , task:updateValue} : t)
    axios.put(`http://localhost:3000/task/${objectToChange}`, {task:updateValue})
    .then((response) => {
      setTasks(update)
      console.log(response.data); 
    })
    .catch((error) => console.error(error));
    
  }
  setUpdateValue("")
  setObjectToChange(null) 
}


console.log(objectToChange);



  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
  <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>Tasks</h1>

  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
    {loading ? (
      <p>Loading...</p>
    ): (tasks?.map((task) => (
      <div key={task.id} style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#fff"
      }}>
        <div>
          <p style={{ fontWeight: "bold", margin: 0 }}>{task.task}</p>
          <p style={{ fontSize: "0.8rem", color: "#555", margin: 0 }}>ID: {task.id}</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => sendKeysToInput(task)}
            style={{
              backgroundColor: "#3498db",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "6px 12px",
              cursor: "pointer"
            }}
          >
            Edit
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            style={{
              backgroundColor: "#e74c3c",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "6px 12px",
              cursor: "pointer"
            }}
          >
            Delete
          </button>
        </div>
      </div>
    )))}
    
  </div>

  <div style={{ marginTop: "30px", display: "flex", gap: "10px" }}>
    <input
      type="text"
      value={taskValue}
      onChange={(e) => setTaskValue(e.target.value)}
      placeholder="New task..."
      style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
    />
    <button
      onClick={addObj}
      style={{
        backgroundColor: "#2ecc71",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "8px 16px",
        cursor: "pointer"
      }}
    >
      Add
    </button>
  </div>

  {objectToChange && (
    <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
      <input
        type="text"
        value={updateValue}
        onChange={(e) => setUpdateValue(e.target.value)}
        style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <button
        onClick={taskChange}
        style={{
          backgroundColor: "#3498db",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          padding: "8px 16px",
          cursor: "pointer"
        }}
      >
        Save
      </button>
      <button
        onClick={() => { setObjectToChange(null); setUpdateValue(""); }}
        style={{
          backgroundColor: "#bdc3c7",
          color: "#2c3e50",
          border: "none",
          borderRadius: "5px",
          padding: "8px 16px",
          cursor: "pointer"
        }}
      >
        Cancel
      </button>
    </div>
  )}
</div>

  );
}

export default App;









// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios"

// function App() {
//  const [tasks,setTasks] = useState([])
//  const [taskValue,setTaskValue] = useState("")
//  const [updateValue,setUpdateValue] = useState("")
//  const [objectToChange,setObjectToChange] = useState(null)


// useEffect(() => {
//   axios.get("http://localhost:3000/tasks")
//     .then((response) => {
//       setTasks(response.data);
//       console.log(response.data); 
//     })
//     .catch((error) => console.error(error));
// }, []);


// const addObj = () => {
//   const newTask = {task:taskValue}
//   axios.post("http://localhost:3000/task" , newTask)
//   .then((response) => {
//       setTasks(prev => [...prev, response.data]);
//       console.log(response.data); 
//     })
//     .catch((error) => console.error(error));
// }


// const deleteTask = (id) => {
//   const deleteObj = tasks.filter(t => t.id !== id)
  
//   axios.delete(http://localhost:3000/task/${id})
//   .then((response) => {
//       setTasks(deleteObj)
//       console.log(response.data); 
//     })
//     .catch((error) => console.error(error));
// }


// const sendKeysToInput = (task) => {
//   setUpdateValue(task.task)
//   setObjectToChange(task.id)
// }


// const taskChange = () => {
//   const findTask = tasks.find(t => t.id === objectToChange)
//   if (findTask) {
//     const update = tasks.map(t => t.id === objectToChange ? {...t , task:updateValue} : t)
//     axios.put(http://localhost:3000/task/${objectToChange}, {task:updateValue})
//     .then((response) => {
//       setTasks(update)
//       console.log(response.data); 
//     })
//     .catch((error) => console.error(error));
    
//   }
//   setUpdateValue("")
//   setObjectToChange(null) 
// }


// console.log(objectToChange);



//   return (
//     <div>
//       <h1>Tasks:</h1>
//       <div>
//       {tasks?.map((task,index) => (
//         <div style={{display:"flex", gap:"5px"}} key={index}>
//           <p>{task.id}</p>
//           <p>{task.task}</p>
//           <button onClick={() => deleteTask(task.id)}>Delete task</button>
//           <button onClick={() => {setObjectToChange(task.id); sendKeysToInput(task)}}>Edit</button>
//         </div>
//       ))}
//     </div>
//       <h2>Add new task</h2>
//       <div style={{display:"flex", gap:"5px"}}>
//       <input onChange={(e) => setTaskValue(e.target.value)} type="text" value={taskValue} />
//       <button onClick={addObj}>Add</button>
//     </div>
//     <h2>Edit Task</h2>
//     <div style={{display:"flex", gap:"5px"}}>
//       <input onChange={(e) => setUpdateValue(e.target.value)} type="text" value={updateValue} />
//       <button onClick={taskChange}>Edit</button>   
//     </div>
//     </div>
//   );
// }

// export default App;

