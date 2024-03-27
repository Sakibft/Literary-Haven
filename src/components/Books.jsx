
import useAllCardData from "../Hooks/useAllCardData";
import SingleCart from "./SingleCart";
const Books = () => {
  const {data,loading} = useAllCardData();
  
  return (
    <div className="mt-10 mb-20 ">
      <h1 className="font-bold text-4xl text-center">Books</h1>
      <div className="mt-5 grid lg:grid-cols-3 justify-around gap-y-3 gap-x-4">

    {
      data.map((card)=><SingleCart key={card.id} card={card}></SingleCart>)
    }

      
    
      </div>
    </div>
  );
};

export default Books;
