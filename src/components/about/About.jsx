import React from 'react'
import img_url from '../../asset/44.webp'
import Social from '../../features/Social'
const About = () => {
  const urls = [img_url, img_url, img_url, img_url]
  return (
    <div id="about" className="flex gap-12 flex-col m-12 md:flex-row">
      <div className="grid grid-cols-2 grid-rows-2 gap-8 flex-1 md:gap-4">
        {urls.map((url,idx) => <img key={idx} src={url} alt="image" className="w-full aspect-square object-cover rounded-4 hover:scale-[1.02] shadow transition-transform" />)}
      </div>
      <div className="flex flex-col items-center text-center md:gap-12 md:flex-1 md:items-start md:text-left">
        <h1 className="text-2xl">Lorem ipsum dolor sit amet.</h1>
        <div className="text-lg my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, unde sit! Consequatur, asperiores. Voluptatibus provident quod assumenda eligendi maxime accusantium dicta, recusandae libero voluptates debitis blanditiis, excepturi laudantium mollitia possimus! Maiores qui laborum veritatis explicabo eligendi iusto obcaecati, aut ex sint ipsa cum quia ad voluptas esse libero dolore eius?</div>
        <Social className="container__text-area__socials" gap="4em"/>
      </div>
    </div>
  )
}

export default About