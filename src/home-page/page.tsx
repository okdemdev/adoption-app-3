'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Header from './Header'
import PetCategories from './PetCategories'
import AnimalCard from './AnimalCard'
import { animalData } from '@/dummydata'
import { Heart, Home, MessageCircle, PersonStanding, Phone, User } from 'lucide-react'
import { useParams } from 'next/navigation'

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const { id } = useParams()

  let animal
  Object.keys(animalData).forEach((category) => {
    const foundAnimal = animalData[category].find((animal) => animal.id === id)
    if (foundAnimal) {
      animal = foundAnimal
    }
  })

  const handleCategorySelect = (category) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? null : category))
  }

  const sortedAnimalData = selectedCategory
    ? animalData[selectedCategory].slice().sort((a, b) => a.distance - b.distance)
    : []

  const [selected, setSelected] = useState('home')

  const handleSelect = (icon) => {
    setSelected(icon)
  }

  return (
    <div className="flex flex-col gap-2 bg-[#f2f2f2] p-8 pb-16">
      {' '}
      {/* Adjusted padding */}
      <Header />
      <p className="font-bold text-xl mt-4">Pet Categories</p>
      <PetCategories onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory} />
      {sortedAnimalData.length > 0 ? (
        sortedAnimalData.map((animal) => (
          <Link key={animal.id} href={`/animals/${animal.id}`} passHref>
            <AnimalCard
              imageSrc={animal.imageSrc}
              name={animal.name}
              breed={animal.breed}
              gender={animal.gender}
              old={animal.old}
              distance={animal.distance}
              id={animal.id}
              bgColor={animal.bgColor}
              profilePic={animal.profilePic}
            />
          </Link>
        ))
      ) : (
        <p className="mt-4">No animals available in this category.</p>
      )}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around items-center px-4 py-3 bg-white shadow-lg z-10 border-t border-gray-200">
        <div className="flex gap-4">
          <a
            href="/"
            onClick={() => handleSelect('home')}
            className={`rounded-full p-3 cursor-pointer shadow-md transition-colors duration-300 flex items-center justify-center ${
              selected === 'home' ? 'bg-[#d54746] hover:opacity-90 ' : 'bg-[#e0e5e9] hover:bg-[#d1d8dd] '
            }`}
            aria-label="Home"
          >
            <Home className={`h-6 w-6 ${selected === 'home' ? 'text-white' : 'text-[#6c757d]'}`} />
          </a>
          <a
            href="/favorites"
            onClick={() => handleSelect('favorites')}
            className={`rounded-full p-3 cursor-pointer shadow-md transition-colors duration-300 flex items-center justify-center ${
              selected === 'favorites' ? 'bg-[#d54746] hover:opacity-90 ' : 'bg-[#e0e5e9] hover:bg-[#d1d8dd] '
            }`}
            aria-label="Favorites"
          >
            <Heart className={`h-6 w-6 ${selected === 'favorites' ? 'text-white' : 'text-[#6c757d]'}`} />
          </a>
          <a
            href="/profile"
            onClick={() => handleSelect('profile')}
            className={`rounded-full p-3 cursor-pointer shadow-md transition-colors duration-300 flex items-center justify-center ${
              selected === 'profile' ? 'bg-[#d54746] hover:opacity-90 ' : 'bg-[#e0e5e9] hover:bg-[#d1d8dd] '
            }`}
            aria-label="Profile"
          >
            <User className={`h-6 w-6 ${selected === 'profile' ? 'text-white' : 'text-[#6c757d]'}`} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage
