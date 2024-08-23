import React, { useState } from 'react'
import Card from './Card'
import {
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

const Testimonials = (props) => {
    let reviews = props.reviews;

    const[index , setIndex] = useState(0);

    function previousHandler(){
      if(index -1 < 0){
         setIndex(reviews.length - 1);
      }
      else {
        setIndex(index - 1);
      }
    }

    function forwardHandler () {
      if(index + 1 >= reviews.length){
        setIndex(0);
     }
     else {
       setIndex(index + 1);
     }
    }

    function supriseHandler () {
        let randomIndex = Math.floor(Math.random() * reviews.length); 
        setIndex(randomIndex);
    }

    
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center  mt-10 p-10 hover:shadow-xl transition-all duration-700'>
        <Card review = {reviews[index]}>   </Card>

        <div className="flex gap-8 text-3xl mt-7 mb-7  text-violet-400 font-bold mx-auto ">
        <button className="hover:text-violet-500 cursor-pointer ">
          <FaAngleLeft onClick={previousHandler}/>
        </button>

        <button className="hover:text-violet-500 cursor-pointer">
          <FaAngleRight onClick={forwardHandler}/>
        </button>
      </div>

      <div className="text-center">
        <button onClick={supriseHandler} className="text-white m-auto px-10 py-2 bg-violet-400 transition-all duration-200 hover:bg-violet-500 rounded-md font-bold text-lg">
          Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Testimonials