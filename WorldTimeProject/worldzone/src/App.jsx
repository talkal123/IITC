import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState(" ");
  const [coinsData, setCoinsData] = useState([])

  function handleClick() {
    console.log(inputValue);
  }

  const Change = (event) => {
    setInputValue(event.target.value);
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/list")
      setCoinsData(data)
      console.log(coinsData);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className=" flex items-center justify-center">
      <div className="border w-[500px] h-[500px]">
        <div className="h-[20%] border flex items-center justify-center gap-2">
          <input
            onChange={Change}
            type="text"
            className="border border-black p-1"
            value={inputValue}
          />
          <button
            onClick={handleClick}
            className="border p-1 rounded-lg bg-gray-200"
          >
            click
          </button>
        </div>
        <div className="h-[80%] p-2 flex items-center justify-center">
          <div className="border border-black flex flex-col">
            {setCoinsData ? (
              <>
                  {coinsData.map((coin))}
                  <div  key={coin.id} className="flex gap-2">
                  <p>{coin.id}</p>
                  <p>{coin.name}</p>
                </div>
                
              </>
            ) : (
              <div>Loading data...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
