import React from 'react'
import { useRef } from 'react'
import { IoHeartOutline } from "react-icons/io5";




const coimbatore=[
    {
        id:1 ,
        imageClass: 'apbu49',
        type: "Farm stay in Alanthurai",
        price: "₹9,068 for 2 nights" ,
        rating:"4.96",
    },
    {
       id:2 ,
       imageClass: 'apbu50',
       type:"Home in COimbatore" ,
       price:"₹4,793 for 2 nights" ,
       rating:"4.89",
    },
   {
       id:3 ,
       imageClass: 'apbu51',
       type:"Apartment in Coimbatore" ,
       price:"₹7,190 for 2 nights" ,
       rating:"4.98",
   },
   {
       id:4 ,
       imageClass: 'apbu52',
       type: "Home in Coimbatore district",
       price: "₹5,5250 for 2 nights" ,
       rating:"4.86",
   },
   
   {
       id:5 ,
       imageClass: 'apbu53',
       type: "Apartment in Kuniyamuthur",
       price: "₹3,595 for 2 nights" ,
       rating:"4.81",
   },
   {
       id:6,
       imageClass: 'apbu54',
       type: "Room in Kovaipudur",
       price: "₹3,424 for 2 nights" ,
       rating:"5.0",
   },
   {
       id:7 ,
       imageClass: 'apbu55',
       type: "Home in Coimbatore",
       price: "₹5,763 for 2 nights" ,
       rating:"4.93",
   },
   {
       id:8 ,
       imageClass: 'apbu56',
       type: "Villa in Coimbatore",
       price: "₹5,684 for 2 nights" ,
       rating:"4.97",
   },
   ]
const Coimbatore = () => {
    const containerRef = useRef(null);
    
    const scrollBy = (offset) => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += offset;
      }
    };
  return (
    <div>
    <div className="scrollheader">
      <h3>Places to stay in Coimbatore</h3>
      <div>
        <button onClick={() => scrollBy(-300)} className="scrollbuttons">‹</button>
        <button onClick={() => scrollBy(300)} className="scrollbuttons">›</button>
      </div>
    </div>
    <div className="bangalore" ref={containerRef}>
             {coimbatore.map((coimbatore) => (
                 <div key={coimbatore.id} className="cardbutton">
                   <div className={`cardimage ${coimbatore.imageClass}`}>
                     <div className="p1">Guest favourite</div>
                     <button className="heart" aria-label="Save to wishlist">
                     <IoHeartOutline />
                     </button>
                   </div>
                   <div className="p2">
                     <p><strong>{coimbatore.type}</strong></p>
                     <p className="p3">{coimbatore.price}·★{coimbatore.rating}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
  )
}

export default Coimbatore