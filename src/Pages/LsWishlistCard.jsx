import { useEffect, useState } from 'react';
import { getWishList } from '../Utils/localStorage';
import WishCards from './WishCards';

const LsWishlistCard = () => {
  const [wishlistCards,setWishlistCards]=useState([]);
  useEffect(()=>{
    const storedWishlistCard = getWishList()
    setWishlistCards(storedWishlistCard)
  },[])
  console.log(wishlistCards);
  return (
    <div>
         {
        wishlistCards.map(card => (
          <WishCards  key={card.id} card={card}></WishCards>
        ))
      }
    </div>
  );
};

export default LsWishlistCard;