import { useState } from 'react'
import './trending.scss'
import img1 from '../../asset/44.webp'
import img2 from '../../asset/396.webp'
import { FcPrevious, FcNext } from 'react-icons/fc'


const Trending = () => {

const [idx, setIdx] = useState(0)
const subheaders = ['subheader-1', 'subheader-2', 'subheader-3']
const imgs = [img1, img2, img1]

function prev() {
  setIdx(idx => ((idx - 1) % imgs.length))
}
function next() {
  setIdx(idx => ((idx + 1) % imgs.length))
}
  return (
    <div id="trending">
      <div className="trending-container">
        <div className="trending-container__description-area">
          <div className="trending-container__description-area__header">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam possimus, vitae blanditiis quae vero voluptatibus alias incidunt.</div>
          <div className="trending-container__description-area__subheaders">{subheaders[idx]}</div>
          <div className="trending-container__description-area__actions">
            <a href="#" className="trending-container__description-area__actions__item">Dashboard</a>
            <a href="#" className="trending-container__description-area__actions__item">Opensea</a>
          </div>
        </div>
        <div className="trending-container__image-area">
          <button className="trending-container__image-area__button trending-container__image-area__button--prev" onClick={prev}>
            <FcPrevious className="trending-container__image-area__button__item"/>
            </button>
          <div className="trending-container__image-area__img-wrapper">
            <img src={imgs[idx]} alt="Trending image" className="trending-container__image-area__img-wrapper__img"/>
          </div>
          <button className="trending-container__image-area__button trending-container__image-area__button--next" onClick={next}>
            <FcNext className="trending-container__image-area__button__item"/>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Trending