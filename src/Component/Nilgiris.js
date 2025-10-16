import React from 'react'
import { useRef } from 'react'
import { IoHeartOutline } from "react-icons/io5";




const nilgiris=[
    {
       id:1 ,
       imageClass: 'apbu33',
       type:"villa in The Nilgiris district" ,
       price:"₹22,596 for 2 nights" ,
       rating:"4.98",
    },
   {
       id:2 ,
       imageClass: 'apbu34',
       type:"Cottage in Ooty" ,
       price:"₹27,000 for 2 nights" ,
       rating:"4.91",
   },
   {
       id:3 ,
       imageClass: 'apbu35',
       type: "Villa in The Nilgiris district",
       price: "₹25,791 for 2 nights" ,
       rating:"5.0",
   },
   
   {
       id:4 ,
       imageClass: 'apbu36',
       type: "Home in Iduhatty",
       price: "₹15,721 for 2 nights" ,
       rating:"4.78",
   },
   {
       id:5,
       imageClass: 'apbu37',
       type: "Home in Ooty",
       price: "₹11,412 for 2 nights" ,
       rating:"4.97",
   },
   {
       id:6 ,
       imageClass: 'apbu38',
       type: "Villa in Ootyt",
       price: "₹27,729 for 2 nights" ,
       rating:"4.97",
   },
   {
       id:7 ,
       imageClass: 'apbu39',
       type: "Villa in The Nilgiris district",
       price: "₹24,650 for 2 nights" ,
       rating:"4.95",
   },
   {
       id:8 ,
       imageClass: 'apbu40',
       type: "Room in Gudalur",
       price: "₹4,908 for 2 nights" ,
       rating:"5.0",
   }
   ]

const Nilgiris = () => {
    const containerRef = useRef(null);
    
    const scrollBy = (offset) => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += offset;
      }
    };
  return (
    <div>
    <div className="scrollheader" >
      <h3>Homes in The Nilgiris</h3>
      <div>
        <button onClick={() => scrollBy(-300)} className="scrollbuttons">‹</button>
        <button onClick={() => scrollBy(300)} className="scrollbuttons">›</button>
      </div>
    </div>
    <div className="bangalore" ref={containerRef}>
             {nilgiris.map((nilgiris) => (
                 <div key={nilgiris.id} className="cardbutton">
                   <div className={`cardimage ${nilgiris.imageClass}`}>
                     <div className="p1">Guest favourite</div>
                     <button className="heart" aria-label="Save to wishlist">
                     <IoHeartOutline />
                     </button>
                   </div>
                   <div className="p2">
                     <p><strong>{nilgiris.type}</strong></p>
                     <p className="p3">{nilgiris.price}·★{nilgiris.rating}</p>
         
                   </div>
                 </div>
               ))}
             </div>
           </div>
  )
}

export default Nilgiris