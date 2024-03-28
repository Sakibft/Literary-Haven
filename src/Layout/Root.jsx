import { Outlet } from "react-router-dom";
import Nav from '../components/Nav'
import Footer from "../components/Footer";
 

const Root = () => {
  return (
    <div>
      <div className="container mx-auto">
      <Nav></Nav>
      <Outlet></Outlet>
      </div>
     
      <Footer></Footer>
    </div>
  );
};

export default Root;