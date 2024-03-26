const ListedBooks = () => {
  return (
    <div>
      <div className="bg-[#1313130D] rounded-md">
        <h1 className="font-semibold text-xl p-2 text-center">Books</h1>
      </div>
      <div className="flex justify-center mt-5">
        <select className="rounded-md p-2">
        <option disabled selected>SortBy</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
    </div>
  );
};

export default ListedBooks;
