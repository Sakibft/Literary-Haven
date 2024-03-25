 import image from '../assets/banner.png'
 import { Button } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div className='p-2'>
      <div className="h-[600px] md:w-full  bg-[#1313130D] rounded-xl mt-5">
       <div className="md:flex justify-around">
        <div  className='md:mt-44'>
        {/* sm:flex sm:flex-col sm:justify-center sm:items-center */}
          <h1 className="lg:text-7xl playfair font-bold">Books to freshen </h1>
          <h1  className="lg:text-7xl  playfair font-bold mt-4">up your bookshelf</h1>
          <Button className='bg-[#23BE0A] border-none md:mt-12' variant="gradient ">gradient</Button>

        </div>
        <div className='md:mt-20'>
          <img   src={image} alt="" />

        </div>

       </div>

      </div>
    </div>
  );
};

export default Banner;