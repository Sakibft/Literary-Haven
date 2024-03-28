import { NavLink } from "react-router-dom";
 
import { GiBookAura } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             
         
           <NavLink to='/' className={({isActive})=>isActive? 'text-[#23BE0A]  border px-2 py-1 border-green-400 rounded-md   font-semibold text-xl playfair':'font-semibold text-xl playfair'}>Home</NavLink>
         <NavLink to='/listedbooks' className={({isActive})=>isActive? 'text-[#23BE0A]  border px-2 py-1 border-green-400 rounded-md  font-semibold text-xl playfair':'font-semibold text-xl playfair'}>Listed Books</NavLink>
         <NavLink to='pagestoread' className={({isActive})=>isActive? 'text-[#23BE0A]  border px-2 py-1 border-green-400 rounded-md  font-semibold text-xl playfair':'font-semibold text-xl playfair'}>Pages To Read </NavLink>
         <NavLink to='/library' className={({isActive})=>isActive? 'text-[#23BE0A]  border px-2 py-1 border-green-400 rounded-md  font-semibold text-xl playfair':'font-semibold text-xl playfair'}>Top Rated</NavLink>
         <NavLink to='joinnow' className={({isActive})=>isActive? 'text-[#23BE0A]  border px-2 py-1 border-green-400 rounded-md  font-semibold text-xl playfair':'font-semibold text-xl playfair'}>Join Now </NavLink>
        </ul>
      </div>
      <div>
         
      <GiBookAura className=" md:text-3xl text-lg mr-3 text-[#23BE0A] font-black" />
      </div>
      <a className="md:text-2xl text-base playfair font-semibold">Literary Haven</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 flex gap-8">
         <NavLink to='/' className={({isActive})=>isActive? 'text-[#23BE0A]  border px-2 py-1 border-green-400 rounded-md   font-semibold text-2xl playfair':'font-semibold text-2xl playfair'}>Home</NavLink>
         <NavLink to='/listedbooks' className={({isActive})=>isActive? 'text-[#23BE0A]  border px-2 py-1 border-green-400 rounded-md  font-semibold text-2xl playfair':'font-semibold text-2xl playfair'}>Listed Books</NavLink>
         <NavLink to='pagestoread' className={({isActive})=>isActive? 'text-[#23BE0A]  border px-2 py-1 border-green-400 rounded-md  font-semibold text-2xl playfair':'font-semibold text-2xl playfair'}>Pages To Read </NavLink>
         <NavLink to='/library' className={({isActive})=>isActive? 'text-[#23BE0A]  border px-2 py-1 border-green-400 rounded-md  font-semibold text-2xl playfair':'font-semibold text-2xl playfair'}>Top Rated</NavLink>
         <NavLink to='joinnow' className={({isActive})=>isActive? 'text-[#23BE0A]  border px-2 py-1 border-green-400 rounded-md  font-semibold text-2xl playfair':'font-semibold text-2xl playfair'}>Join Now </NavLink>
      </ul>
    </div>
    <div className="navbar-end flex gap-3">
      <a className="btn bg-[#23BE0A] text-white">Sign in</a>
      <a className="btn bg-[#59C6D2] text-white ">Sign up</a>
    </div>
  </div>
  );
};

export default Nav;