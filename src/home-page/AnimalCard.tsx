import { HeartIcon, MapPin } from 'lucide-react'
import React, { useState } from 'react'

const AnimalCard = ({ imageSrc, name, breed, gender, old, distance, bgColor, profilePic }) => {
  const [saved, setSaved] = useState(false)

  const handleClick = () => {
    setSaved((prevSaved) => !prevSaved)
  }

  return (
    <div className="flex items-center bg-white rounded-2xl p-2">
      <img src={profilePic} alt={name} className={`w-24 h-24 rounded-2xl ${bgColor} object-cover object-top`} />
      <div className="flex flex-col ml-4">
        <h2 className="text-xl font-bold text-[#202124]">{name}</h2>
        <p className="text-[#202124] font-medium text-sm">{breed}</p>
        <p className="text-gray-400 font-medium text-xs">
          {gender}, {old} months old
        </p>
        <p className="text-gray-500 flex items-center gap-1 mt-3 text-sm font-medium">
          <MapPin className="text-red-500 h-4 w-4" />
          {distance} km away
        </p>
      </div>
      <button className="ml-auto mr-4 self-start">
        <HeartIcon
          onClick={handleClick}
          className={`w-6 h-6 ${saved ? 'text-red-500 fill-red-500' : 'text-gray-500'}`}
        />
      </button>
    </div>
  )
}

export default AnimalCard
