import { useState } from "react";

function Todo() {
  const [valueFirstName, setValueFirstName] = useState("");
  const [valueLastName, setValueLastName] = useState("");
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const [arrUsers, setArrUsers] = useState([]);
  const [text, setText] = useState("Edit User");
  const [userChange, setUserChange] = useState(null)



  const handleClick = () => {
    const newObject = {
      ...user,
      firstName: valueFirstName,
      lastName: valueLastName,
    };
    if (
      arrUsers.some(
        (user) =>
          user.firstName === newObject.firstName &&
          user.lastName === newObject.lastName
      )
    ) {
      alert("no");
      return;
    }

    setArrUsers([...arrUsers, newObject]);
    setValueFirstName("");
    setValueLastName("");
    setUser(newObject);
  };

  const handleDelete = (item) => {
    setArrUsers(
      arrUsers.filter(
        (user) =>
          user.firstName !== item.firstName || user.lastName !== item.lastName
      )
    );
  };

  const handleChange = (item) => {
    setValueFirstName(item.firstName);
    setValueLastName(item.lastName);
    if (text === "Edit User") {
      setText("Save Changes");
    } else {
      setText("Edit User");
      setValueFirstName("");
      setValueLastName("");
    }
  };

  console.log(user);
  console.log(arrUsers);

  return (
    <div>
      <h1>Users</h1>
      <h1>Number Of Users: {arrUsers.length}</h1>
      <p>firstName</p>
      <input
        type="text"
        value={valueFirstName}
        onChange={(e) => setValueFirstName(e.target.value)}
      />
      <p>lastName</p>
      <input
        type="text"
        value={valueLastName}
        onChange={(e) => setValueLastName(e.target.value)}
      />
      <div style={{ display: "flex", gap: "5px", marginTop:"5px" }}>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => setArrUsers([])}>Clear Form</button>
      </div>
      <div>
        {arrUsers.length === 0 ? (
          <p>No Users</p>
        ) : (
          <div>
            {arrUsers.map((item, index) => {
              return (
                <div key={index}>
                  <p>{item.firstName}</p>
                  <p>{item.lastName}</p>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <button onClick={() => handleDelete(item)}>X</button>
                    <button onClick={() => handleChange(item)}>{text}</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;

// function Todo() {
//   const [value, setValue] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const handleClick = () => {
//     const newTask = { task: value };
//     setTasks([...tasks, newTask]);
//   };

//   const handleDelete = (task) => {
//     const updatedTasks = tasks.filter(t => t.task !== task);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div>
//       <h2>To-Do List</h2>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button onClick={handleClick}>Click To Add</button>

//       <h1>The Tasks</h1>
//       {tasks.map((item, index) => (
//         <div key={index}>
//           <p>{item.task}</p>
//           <button onClick={() => handleDelete(item.task)}>X</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Todo;

// const users = [
//   { name: "Dan", city: "Jerusalem" },
//   { name: "Eli", city: "Tel Aviv" },
// ];

// let result = users.some(user => user.city === "Tel Aviv")

// const users2 = [
//   { name: "John", age: 22 },
//   { name: "Jane", age: 30 },
//   { name: "Tom", age: 17 },
// ];

// // להביא רק את מי שבן 18
// let result2 = users2.filter(user => user.age >= 18)

// // לבדוק אם כולם בני 21
// let result3 = users2.every(user => user.age >= 21)

// // למצוא את השם תום ואם יש זה יחזיר נכון ואם לא אז לא נכון
// let result4 = users2.find(user => user.name === "Tom")

// //לבדוק אם יש שחקן בשם רונאלדו
// const soccerPlayers = ["Ronaldo","Messi","Drogba"]

// let result5 = soccerPlayers.includes("Ronaldo")

// // להוסיף לאובייקט city:"haifa"
// const user = { name: "Tom", age: 20 };

// const newUser = {...user, city:"haifa"}

// // לשנות גיל
// const changeUser = {...user, age:21}

// //  כתוב פונקציה שבודקת האם יש לפחות משתמש אחד שמחובר (online: true).
// const usersOnline = [
//   { name: "Alice", online: false },
//   { name: "Bob", online: false },
//   { name: "Charlie", online: true },
// ];

// const result6 = usersOnline.some(user => user.online === true)

// // כתוב פונקציה שמחזירה רק את הפוסטים שפורסמו ויש להם יותר מ-1000 צפיות.

// const posts = [
//   { title: "Hello World", published: true, views: 1500 },
//   { title: "Draft Post", published: false, views: 0 },
//   { title: "React Tips", published: true, views: 900 },
// ];

// const result7 = posts.filter(post => post.views >= 1000)

// //מערך של משתמשים באתר עם גיל, כתוב פונקציה שבודקת האם כל המשתמשים הם מעל גיל  18.
// const adults = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 17 },
// ];

// const result8 = adults.every(adult => adult.age >= 18)

// //כתוב פונקציה שמקבלת id ומחזירה את המוצר המתאים.
// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Phone", price: 500 },
//   { id: 3, name: "Tablet", price: 300 },
// ];

// const result9 = products.find(product => product.id === 2)

// // כתוב פונקציה שבודקת אם שם משתמש מסוים כבר קיים ברשימה.

// const usernames = ["alice", "bob", "charlie"];

// const result10 = usernames.includes("bob")

// // כתוב פונקציה שמקבלת אובייקט משתמש וגיל חדש, ומחזירה אובייקט חדש עם הגיל המעודכן, בלי לשנות את האובייקט המקורי.
// const userName = { name: "Alice", age: 25 };

// const result11 = {...userName, age: 26}

// const userNameEmpty = { name: "", age: "" };

// const userFull = {...userNameEmpty, name:"tal", age:"18"}

// console.log(userFull);
