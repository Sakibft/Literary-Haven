import image from '../assets/banner.png'
const Details = () => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mb-8 lg:h-[600px]">
        <div className="w-1/2 bg-[#1313130D] rounded-xl                                                           ">
          <figure className="p-6">
          <img className='h-96 w-96 pt-10' src={image} alt="" />
          </figure>
        </div>
        <div className="pl-6 w-1/2">
          <h1 className="playfair text-xl font-semibold ">
            The Catcher in the Rye
          </h1>
          <p className="mt-2 text-base playfair">By : Awlad Hossain</p>
          <hr className="mt-3 lg:w-[630px]" />
          <h1 className="playfair mt-2">Fiction</h1>
          <hr className="mt-3 lg:w-[630px]" />
          <p className="mt-4 ">
            <span className="font-semibold playfair">Review: </span>
            <span className="playfair text-sm text-gray-600">
              Sit amet consectetur. Interdum porta pulvinar non sit aliquam.
              Aenean pulvinar blandit vel non enim elementum penatibus
              pellentesque ac. Nec accumsan euismod nulla adipiscing lectus.
              Morbi elementum a auctor erat diam tellus. Fermentum faucibus
              nulla enim ornare. Id neque neque pretium enim platea urna non
              dictum. Faucibus dignissim ridiculus nibh tristique massa non.
            </span>
          </p>
          <div className="mt-10 flex">
            <div className="flex gap-3">
              <p>Tag</p>
              <button className="rounded-full px-2 bg-[#23BE0A0D] text-[#23BE0A] border-none    ">
                #Young Adult
              </button>
              <button className=" rounded-full px-4 bg-[#23BE0A0D] text-[#23BE0A] border-none   ">
                #Identity
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
              <h1 className="playfair font-semibold">281</h1>
              </div>
              <div>
              <h1 className="playfair font-semibold">Sakib Sarker $ co</h1>
              </div>
              <div>
              <h1 className="playfair font-semibold">2813</h1>
              </div>
              <div>
              <h1 className="playfair font-semibold">4.8</h1>
              </div>
            </div>
          </div>
          <div className="mt-4 flex gap-4">
          <button className=" border bg-white rounded-md p-2 hover:bg-gray-300  ">Read</button>
          <button className=" border-none   rounded-md p-2 bg-[#50B1C9] text-white ">Wishlist</button>
          
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
