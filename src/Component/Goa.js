import React from 'react'
import { useRef } from 'react'
import { IoHeartOutline } from "react-icons/io5";



const goa=[
    {
        id:1 ,
        imageClass: 'apbu41',
        type: "Apartment in Siolim",
        price: "₹8,534 for 2 nights" ,
        rating:"4.86",
    },
    {
       id:2 ,
       imageClass: 'apbu42',
       type:"Guest house in Majorda" ,
       price:"₹7,076 for 2 nights" ,
       rating:"4.83",
    },
   {
       id:3 ,
       imageClass: 'apbu43',
       type:"Flat in Benaulim" ,
       price:"₹7,418 for 2 nights" ,
       rating:"4.87",
   },
   {
       id:4 ,
       imageClass: 'apbu44',
       type: "Apartment in Candolim",
       price: "₹5,545 for 2 nights" ,
       rating:"4.91",
   },
   
   {
       id:5 ,
       imageClass: 'apbu45',
       type: "Flat in Benaulim",
       price: "₹11,410 for 2 nights" ,
       rating:"5.0",
   },
   {
       id:6,
       imageClass: 'apbu46',
       type: "Flat in benaulim",
       price: "₹7,418 for 2 nights" ,
       rating:"4.89",
   },
   {
       id:7 ,
       imageClass: 'apbu47',
       type: "Home in Colva",
       price: "₹22,000 for 2 nights" ,
       rating:"4.92",
   },
   {
       id:8 ,
       imageClass: 'apbu48',
       type: "Guest house in siridao",
       price: "₹29,671 for 2 nights" ,
       rating:"4.95",
   },
 
   ]
const Goa = () => {
    const containerRef = useRef(null);
    
    const scrollBy = (offset) => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += offset;
      }
    };
  return (
    <div>
    <div className="scrollheader">
      <h3>Available next month in South Goa</h3>
      <div >
        <button onClick={() => scrollBy(-300)} className="scrollbuttons">‹</button>
        <button onClick={() => scrollBy(300)} className="scrollbuttons">›</button>
      </div>
    </div>
    <div className="bangalore" ref={containerRef}>
             {goa.map((goa) => (
                 <div key={goa.id} className="cardbutton">
                   <div className={`cardimage ${goa.imageClass}`}>
                     <div className="p1">Guest favourite</div>
                     <button className="heart" aria-label="Save to wishlist">
                     <IoHeartOutline />
                     </button>
                   </div>
                   <div className="p2">
                     <p><strong>{goa.type}</strong></p>
                     <p className="p3">{goa.price}·★{goa.rating}</p>
         
                   </div>
                 </div>
               ))}
             </div>
           </div>
  )
}

export default Goa