import React from 'react'
import { useRef } from 'react';
import { IoHeartOutline } from "react-icons/io5";



const dindigul=[
    {  id: 1,
        imageClass: 'apbu17',
        type: "Cabin in Kodaikanal",
        price: "₹11,755 for 2 nights",
        rating: "5.0",},
    {
        id: 2,
        imageClass: 'apbu18',
        type: "Home in Kodaikanal",
        price: "₹10,842 for 2 nights",
        rating: "4.92",
      },
      {
        id: 3,
        imageClass: 'apbu19',
        type: "vill in Kodaikanal",
        price: "₹11,070 for 2 nights",
        rating: "4.88",
      },
      {
        id: 4,
        imageClass: 'apbu20',
        type: "Home in Kodaikanal",
        price: "₹10,214 for 2 nights",
        rating: "4.87",
      },
      {
        id: 5,
        imageClass: 'apbu21',
        type: "Home in Kodaikanal",
        price: "₹18,259 for 2 nights",
        rating: "4.98",
      },
      {
        id:6,
        imageClass: 'apbu22',
        type: "Room in Kodaikanal",
        price: "₹13,239 for 2 nights",
        rating: "4.98",
      },
      {
        id: 7,
        imageClass: 'apbu23',
        type: "Home in vadakaunji",
        price: "₹9,130 for 2 nights",
        rating: "5.0",
      },
  
      {
        id: 8,
        imageClass: 'apbu24',
        type: "Cabin in Kodaikanal",
        price: "₹20,375 for 2 nights",
        rating: "4.9",
      },]


const Dindigul = () => {
     const containerRef = useRef(null);
    
      const scrollBy = (offset) => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += offset;
        }
      };
  return (

    <div>
    <div className="scrollheader">
      <h3>Stay in Dindigul</h3>
      <div>
        <button onClick={() => scrollBy(-300)}className="scrollbuttons">‹</button>
        <button onClick={() => scrollBy(300)} className="scrollbuttons">›</button>
      </div>
    </div>
    <div className="bangalore" ref={containerRef}>
             {dindigul.map((dindigul) => (
                 <div key={dindigul.id} className="cardbutton">
                   <div className={`cardimage ${dindigul.imageClass}`}>
                     <div className="p1">Guest favourite</div>
                     <button className="heart" aria-label="Save to wishlist">
                     <IoHeartOutline />
                     </button>
                   </div>
                   <div className="p2">
                     <p><strong>{dindigul.type}</strong></p>
                     <p className="p3">{dindigul.price}·★{dindigul.rating}</p>
         
                   </div>
                 </div>
               ))}
             </div>
           </div>
  )
}

export default Dindigul