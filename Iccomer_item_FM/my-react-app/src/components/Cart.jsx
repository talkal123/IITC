import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"

const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0)

    const handlePrice = () => {
        let ans = 0;
        cart.forEach((item) => {
            ans += item.amount * item.price;
        });
        setPrice(ans);
    };

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    };

    useEffect(() => {
        handlePrice();
    }, [cart]);
    return (
        <article className='border w-[300px] mx-auto rounded-lg'>
            {
                cart.map((item) => (
                    <div className='border-b p-4' key={item.id}>
                        <div className='flex items-center space-x-2'>
                            <img src={item.images[0]} alt={item.title} className="w-16 h-16 object-cover" />
                            <p className='font-semibold'>{item.title}</p>
                        </div>
                        <div className='flex items-center justify-between my-2'>
                            <button onClick={()=>handleChange(item, +1)} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition">
                                +
                            </button>
                            <button className="px-4 py-2 border ">
                                {item.amount}
                            </button>
                            
                            <button onClick={()=>handleChange(item, -1)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition">
                                -
                            </button>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-lg font-bold text-green-700'>{item.price} $</span>
                            <button  onClick={() => handleRemove(item.id)} className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition">
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            <div className='p-4'>
                <span>Total Price of your Cart: </span>
                <span className='font-bold text-green-700'>{Math.round(price)} $</span>
            </div>
        </article>
    )
}

export default Cart
