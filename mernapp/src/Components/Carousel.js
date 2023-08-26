import React from 'react'

export default function Carousel() {
  return (
    <div>
      {" "}
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/300×300/?burger

"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700/?momos"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900×700/?frenchfries"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
}


