import React from 'react'
import { MapPin, Menu, Search } from 'lucide-react'

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      {/* LEFT PART */}
      <div className="flex justify-center items-center gap-2">
        <MapPin className="fill-[#d54746] text-[#f2f2f2] h-14 w-14" />
        <p className="font-bold text-3xl">
          Timisoara, <span className="font-light text-2xl">Romania</span>
        </p>
      </div>
      {/* RIGHT PART */}
      <div className="flex justify-center items-center gap-2">
        <Search className="font-bold h-8 w-8" />
        <Menu className="font-bold h-8 w-8" />
      </div>
    </div>
  )
}

export default Header
