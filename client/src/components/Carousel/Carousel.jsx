'use client'

import Carousel from "react-spring-3d-carousel";
import { config } from 'react-spring'
import { useState } from "react"

export default function CarouselComponent() {
  const [ state, setState ] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle
  })

  const slides = [
    {
      key: 1,
      content: <img src="https://picsum.photos/800/801/?random" alt="1" />
    },
    {
      key: 2,
      content: <img src="https://picsum.photos/800/802/?random" alt="2" />
    },
    {
      key: 3,
      content: <img src="https://picsum.photos/600/803/?random" alt="3" />
    },
    {
      key: 4,
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />
    },
    {
      key: 5,
      content: <img src="https://picsum.photos/800/804/?random" alt="5" />
    },
    {
      key: 6,
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />
    },
    {
      key: 7,
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />
    },
    {
      key: 8,
      content: <img src="https://picsum.photos/805/800/?random" alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  const onChangeInput = e => {
    setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };
  
  return (
    <Carousel
      slides={slides}
      goToSlide={state.goToSlide}
      offsetRadius={state.offsetRadius}
      showNavigation={state.showNavigation}
      animationConfig={state.config}
    />
  )
}
