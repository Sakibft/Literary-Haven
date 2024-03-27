import { Link, Outlet } from "react-router-dom";

import { useState } from "react";
 
 
import ListedCards from "../components/ListedCards";
import LsWishlistCard from "./LsWishlistCard";
const ListedBooks = () => {
  const [tabindex,setTabIndex] = useState(0)
  return (
    <div>
      <div className="bg-[#1313130D] rounded-md">
        <h1 className="font-semibold text-xl p-2 text-center">
          <span className="text-2xl text-[#23BE0A]">~</span> Discover new
          horizons, pick up a book !
        </h1>
      </div>
      {/* 1 */}
      <div className="flex justify-center mt-5">
        <select className="rounded-md p-2">
          <option disabled selected>
            SortBy
          </option>
          <option>Rating</option>
          <option>Number</option>
          <option>Pages</option>
          <option>Published</option>
        </select>
      </div>
      {/* 2 */}
    
      <div role="tablist" className=" tabs tabs-lifted w-96 mt-4 mb-2">
        <Link 
        to=''
        onClick={()=>setTabIndex(0)}
         role="tab" className={` ${tabindex === 0 ? ' tab tab-active ': 'tab'} `}>
          Read Books
        </Link>
        <Link 
        to={`wishlist`}
        onClick={()=>setTabIndex(1)}
        role="tab" className={` ${tabindex === 1 ? ' tab tab-active ': 'tab'} `}>
         Wishlist Books
        </Link>
     
      </div>
      <Outlet></Outlet>
      {/* <div>
       <ListedCards></ListedCards>
      </div>
      <div>
        <h1 className="text-center mt-10">Wishlist</h1>
        <LsWishlistCard></LsWishlistCard>
      </div> */}
    </div>
  );
};

export default ListedBooks;
