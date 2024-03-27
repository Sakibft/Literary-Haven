import { useParams } from 'react-router-dom';
import useAllCardData from '../Hooks/useAllCardData';
 
import { useEffect, useState } from 'react';

const ViewDetails = () => {
  const [card,setCard]=useState({});
  const {data,loading} = useAllCardData();
  const {id}= useParams();
  useEffect(()=>{
    const singleCARD = data.find(item=> item.bookId == id);
    if(singleCARD){
      setCard(singleCARD);
    }
  },[data,id]); 
  const {image, bookName, author, category, review, tags , totalPages, publisher, yearOfPublishing, rating, } = card;
  return (
   
    <div>
        <div className='mt-[100px]'>
      <div style={{border:'1px solid gray'}} className="card lg:card-side bg-base-100 shadow-xl lg:w-full w-96 mb-8 lg:h-[600px]">
        <div className="lg:w-1/2 w-96 bg-[#1313130D] rounded-xl">
          <figure className="mt-20">
          <img className='w-1/2'  src={image}   alt="" />
          </figure>
        </div>
        <div className="lg:pl-6 lg:w-1/2 w-96">
          <h1 className="playfair text-xl font-semibold ">
         {bookName}
          </h1>
          <p className="mt-2 text-base playfair">By : {author}  </p>
          <hr className="mt-3 lg:w-[630px]" />
          <h1 className="playfair mt-2">{category}</h1>
          <hr className="mt-3 lg:w-[630px]" />
          <p className="mt-4 ">
            <span className="font-semibold playfair">Review: </span>
            <span className="playfair text-sm text-gray-600">
             {review}
            </span>
          </p>
          <div className="mt-10 flex">
            <div className="flex gap-3">
              <p>Tag</p>
              <button className="rounded-full px-2 bg-[#23BE0A0D] text-[#23BE0A] border-none">
              #Romance
              </button>
              <button className=" rounded-full px-4 bg-[#23BE0A0D] text-[#23BE0A] border-none   ">
               #haha
              </button>
            </div>
          </div>
          <hr className="mt-6 mb-6 lg:w-[630px]" />
          <div className="flex gap-10">
            <div className="flex flex-col      gap-y-4">
              <div>
                <h1 className="text-gray-600 playfair">Number of Pages : </h1>
              </div>
              <div>
                <h1 className="text-gray-600 playfair">Publisher : </h1>
              </div>
              <div>
                <h1 className="text-gray-600 playfair">
                  Year of Publishing :{" "}
                </h1>
              </div>
              <div>
                <h1 className="text-gray-600 playfair">Rating : </h1>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col      gap-y-4">
              <div>
              <h1 className="playfair font-semibold">{totalPages}</h1>
              </div>
              <div>
              <h1 className="playfair font-semibold">{publisher}</h1>
              </div>
              <div>
              <h1 className="playfair font-semibold">{yearOfPublishing}</h1>
              </div>
              <div>
              <h1 className="playfair font-semibold">{rating}</h1>
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-4 mb-4">
          <button   className=" border bg-white rounded-md p-2 hover:bg-gray-300  ">Read</button>
          <button   className=" border-none   rounded-md p-2 bg-[#50B1C9] text-white ">Wishlist</button>
          
        
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewDetails;