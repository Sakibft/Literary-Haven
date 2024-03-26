import { GoStar } from "react-icons/go";
const Books = () => {
  return (
    <div className="mt-10 mb-20 ">
      <h1 className="font-bold text-4xl text-center">Books</h1>
      <div className="mt-5 grid lg:grid-cols-3">
      <div className="card w-96 bg-base-100 shadow-md border p-4 ">
         <div className="p-5  bg-[#F3F3F3] rounded-md">
         <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
         </div>
          <div>
           <button className="rounded-full p-1 bg-[#23BE0A0D] text-[#23BE0A] border-none  mt-6 ">Young Adult</button>
           <button className=" rounded-full p-2 bg-[#23BE0A0D] text-[#23BE0A] border-none  mt-6 ">Identity</button>

            <h2 className="card-title">The Catcher in the Rye</h2>
            <p className="mt-2 mb-3">By : Awlad Hossain</p>
            <hr className="border-dashed border-gray-300" />
           <div className="flex justify-between mt-2">
            <h1>Fiction</h1>
            <h1 className="flex gap-2">5.00 <GoStar className="mt-1" /> </h1>
           </div> 
           
          </div>
        </div>
      <div className="card w-96 bg-base-100 shadow-md border p-4 ">
         <div className="p-5  bg-[#F3F3F3] rounded-md">
         <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
         </div>
          <div>
           <button className="rounded-full p-1 bg-[#23BE0A0D] text-[#23BE0A] border-none  mt-6 ">Young Adult</button>
           <button className=" rounded-full p-2 bg-[#23BE0A0D] text-[#23BE0A] border-none  mt-6 ">Identity</button>

            <h2 className="card-title">The Catcher in the Rye</h2>
            <p className="mt-2 mb-3">By : Awlad Hossain</p>
           <hr />
           <div className="flex justify-between mt-2">
            <h1>Fiction</h1>
            <h1 className="flex gap-2">5.00 <GoStar className="mt-1" /> </h1>
           </div>
           
          </div>
        </div>
      <div className="card w-96 bg-base-100 shadow-md border p-4 ">
         <div className="p-5  bg-[#F3F3F3] rounded-md">
         <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
         </div>
          <div>
           <button className="rounded-full p-1 bg-[#23BE0A0D] text-[#23BE0A] border-none  mt-6 ">Young Adult</button>
           <button className=" rounded-full p-2 bg-[#23BE0A0D] text-[#23BE0A] border-none  mt-6 ">Identity</button>

            <h2 className="card-title">The Catcher in the Rye</h2>
            <p className="mt-2 mb-3">By : Awlad Hossain</p>
           <hr />
           <div className="flex justify-between mt-2">
            <h1>Fiction</h1>
            <h1 className="flex gap-2">5.00 <GoStar className="mt-1" /> </h1>
           </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
