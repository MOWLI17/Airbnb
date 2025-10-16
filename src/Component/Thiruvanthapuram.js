import React from 'react'
import { useRef } from 'react'
import { IoHeartOutline } from "react-icons/io5";


const thiruvananthapuram=[
    {
        id:1 ,
        imageClass: 'apbu57',
        type: "Flat in Thiruvananthapuram",
        price: "₹5,079 for 2 nights" ,
        rating:"4.92",
    },
    {
        id: 2,
        imageClass: 'apbu58',
        type: "Rooim in Thiruvananthapuram",
        price: "₹3,082 for 2 nights" ,
        rating:"4.83",
    },
    {
       id:3 ,
       imageClass: 'apbu59',
       type:"Apartment in Thiruvanthapuram" ,
       price:"₹4,7771 for 2 nights" ,
       rating:"5.0",
    },
   {
       id:4 ,
       imageClass: 'apbu60',
       type:"Gust suite in Thiruvananthapuram" ,
       price:"₹3,538 for 2 nights" ,
       rating:"4.84",
   },
   {
       id:5 ,
       imageClass: 'apbu61',
       type: "Flat in Thiruvananthapuram",
       price: "₹9,090 for 2 nights" ,
       rating:"4.95",
   },
   
   {
       id:6 ,
       imageClass: 'apbu62',
       type: "Home in Thiruvananthapuram",
       price: "₹3,424 for 2 nights" ,
       rating:"4.83",
   },
   {
       id:7,
       imageClass: 'apbu63',
       type: "Flat in Thiruvananthapuram",
       price: "₹5,932 for 2 nights" ,
       rating:"4.91",
   },
   {
       id:8,
       imageClass: 'apbu64',
       type: "Place to stay in Thiruvananthapuram ",
       price: "₹1,986 for 2 nights" ,
       rating:"4.96",
   },
 
   ]

const Thiruvanthapuram = () => {
    const containerRef = useRef(null);
    const scrollBy = (offset) => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += offset;
      }
    };
  return (
    <div>
    <div className="scrollheader">
      <h3>Check out homes in Thiruvananthapuram</h3>
      <div >
        <button onClick={() => scrollBy(-300)} className="scrollbuttons">‹</button>
        <button onClick={() => scrollBy(300)} className="scrollbuttons">›</button>
      </div>
    </div>
    <div className="bangalore" ref={containerRef}>
             {thiruvananthapuram.map((thiruvananthapuram) => (
                 <div key={thiruvananthapuram.id} className="cardbutton">
                   <div className={`cardimage ${thiruvananthapuram.imageClass}`}>
                     <div className="p1">Guest favourite</div>
                     <button className="heart" aria-label="Save to wishlist">
                     <IoHeartOutline />
                     </button>
                   </div>
                   <div className="p2">
                     <p><strong>{thiruvananthapuram.type}</strong></p>
                     <p className="p3">{thiruvananthapuram.price}·★{thiruvananthapuram.rating}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
  )
}

export default Thiruvanthapuram