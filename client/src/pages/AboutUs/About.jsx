import CarouselComponent from '../../components/AboutCarousel/Carousel';
import style from './About.module.css'

export default function About() {

  return (
    <div className={`${style['container-carousel-component']}`}>
      <CarouselComponent/>
    </div>
  )
}
