import CarouselComponent from '../../components/Carousel/Carousel';
import style from './page.module.css'

export default function About() {

  return (
    <div className={`${style['container-carousel-component']}`}>
      <CarouselComponent/>
    </div>
  )
}
