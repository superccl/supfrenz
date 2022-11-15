import React from 'react'
import Social from '../../features/Social'
import '../../styles/util.css'
const Link = ( {className="", onClose} ) => {
  return (
    <div className={`w-[50vw] flex-col gap-6 p-4 lg:flex-1 lg:justify-center lg:w-auto lg:flex-row lg:p-0 lg:pl-12 lg:h-full ${className}`}>
      <button className="absolute block text-3xl p-2 rounded translate-x-[-150%] lg:hidden lg:flex-1" onClick={onClose}>&times;</button>
      <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:justify-center">
        <a href="#" className="rotate-animation">Claim</a>
        <a href="#about" className="rotate-animation">About</a>
        <a href="#roadmap" className="rotate-animation">Roadmap</a>
        <a href="#team" className="rotate-animation">Team</a>
        <a href="#gallery" className="rotate-animation">Gallery</a>
      </div>
      <Social className="lg:flex-1"/>
      <div className="flex flex-col text-center whitespace-nowrap gap-4 lg:flex-row lg:items-center">
        <a href="#" className="bg-[#5b5e84] rounded-lg p-4">EA Pass</a>
        <a href="#" className="bg-[#5b5e84] rounded-lg p-4">Dashboard</a>
      </div>
    </div>  
  )
}

export default Link