import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { PICS } from '../shared/media';


const CatCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const pics = PICS;

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === pics.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? pics.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = pics.map((pic) => {
    return (
        <CarouselItem
            className="carousel-item img-fluid"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={pic.id}
      >
        <img className ="img" src={pic.src} alt={pic.alt} />
        <CarouselCaption className="img-caption" captionText={pic.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={pics} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CatCarousel;