import { useState } from 'react'
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
    <div id="trending" className="m-8 lg:m-16">
      <div className="p-4 gap-4 flex bg-[#0000003d] flex-col-reverse md:flex-row md:p-8 md:gap-8">
        <div className="flex flex-col gap-4 flex-1">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam possimus, vitae blanditiis quae vero voluptatibus alias incidunt.</div>
          <div>{subheaders[idx]}</div>
          <div className="flex gap-4">
            <a href="#" className="py-4 px-6 bg-[#00000057] rounded-xl flex-grow text-center">Dashboard</a>
            <a href="#" className="py-4 px-6 bg-[#00000057] rounded-xl flex-grow text-center">Opensea</a>
          </div>
        </div>
        <div className="flex-1 relative flex items-center">
          <button className="p-2 rounded-2xl m-2 sm:m-4 hover:scale-110" onClick={prev}>
            <FcPrevious className="text-2xl"/>
            </button>
          <div className="w-full h-full">
            <img src={imgs[idx]} alt="Trending image" className="w-full h-full object-cover rounded-xl"/>
          </div>
          <button className="p-2 rounded-2xl m-2 sm:m-4 hover:scale-110" onClick={next}>
            <FcNext className="text-2xl"/>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Trending