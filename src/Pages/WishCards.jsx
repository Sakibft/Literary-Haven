import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";

const WishCards = ({card}) => {
  const {image,bookName,author,category,tags,totalPages,publisher,yearOfPublishing,rating} = card;
  return (
    <div>
        <div className="card md:card-side border p-4 border-red-500">
    <div className="p-12 bg-[#1313130D] rounded-lg">
      <figure>
        <img className="h-40" src={image} alt="Movie" />
      </figure>
    </div>
    <div className="pl-8 mt-2">
      <h1 className="font-bold text-2xl playfair">
       {bookName}
      </h1>
      <p className=" playfair mt-2 mb-1 text-lg ">By :  {author}</p>
      <div className="flex gap-3 mt-3">
        <p>Tag</p>
        <button className="rounded-full px-2 bg-[#23BE0A0D] text-[#23BE0A] border-none    ">
        {tags[0]}
        </button>
        <button className=" rounded-full px-4 bg-[#23BE0A0D] text-[#23BE0A] border-none   ">
           {tags[1]}
        </button>
        <h1 className="flex gap-2 playfair">
          {" "}
          <CiLocationOn className="mt-1 text-lg" /> Year of Publishing :
           {yearOfPublishing}
        </h1>
      </div>
      <div className="mt-4 flex gap-8">
        <h1 className="flex gap-2 playfair">
          {" "}
          <CgProfile className="text-lg mt-1" /> Publisher :  {publisher}
        </h1>
        <h1 className="flex gap-2 playfair">
          {" "}
          <IoBookOutline className="mt-1" /> Page :  {totalPages}
        </h1>
      </div>
      <hr className="lg:w-[1000px] mt-4 border-dashed border-gray-400  " />
      <div className="mt-4 flex gap-4">
        <button className=" rounded-full px-4 py-2 bg-[#328EFF0D] text-[#328EFF] border-none   ">
          Category:  {category}
        </button>
        <button className=" rounded-full px-4 py-2 bg-[#FFAC330D] text-[#FFAC33] border-none   ">
          Rating :  {rating}
        </button>
        <button className=" rounded-full px-4 py-2 bg-[#23BE0A] text-white border-none   ">
          View Details
        </button>
      </div>
    </div>
  </div>
    </div>
  );
};

export default WishCards;