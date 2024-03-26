import ListedCards from "../components/ListedCards";
const ListedBooks = () => {
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
        <a role="tab" className=" tab tab-active">
          Read Books
        </a>
        <a role="tab" className="tab">
         Wishlist Books
        </a>
      
      </div>

      {/* 3 */}

      <div className="mt-8">
        <ListedCards></ListedCards>
      </div>
    </div>
  );
};

export default ListedBooks;
