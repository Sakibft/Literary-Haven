import { useEffect, useState } from 'react';
import { getWishList } from '../Utils/localStorage';
import WishCards from './WishCards';
import { RiArrowDropDownLine } from 'react-icons/ri';

const LsWishlistCard = () => {
  const [wishlistCards,setWishlistCards]=useState([]);
  const [sortBook,setSortBook]=useState([]);
  const handleSortBook = sort =>{
    if(sort === 'all'){
      setSortBook(wishlistCards);
    }
    else if(sort === 'rating'){
      const sortRating = [...wishlistCards].sort((a,b)=>b.rating - a.rating);
      setSortBook(sortRating)
    }
    else if(sort === 'page'){
      const sortPage = [...wishlistCards].sort((a,b)=>b.totalPages - a.totalPages);
      setSortBook(sortPage) 
    }
    else if(sort === 'year'){
      const sortYear = [...wishlistCards].sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing);
      setSortBook(sortYear)
    }
  }

  useEffect(()=>{
    const storedWishlistCard = getWishList()
    setWishlistCards(storedWishlistCard)
    setSortBook(storedWishlistCard)
  },[])
  console.log(wishlistCards);
  return (
    <div>
       <div className="flex  justify-start mt-4 ">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white">Sort By <RiArrowDropDownLine className="text-3xl" /> </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          
          <li onClick={()=>handleSortBook('rating')}>
              <a>Rating</a>
            </li>
            <li onClick={()=>handleSortBook('page')}>
              <a>Number of pages </a>
            </li>
            <li onClick={()=>handleSortBook('year')}>
              <a>Publisher year</a>
            </li>
            <li onClick={()=>handleSortBook('Fiction')}>
              <a>Fiction</a>
            </li>
          </ul>
        </details>
      </div>
         {
        sortBook.map(card => (
          <WishCards  key={card.id} card={card}></WishCards>
        ))
      }
    </div>
  );
};

export default LsWishlistCard;