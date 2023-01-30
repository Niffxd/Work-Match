'use client'

import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { useState } from 'react'
import { Link } from "react-router-dom";
import style from './Carousel.module.css'

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
        <img src="https://images.generated.photos/7zofgOYy85zT5XJjWJl2_YJbgN491Pd56aa3CeOVlYU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTQyMjQ0LmpwZw.jpg" alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate alias voluptate, saepe, dignissimos facilis aliquid numquam similique, quidem tempora reprehenderit. Nobis ea labore voluptate et distinctio illo hic autem?</p>
            <p>
            Aut repudiandae itaque eligendi necessitatibus sint error modi delectus neque odit a labore, molestias veritatis iusto obcaecati minima velit ratione amet, fuga hic illum nihil optio voluptatum sunt! Voluptate, a!</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <Link href=''>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </Link>
              </li>
              <li>
                <Link href=''>
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    },
    {
      key: 2,
      content: <div className={`${style['container-info']}`}>
        <img src="https://images.generated.photos/7IcHvSHyIypmIKV8cdS5alFyJIIqqxFHQO9KxmJ_H_M/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzcyMzUzLmpwZw.jpg" alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate alias voluptate, saepe, dignissimos facilis aliquid numquam similique, quidem tempora reprehenderit. Nobis ea labore voluptate et distinctio illo hic autem?</p>
            <p>
            Aut repudiandae itaque eligendi necessitatibus sint error modi delectus neque odit a labore, molestias veritatis iusto obcaecati minima velit ratione amet, fuga hic illum nihil optio voluptatum sunt! Voluptate, a!</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <Link href=''>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </Link>
              </li>
              <li>
                <Link href=''>
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    },
    {
      key: 3,
      content: <div className={`${style['container-info']}`}>
        <img src="https://images.generated.photos/c1DCdo6Ov2jMjRH_OjPyY-gs1Mafwtup4Z4SbO9AR7c/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDQ4NjkxLmpwZw.jpg" alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate alias voluptate, saepe, dignissimos facilis aliquid numquam similique, quidem tempora reprehenderit. Nobis ea labore voluptate et distinctio illo hic autem?</p>
            <p>
            Aut repudiandae itaque eligendi necessitatibus sint error modi delectus neque odit a labore, molestias veritatis iusto obcaecati minima velit ratione amet, fuga hic illum nihil optio voluptatum sunt! Voluptate, a!</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <Link href=''>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </Link>
              </li>
              <li>
                <Link href=''>
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    },
    {
      key: 4,
      content: <div className={`${style['container-info']}`}>
        <img src="https://images.generated.photos/4iKCqIY7fe839GPuvyoEfVM9Ee3WTmSDMVJ7RKCh3KY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODA1MDk4LmpwZw.jpg" alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate alias voluptate, saepe, dignissimos facilis aliquid numquam similique, quidem tempora reprehenderit. Nobis ea labore voluptate et distinctio illo hic autem?</p>
            <p>
            Aut repudiandae itaque eligendi necessitatibus sint error modi delectus neque odit a labore, molestias veritatis iusto obcaecati minima velit ratione amet, fuga hic illum nihil optio voluptatum sunt! Voluptate, a!</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <Link href=''>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </Link>
              </li>
              <li>
                <Link href=''>
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    },
    {
      key: 5,
      content: <div className={`${style['container-info']}`}>
        <img src="https://images.generated.photos/i1UDhhxzSwPadnE4N68xBTSszPJ2sb6uFFoXZ93_zNs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjA5ODI3LmpwZw.jpg" alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate alias voluptate, saepe, dignissimos facilis aliquid numquam similique, quidem tempora reprehenderit. Nobis ea labore voluptate et distinctio illo hic autem?</p>
            <p>
            Aut repudiandae itaque eligendi necessitatibus sint error modi delectus neque odit a labore, molestias veritatis iusto obcaecati minima velit ratione amet, fuga hic illum nihil optio voluptatum sunt! Voluptate, a!</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <Link href=''>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </Link>
              </li>
              <li>
                <Link href=''>
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    },
    {
      key: 6,
      content: <div className={`${style['container-info']}`}>
        <img src="https://images.generated.photos/Pe-ArYiZiXrvj6eqM3iEnqLJgORlA8yD5mR0O0duT_4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDAxMjM1LmpwZw.jpg" alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate alias voluptate, saepe, dignissimos facilis aliquid numquam similique, quidem tempora reprehenderit. Nobis ea labore voluptate et distinctio illo hic autem?</p>
            <p>
            Aut repudiandae itaque eligendi necessitatibus sint error modi delectus neque odit a labore, molestias veritatis iusto obcaecati minima velit ratione amet, fuga hic illum nihil optio voluptatum sunt! Voluptate, a!</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <Link href=''>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </Link>
              </li>
              <li>
                <Link href=''>
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    },
    {
      key: 7,
      content: <div className={`${style['container-info']}`}>
        <img src="https://images.generated.photos/wRBaFdxOZGPtOZnC8xmorSqQM95NC3ZNe85vt1XN3iU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzU4NjAyLmpwZw.jpg" alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate alias voluptate, saepe, dignissimos facilis aliquid numquam similique, quidem tempora reprehenderit. Nobis ea labore voluptate et distinctio illo hic autem?</p>
            <p>
            Aut repudiandae itaque eligendi necessitatibus sint error modi delectus neque odit a labore, molestias veritatis iusto obcaecati minima velit ratione amet, fuga hic illum nihil optio voluptatum sunt! Voluptate, a!</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <Link href=''>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </Link>
              </li>
              <li>
                <Link href=''>
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    },
    {
      key: 8,
      content: <div className={`${style['container-info']}`}>
        <img src="https://images.generated.photos/csEhEmTZ3QUC0Wte1vESkhI9kkYG02v_8DnZWch9VMM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjcxMTY1LmpwZw.jpg" alt="user" />
        <div className={`${style['container-info-text']}`}>
          <div className={`${style['info-text']}`}>
            <h1>name</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cupiditate alias voluptate, saepe, dignissimos facilis aliquid numquam similique, quidem tempora reprehenderit. Nobis ea labore voluptate et distinctio illo hic autem?</p>
            <p>
            Aut repudiandae itaque eligendi necessitatibus sint error modi delectus neque odit a labore, molestias veritatis iusto obcaecati minima velit ratione amet, fuga hic illum nihil optio voluptatum sunt! Voluptate, a!</p>
          </div>
          <div className={`${style['social-media-links']}`}>
            <ul className={`${style['social-links']}`}>
              <li>
                <Link href=''>
                  <img src="https://cdn-icons-png.flaticon.com/512/1532/1532484.png" alt="linkedin" />
                </Link>
              </li>
              <li>
                <Link href=''>
                <img src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png" alt="github" />
                </Link>
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
