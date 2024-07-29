'use client'
import React from 'react'
import AnimalBedge from './AnimalBedge'

const PetCategories = ({ onSelectCategory, selectedCategory }) => {
  const categories = [
    { imageSrc: 'dogcategory.png', title: 'Dog' },
    { imageSrc: 'catcategory.png', title: 'Cat' },

    // Add other categories as needed
  ]

  return (
    <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
      {categories.map((category, index) => (
        <AnimalBedge
          key={index}
          imageSrc={category.imageSrc}
          title={category.title}
          isSelected={selectedCategory === category.title.toLowerCase()}
          onSelectCategory={() => onSelectCategory(category.title.toLowerCase())}
        />
      ))}
    </div>
  )
}

export default PetCategories
