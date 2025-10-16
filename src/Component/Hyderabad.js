import React from 'react'
import { useRef } from 'react';
import { IoHeartOutline } from "react-icons/io5";

const hyderabad=[
    {
        id: 1,
        imageClass: 'apbu25',
        type: "Flat in Banjara Hills",
        price: "₹10,271 for 2 nights",
        rating: "5.0",
      },
      {
        id: 2,
        imageClass: 'apbu26',
        type: "Apartment in Banjara Hills",
        price: "₹16,433 for 2 nights",
        rating: "4.98",
      },
      {
        id: 3,
        imageClass: 'apbu27',
        type: "Farm stay in Hyderabad",
        price: "₹18,533 for 2 nights",
        rating: "4.93",
      },
      {
        id: 4,
        imageClass: 'apbu28',
        type: "Home in Banjara Hills",
        price: "₹14,379 for 2 nights",
        rating: "4.96",
      },
      {
        id: 5,
        imageClass: 'apbu29',
        type: "Place to stay in Banjara Hills",
        price: "₹3,308 for 2 nights",
        rating: "4.87",
      },
      {
        id: 6,
        imageClass: 'apbu30',
        type: "Apartment in Somajiguda",
        price: "₹11,492 for 2 nights",
        rating: "4.86",
      },
      {
        id: 7,
        imageClass: 'apbu31',
        type: "Apartment in Hyderabad",
        price: "₹15,380 for 2 nights",
        rating: "4.91",
      },
      {
        id: 8,
        imageClass: 'apbu32',
        type: "Apartment in Hyderabad",
        price: "₹6014 for 2 nights",
        rating: "4.95",
      },
    ]
const Hyderabad = () => {
      const containerRef = useRef(null);
        
          const scrollBy = (offset) => {
            if (containerRef.current) {
              containerRef.current.scrollLeft += offset;
            }
          };
  return (
   <div>
       <div className="scrollheader">
         <h3>Available next month in Hyderabad</h3>
         <div>
           <button onClick={() => scrollBy(-300)} className="scrollbuttons">‹</button>
           <button onClick={() => scrollBy(300)}  className="scrollbuttons">›</button>
         </div>
       </div>
       <div className="bangalore" ref={containerRef}>
                {hyderabad.map((hyderabad) => (
                    <div key={hyderabad.id} className="cardbutton">
                      <div className={`cardimage ${hyderabad.imageClass}`}>
                        <div className="p1">Guest favourite</div>
                        <button className="heart" aria-label="Save to wishlist">
                        <IoHeartOutline />
                        </button>
                      </div>
                      <div className="p2">
                        <p><strong>{hyderabad.type}</strong></p>
                        <p className="p3">{hyderabad.price}·★{hyderabad.rating}</p>
            
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  )
}

export default Hyderabad