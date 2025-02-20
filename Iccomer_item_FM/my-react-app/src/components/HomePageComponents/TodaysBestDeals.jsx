import React, { useState } from 'react'
import CardItemHomePage from '../CardItemHomePage';

const TodaysBestDeals = () => {
    
    const [selectedIndex, setSelectedIndex] = useState(null);  // שומרים את האינדקס של הכפתור שנלחץ

    const arr = [
        { title: "Gadgets",value: "Gadgets"},
        { title: "Fashion", value: "Fashion"},
        { title: "Toys", value: "Toys"},
        { title: "Education", value: "Education"},
        { title: "Beauty", value: "Beauty"},
        { title: "Fitness", value: "Fitness"},
        { title: "Furniture", value: "Furniture"},
        { title: "Sneakers", value: "Sneakers"},
    ]

    function handleClick(index) {
        setSelectedIndex(index);  
    }

    return (
        <div className='p-10 flex flex-col gap-5'>
            <h1 className='text-3xl font-bold'>Todays Best Deals for you!</h1>
            <div className='flex gap-3'>
                {arr.map((item, index) => (
                    <button
                        key={index}
                        value={item.value}
                        onClick={() => handleClick(index)}  // מעבירים את האינדקס של הכפתור
                        className={`border rounded-full p-3 font-semibold 
                            ${selectedIndex === index ? 'bg-green-900 text-white' : 'bg-white text-black'}`}  // בודקים אם זה הכפתור שנבחר
                    >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default TodaysBestDeals

