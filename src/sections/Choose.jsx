import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/images/List_mask-group.png'; // Existing image
import arrow from '../assets/images/SVG.png'; // Your upward arrow image

export default function ChooseUs() {
  return (
    <div className="container my-5 text-center position-relative">
      {/* Heading with arrow */}
      <div className="d-inline-block position-relative mb-3">
        <h2 className="fw-bold d-inline-block mb-0 text-white">Why Choose Us</h2>
        
        {/* Arrow placed to the right of heading */}
        <img 
          src={arrow}
          alt="Arrow"
          style={{
            height: '50px',
            position: 'absolute',
            top: '-14px',
            right: '-65px',
          }}
        />
      </div>
       {/* Button */}
     <button
  className="btn btn-primary px-4 py-2 separate-button"
  style={{
    position: 'relative',
    top: '-64px',
    left: '42px',
    borderRadius: '20px',
  }}
>
  Discover us
</button>


      {/* Subheading */}
      <p className="text-muted mb-4">
        We provide top-notch services with a focus on quality, innovation, and customer satisfaction.
      </p>

      {/* Image */}
      <div className="d-flex justify-content-center ">
        <img 
          height={50}
          src={image}
          alt="Why Choose Us"
          className="img-fluid rounded shadow mb-5"
        />
      </div>

     
    </div>
  );
}