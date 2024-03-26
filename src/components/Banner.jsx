 import { Link } from 'react-router-dom';
import image from '../assets/banner.png'
 import { Button } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className='p-2'>
      <div className="h-[600px] md:w-full w-96 bg-[#1313130D] rounded-xl mt-5">
       <div className=" md:flex  md:justify-around ">
       {/* flex flex-col justify-center items-center */}
        <div  className='md:mt-44 '>
         
          <h1 className="md:text-7xl text-3xl playfair font-bold">Books to freshen </h1>
          <h1  className="md:text-7xl text-3xl playfair font-bold  mt-4">up your bookshelf</h1>
         <Link to='/listedbooks'> <Button className='bg-[#23BE0A] border-none md:mt-12' variant="gradient ">View the list </Button></Link>

        </div>
        <div className='md:mt-20'>
          <img  className='sm:w-96 '  src={image} alt="" />

        </div>

       </div>

      </div>
    </div>
  );
};

export default Banner;