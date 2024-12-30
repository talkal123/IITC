import { FC, useEffect, useState } from 'react';
import axios from "axios";
import image from '../assets/gourmet.jpg'
import SearchComponent from './searchComponent';
import { MdFavoriteBorder } from "react-icons/md";




interface CardComponentProps {
    search: string;
  }

const CardComponent : FC<CardComponentProps> = ({search}) => {
  const [business, setBusiness] = useState<any[]>([]);
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited); 
  };

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/business');
        console.log(response.data); 
        setBusiness(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error); 
      }
    };

    fetchBusiness();
  }, []); 

  return (
    <div className="border p-1 h-[600px]  ">
      {business.filter((item) => {
        return search.toLowerCase() === '' ? true : item.name.toLowerCase().includes(search.toLowerCase())
      }).map((item, index) => (
        <div key={index} className="border mb-4 p-4 "> 

          <div className="border flex h-[150px]">
            <div className="border w-[50%]">
              <div className="border h-[50%]"><h1>Name: {item.name}</h1></div>
              <div className="border h-[50%]"><h1>Category: {item.category}</h1></div>
            </div>
            <div className="border w-[50%] flex justify-center items-center">
              <div className="border rounded-full w-[100px] h-[100px]">
                <img src={item.image} alt="" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>

          <div className="border flex h-[300px]">
            <div className="border w-[50%]">{item.description}</div>
            <div className="border w-[50%]">
              <div className="border h-[20%] pointer flex justify-end items-center"><span className='cursor-pointer'><MdFavoriteBorder onClick={toggleFavorite} color={isFavorited ? 'red' : 'black'} size={30}/></span></div>
              <div className="border h-[80%] overflow-auto	">
                <div>Reviews:</div>
                {item.reviews && item.reviews.map((review, index) => (
                  <div key={index}>
                    <p>User: <span className='text-slate-400 text-xs'>{review.userId}</span></p>
                    <p>Comment: <span className='text-slate-400 text-xs'>{review.comment}</span></p>
                    <p>Created At: <span className='text-slate-400 text-xs	'>{new Date(review.createdAt).toLocaleDateString()}</ span></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;


