'use client'
import React from 'react'

const AnimalBedge = ({ imageSrc, title, isSelected, onSelectCategory }) => {
  const handleClick = () => {
    onSelectCategory()
  }

  return (
    <div
      onClick={handleClick}
      className={`inline-flex items-center gap-2 p-2 rounded-full min-w-max ${
        isSelected ? `bg-[#d54746]` : `bg-[#ffffff] cursor-pointer`
      }`}
    >
      {/* Image Container */}
      <div
        className={`rounded-full flex items-center justify-center p-1 ${isSelected ? `bg-[#b03a3a]` : `bg-[#f2f2f2]`}`}
      >
        <img src={imageSrc} alt={title} className="w-8 h-8 object-cover rounded-full object-top" />
      </div>
      {/* Text Container */}
      <div>
        <p className={isSelected ? `font-semibold text-sm text-white pr-2` : `font-semibold text-sm text-black pr-2`}>
          {title}
        </p>
      </div>
    </div>
  )
}

export default AnimalBedge
