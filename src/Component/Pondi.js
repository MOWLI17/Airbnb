import React from 'react'
import { useRef } from 'react';
import { IoHeartOutline } from "react-icons/io5";





const pondi=[
    {
        id: 1,
        imageClass: 'apbu9',
        type: "Home in Irumbai",
        price: "₹11,250 for 2 nights",
        rating: "5.0",
      },
      {
        id: 2,
        imageClass: 'apbu10',
        type: "Room in Puducherry",
        price: "₹8,445 for 2 nights",
        rating: "4.85",
      },
      {
        id: 3,
        imageClass: 'apbu11',
        type: "Home in Puducherry",
        price: "₹10,362 for 2 nights",
        rating: "4.88",
      },
      {
        id: 4,
        imageClass: 'apbu12',
        type: "Apartment in Puducherry",
        price: "₹9,655 for 2 nights",
        rating: "4.85",
      },
      {
        id: 5,
        imageClass: 'apbu13',
        type: "Room in Puducherry",
        price: "₹4,679 for 2 nights",
        rating: "4.8",
      },
      {
        id: 6,
        imageClass: 'apbu14',
        type: "Flat in Kuilapalayam",
        price: "₹13,695 for 2 nights",
        rating: "4.93",
      },
      {
        id: 7,
        imageClass: 'apbu15',
        type: "Flat in Bommayapalayam",
        price: "₹6,676 for 2 nights",
        rating: "4.84",
      },
      {
        id: 8,
        imageClass: 'apbu16',
        type: "Room in Puducherry",
        price: "₹11,869 for 2 nights",
        rating: "4.9",
      },
    ];
const Pondi = () => {
     const containerRef = useRef(null);
   
     const scrollBy = (offset) => {
       if (containerRef.current) {
         containerRef.current.scrollLeft += offset;
       }
     };
  return (
    <div>
      <div className="scrollheader">
        <h3>Available in Puducherry this weekend</h3>
        <div >
          <button onClick={() => scrollBy(-300)} className="scrollbuttons">‹</button>
          <button onClick={() => scrollBy(300)}className="scrollbuttons">›</button>
        </div>
      </div>
    <div className="bangalore" ref={containerRef}>
            {pondi.map((pondi) => (
              <div key={pondi.id} className="cardbutton">
                <div className={`cardimage ${pondi.imageClass}`}>
                  <div className="p1">Guest favourite</div>
                  <button className="heart" aria-label="Save to wishlist">
                  <IoHeartOutline />
                  </button>
                </div>
                <div className="p2">
                  <p><strong>{pondi.type}</strong></p>
                  <p className="p3">{pondi.price}·★{pondi.rating}</p>
      
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Pondi