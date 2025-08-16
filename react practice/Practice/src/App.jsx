import { useEffect, useState } from "react";

function App() {


const [second,setSecond] = useState(0)
const [minute,setMinute] = useState(0)
const [hour,setHour] = useState(0)




const upSecond = () => {setSecond(second + 1)}
const upMinute = () => {setMinute(minute + 1)}
const upHour = () => {setHour(hour + 1)}


setTimeout(() => {
  upSecond()
}, 1000);

setTimeout(() => {
  upMinute()
}, 60000);
setTimeout(() => {
  upHour()
}, 600000);




const [timer,setTimer] = useState(second + "" + minute + "" + hour)


  return (
    <>
      <div>
        <h1>User</h1>
        <div>
          <p>{timer}</p>
         </div>
      </div>
    </>
  );
}


export default App;
