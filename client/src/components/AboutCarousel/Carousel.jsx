'use client'

import { useState } from 'react'
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import style from './Carousel.module.css'
import Mateo from '../../assets/images/about-us/Mateo.png'
import Daniel from '../../assets/images/about-us/Daniel.png'
import Marcos from '../../assets/images/about-us/Marcos.png'
import Dariana from '../../assets/images/about-us/Dariana.png'
import Diego from '../../assets/images/about-us/Diego.png'
import Pedro from '../../assets/images/about-us/Pedro.png'
import Nico from '../../assets/images/about-us/Nico.png'

export default function CarouselComponent () {
  const [ state, setState ] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle
  })

  const slides = [
    {
      key: 1,
      content: <div className={`${style['container-info']}`}>
        <img src={Mateo} alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>Mateo Colombatti</h1>
            <p>La fuerza del equipo viene de cada miembro. La fuerza de cada miembro es el equipo.</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <a href='https://www.linkedin.com/in/mateo-colombatti-35366a246' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </a>
              </li>
              <li>
                <a href='https://github.com/Matt112218' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    },
    {
      key: 2,
      content: <div className={`${style['container-info']}`}>
        <img src={Daniel} alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>Daniel Valencia Giraldo</h1>
            <p>No hay problema que no podamos resolver juntos, y muy pocos que podamos resolver por nosotros mismos.</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <a href='https://www.linkedin.com/in/daniel-valencia-giraldo-384341249' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </a>
              </li>
              <li>
                <a href='https://github.com/valenDanDev' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    },
    {
      key: 3,
      content: <div className={`${style['container-info']}`}>
        <img src={Marcos} alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>Marcos Carbajales</h1>
            <p>Da siempre lo mejor que tienes. Lo que plantes ahora, lo cosecharás más tarde. </p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <a href='https://www.linkedin.com/in/marck-carbajales/' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </a>
              </li>
              <li>
                <a href='https://github.com/Nhoctus-Marck' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    },
    {
      key: 4,
      content: <div className={`${style['container-info']}`}>
        <img src={Dariana} alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>Dariana Rengifo</h1>
            <p>Un bote no va hacia delante si cada uno rema a su propia manera.</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <a href='https://www.linkedin.com/in/dariana-rengifo/' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </a>
              </li>
              <li>
                <a href='https://github.com/darianaren/' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    },
    {
      key: 5,
      content: <div className={`${style['container-info']}`}>
        <img src={Diego} alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>Diego Guillen</h1>
            <p>Si tú sabes lo que vales, ve y consigue lo que mereces</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <a href='https://www.linkedin.com/in/diegoezequielguillen/' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </a>
              </li>
              <li>
                <a href='https://github.com/DeGsoft' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    },
    {
      key: 6,
      content: <div className={`${style['container-info']}`}>
        <img src={Pedro} alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>Pedro Aristigueta</h1>
            <p>Por muy alta que sea una montaña, siempre hay un camino hacia la cima.</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <a href='https://www.linkedin.com/in/pedro-aristigueta-357889215/' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </a>
              </li>
              <li>
                <a href='https://github.com/aristiguetam' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    },
    {
      key: 7,
      content: <div className={`${style['container-info']}`}>
        <img src={Nico} alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>Nicolas Sanchez</h1>
            <p>El 80% del éxito se basa simplemente en insistir.</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <a href='https://www.linkedin.com/in/nirsanchez/' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </a>
              </li>
              <li>
                <a href='https://github.com/Niffxd' target='_blank' rel='noreferrer'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  return (
    <div className={`${style["container-carousel"]}`}>
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
    </div>
  );
}
