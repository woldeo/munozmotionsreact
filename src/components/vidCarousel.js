import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { VIDS } from '../shared/media';


const VidCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const vids = VIDS;

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === vids.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? vids.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

    const slides = vids.map((vid) => {
        return (
            <CarouselItem
                className="embed embed-responsive embed-responsive-16by9 rounded gal-vid"
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={vid.id}
      >
        <iframe className ="vid-prev" src={vid.src} alt={vid.alt} allowFullScreen="allowFullScreen"/>
        <CarouselCaption className="img-caption" captionText={vid.caption} />
      </CarouselItem>
    );
  });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={false}      
    >
      <CarouselIndicators  items={vids} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl className="car-control" direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl className="car-control" direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default VidCarousel;
