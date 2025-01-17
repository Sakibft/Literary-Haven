import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const ListedBooks = () => {
  const [tabindex, setTabIndex] = useState(0);
  return (
    <div className="p-2">
      <div className="bg-[#1313130D] rounded-md mt-3">
        <h1 className="font-semibold text-xl p-4 text-center">
          <span className="text-2xl text-[#23BE0A]">~</span> Discover new
          horizons, pick up a book !
        </h1>
      </div>
      <div role="tablist" className=" tabs tabs-lifted w-96 mt-4 mb-2 ">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          role="tab"
          className={` ${
            tabindex === 0 ? " tab tab-active font-semibold playfair " : "tab"
          } `}
        >
          Read Books
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIndex(1)}
          role="tab"
          className={` ${
            tabindex === 1 ? " tab tab-active font-semibold playfair " : "tab"
          } `}
        >
          Wishlist Books
        </Link>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
