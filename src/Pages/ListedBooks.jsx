import image from "../assets/banner.png";
import { CiLocationOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";
const ListedBooks = () => {
  return (
    <div>
      <div className="bg-[#1313130D] rounded-md">
        <h1 className="font-semibold text-xl p-2 text-center">Books</h1>
      </div>
      {/* 1 */}
      <div className="flex justify-center mt-5">
        <select className="rounded-md p-2">
          <option disabled selected>
            SortBy
          </option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
      {/* 2 */}
    
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Architecto</span>
	</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>Corrupti</span>
	</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
		</svg>
		<span>Excepturi</span>
	</a>
	<a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<circle cx="12" cy="12" r="10"></circle>
			<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
		</svg>
		<span>Consectetur</span>
	</a>
</div>
      {/* 3 */}
      <div className="mt-8">
        <div className="card md:card-side bg-base-100 shadow-xl p-4 border border-red-500">
          <div className="p-12 bg-[#1313130D] rounded-lg">
            <figure>
              <img className="h-40" src={image} alt="Movie" />
            </figure>
          </div>
          <div className="pl-8 mt-2">
            <h1 className="font-bold text-2xl playfair">The Catcher in the Rye</h1>
            <p className=" playfair mt-2 mb-1 text-lg ">By : Awlad Hossain</p>
            <div className="flex gap-3 mt-3">
              <p>Tag</p>
              <button className="rounded-full px-2 bg-[#23BE0A0D] text-[#23BE0A] border-none    ">
                #Young Adult
              </button>
              <button className=" rounded-full px-4 bg-[#23BE0A0D] text-[#23BE0A] border-none   ">
                #Identity
              </button>
              <h1 className="flex gap-2 playfair"> <CiLocationOn className="mt-1 text-lg" />  Year of Publishing: 1231</h1>
            </div>
            <div className="mt-4 flex gap-8">
              <h1 className="flex gap-2 playfair"> <CgProfile  className="text-lg mt-1"/> Publisher : Scribner</h1>
              <h1 className="flex gap-2 playfair"> <IoBookOutline className="mt-1" /> Page : 192</h1>
          

            </div>
            <hr  className="lg:w-[1000px] mt-4 border-dashed border-gray-400  "/>
            <div className="mt-4 flex gap-4">
            <button className=" rounded-full px-4 py-2 bg-[#328EFF0D] text-[#328EFF] border-none   ">
                Category: Classic
              </button>
            <button className=" rounded-full px-4 py-2 bg-[#FFAC330D] text-[#FFAC33] border-none   ">
                 Rating : 4.5
              </button>
            <button className=" rounded-full px-4 py-2 bg-[#23BE0A] text-white border-none   ">
                  View Details
              </button>
            </div>

          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
