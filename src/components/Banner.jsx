 import { Link } from 'react-router-dom';
import imag from '../assets/banner.png'
 import { Button } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div>
      <div className="md:h-[600px] md:w-full  bg-[#1313130D] rounded-xl mt-5 p-2 ">
       <div className="flex   md:justify-around ">
       {/* flex flex-col justify-center items-center */}
        <div  className='md:mt-44 ml-10'>
         
          <h1 className="md:text-7xl text-3xl playfair font-bold">Books to freshen </h1>
          <h1  className="md:text-7xl text-3xl playfair font-bold  md:mt-4">up your bookshelf</h1>
         <Link to='/listedbooks'> <Button className='bg-[#23BE0A] border-none md:mt-12' variant="gradient ">View the list </Button></Link>

        </div>
        <div className='md:mt-20'>
          <img  className='sm:w-96 '  src={imag} alt="" />

        </div>

       </div>

      </div>
    </div>
  );
};

export default Banner;