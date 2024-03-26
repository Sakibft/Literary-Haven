import { useEffect, useState } from "react";
import { getReadItem } from "../Utils/localStorage";
import LSReadCard from "../Pages/LSReadCard";

 

const ListedCards = () => {
  const [Readcards,setReadCards]= useState([]);
  useEffect(()=>{
    const storedReadCard = getReadItem()
    setReadCards(storedReadCard)
  },[])
  return (
    <div>
      {/* read */}
     <div>
     {
        Readcards.map(card => (
          <LSReadCard key={card.id} card={card}></LSReadCard>
        ))
      }
     </div>
     {/* wishlist */}
     <div>
      
     </div>

    </div>
  );
};

export default ListedCards;