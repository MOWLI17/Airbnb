import React, { useRef } from 'react';
import { IoHeartOutline } from "react-icons/io5";

const bangalore = [
  { 
    id: 1, imageClass: 'apbu1', 
    type: "Flat in Bangalore Urban", 
    price: "₹5,478 for 2 nights", 
    rating: "5.0" 
  },
  { 
    id: 2, imageClass: 'apbu2', 
    type: "Apartment in Koramangala", 
    price: "₹6,504 for 2 nights", 
    rating: "4.94"
   },
  { 
    id: 3, imageClass: 'apbu3', 
    type: "Flat in Koramangala", 
    price: "₹6,391 for 2 nights", 
    rating: "4.88"
   },
  { 
    id: 4, imageClass: 'apbu4', 
    type: "Apartment in Bangalore Urban", 
    price: "₹7,729 for 2 nights", 
    rating: "4.87"
   },
  { 
    id: 5, imageClass: 'apbu5', 
    type: "Flat in Bangalore Urban", 
    price: "₹3,709 for 2 nights", 
    rating: "4.82"
   },
  { 
    id: 6, imageClass: 'apbu6', 
    type: "Flat in Bangalore Urban", 
    price: "₹5,044 for 2 nights", 
    rating: "5.0" 
  },
  { 
    id: 7, imageClass: 'apbu7', 
    type: "Room in Bangalore Urban", 
    price: "₹2,723 for 2 nights", 
    rating: "4.93"
   },
];

const Bangalore = () => {
  const containerRef = useRef(null);

  const scrollBy = (offset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += offset;
    }
  };

  return (
    <div>
      <div className="scrollheader">
        <h3>Popular homes in Bengaluru</h3>
        <div >
          <button onClick={() => scrollBy(-300)} className="scrollbuttons" >‹</button>
          <button onClick={() => scrollBy(300)}  className="scrollbuttons">›</button>
        </div>
      </div>

      <div className="bangalore" ref={containerRef}>
        {bangalore.map((bangalore) => (
          <div key={bangalore.id} className="cardbutton">
            <div className={`cardimage ${bangalore.imageClass}`}>
              <div className="p1">Guest favourite</div>
              <button className="heart" aria-label="Save to wishlist">
              <IoHeartOutline />
              </button>
            </div>
            <div className="p2">
              <p><strong>{bangalore.type}</strong></p>
              <p className="p3">{bangalore.price}·★{bangalore.rating}</p>
  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bangalore;
