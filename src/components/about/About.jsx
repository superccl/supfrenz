import React from 'react'
import './about.scss'
import img_url from '../../asset/44.webp'
import Social from '../../features/Social'
const About = () => {
  const urls = [img_url, img_url, img_url, img_url]
  return (
    <div id="about" className="container">
      <div className="container__image-area">
        {urls.map((url,idx) => <img key={idx} src={url} alt="image" className="container__image-area__item" />)}
      </div>
      <div className="container__text-area">
        <h1 className="container__text-area__title">Lorem ipsum dolor sit amet.</h1>
        <div className="contaienr__text-area__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, unde sit! Consequatur, asperiores. Voluptatibus provident quod assumenda eligendi maxime accusantium dicta, recusandae libero voluptates debitis blanditiis, excepturi laudantium mollitia possimus! Maiores qui laborum veritatis explicabo eligendi iusto obcaecati, aut ex sint ipsa cum quia ad voluptas esse libero dolore eius?</div>
        <Social className="container__text-area__socials" gap="4em"/>
      </div>
    </div>
  )
}

export default About