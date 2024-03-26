import { GoStar } from "react-icons/go";

const SingleCart = ({ card }) => {
  const {
    bookId,
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = card;
  console.log(tags);
  return (
    <div className="card w-96 border p-4 ">
      <div className="p-5  bg-[#F3F3F3] rounded-md">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
      </div>
      <div>
        <button className="rounded-full px-3 py-1 bg-[#23BE0A0D] text-[#23BE0A] border-none  mt-6 ">
          {tags[0]}
        </button>
        <button className=" rounded-full px-3 py-1  bg-[#23BE0A0D] text-[#23BE0A] border-none  mt-6 ml-4 ">
          {tags[1]}
        </button>

        <h2 className="card-title mt-4">{bookName} </h2>
        <p className="mt-2 mb-3">By :{author}</p>
        <hr className="border-dashed border-gray-300" />
        <div className="flex justify-between mt-2">
          <h1> {category} </h1>
          <h1 className="flex gap-2">
            {rating}
            <GoStar className="mt-1" />{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
