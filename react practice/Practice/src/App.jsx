import { useEffect, useState } from "react";

function App() {

  
  const arrays = [7, 2, 9, 4]


  const theArray = arrays.reduce((total, item) =>  total + item );

console.log(theArray);



  
  



  return (
    <>
      <div>
        <h1>Products</h1>
        <div>
          {/* <div>
            {filterArr.map((item, idx) => (
          <div key={idx}>
            <p>{item.name} - ${item.price} - {item.inStock === true ? "True" : "False"}</p>
          </div>
        ))}
      </div>
          <button onClick={sort}>Sort</button> */}
        </div>
      </div>
    </>
  );
}


export default App;
