import React, {useState} from "react";
import "./shows.scss";
import showsData from "../shows.json";

const Shows = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      if (currentIndex < showsData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else if (e.deltaY < 0) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  return (
    <div className="shows-container" onWheel={handleScroll}>
      <div className="shows-glavni">
        {showsData.map((show, index) => (
          <div
            key={show.id}
            className="shows-data"
            style={{transform: `translateX(-${currentIndex * 100}%)`}}
          >
            <h1>{show.title}</h1>
            <img src={show.pic} alt={show.title} />
            <div className="photo-details-holder">
              <p>{show.year}</p>
              <span className="genre">{show.genre}</span>
              <span className="duration">{show.duration}</span>
              <span className="description">{show.description}</span>
            </div>
          </div>
        ))}
      </div>
      <span>&#60; Scroll &#62;</span>
    </div>
  );
};

export default Shows;
