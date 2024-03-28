import { useEffect, useState } from "react";
import { getReadItem } from "../Utils/localStorage";
import LSReadCard from "../Pages/LSReadCard";
import { RiArrowDropDownLine } from "react-icons/ri";

 

const ListedCards = () => {
  const [ReadCards,setReadCards]= useState([]);
  const [sortBook,setSortBook] = useState([]);
  const handleSortBook = sort =>{
    if(sort === 'all'){
      setReadCards(ReadCards);
    }
    else if(sort === 'rating'){
      const sortRating = [...ReadCards].sort((a,b)=>b.rating - a.rating);
      setSortBook(sortRating)
    }
    else if(sort === 'page'){
      const sortPage = [...ReadCards].sort((a,b)=>b.totalPages - a.totalPages);
      setSortBook(sortPage) 
    }
    else if(sort === 'year'){
      const sortYear = [...ReadCards].sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing);
      setSortBook(sortYear)
    }
    else if(sort === 'fiction'){
      const sorFiction = [...ReadCards].filter(book=> book.category === 'Fiction')
    setSortBook(sorFiction)
    }
    
  }
  useEffect(()=>{
    const storedReadCard = getReadItem()
    setReadCards(storedReadCard)
    setSortBook(storedReadCard)
  },[])
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
            <li onClick={()=>handleSortBook('fiction')}>
              <a>Fiction</a>
            </li>
          </ul>
        </details>
      </div>
     <div>
     {
        sortBook.map(card => (
          <LSReadCard key={card.id} card={card}></LSReadCard>
        ))
      }
     </div>
    </div>
  );
};

export default ListedCards;