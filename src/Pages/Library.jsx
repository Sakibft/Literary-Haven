 
import useAllCardData from "../Hooks/useAllCardData";
import Librarryes from "../components/Librarryes";
import { useEffect, useState } from "react";

const Library = () => {
  const reat = 4.5;
  const { data, loading } = useAllCardData();
 console.log(data.length);
  const [rating,setRating] = useState([]);
 useEffect(()=>{
  const rating = data?.filter(card=>card.rating > reat );
  if(rating){
    setRating(rating)
  }
 },[data]);
 console.log(rating);
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-3xl font-semibold text-center playfair">Only the best is good enough</h1>
        <p className="text-center text-sm playfair mt-3">As children shape their own worlds with LeGo bricks, we play our part in <br />having a positive impact on the world they line in <br />tody and will inheri in the future.</p>
        
      </div>
      <div className="grid grid-cols-3 gap-3 mt-7">
        {rating.map((card) => (
          <Librarryes key={card.id} card={card}></Librarryes>
        ))}
      </div>
    </div>
  );
};

export default Library;
