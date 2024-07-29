'use client'
import { useParams } from 'next/navigation'
import { animalData } from '@/dummydata'
import { ArrowLeft, HeartIcon, Info, Shield, ShieldAlert, Check, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@/components/ui/drawer'
import { IoIosMale } from 'react-icons/io'
import { ChevronRight, Phone, MessageCircle } from 'lucide-react'

const AnimalDetails = () => {
  const { id } = useParams()

  const animal = Object.values(animalData)
    .flat()
    .find((animal) => animal.id === id)

  if (!animal) {
    return <p>Animal not found</p>
  }

  return (
    <div className="flex flex-col min-h-screen relative pb-[100px]">
      {/* NAVIGATION BAR */}
      <div className="flex justify-between items-center p-4">
        <Link href={'/'}>
          <ArrowLeft className="h-6 w-6 text-gray-700" />
        </Link>
        <HeartIcon className="h-6 w-6 text-gray-700" />
      </div>
      {/* PET INFO */}
      <div className="px-4">
        <div className="flex justify-between items-center">
          <p className="font-bold text-3xl text-[#202124]">{animal.name}</p>
          <IoIosMale className="text-gray-300 h-6 w-6" />
        </div>
        <div className="flex justify-between items-center font-semibold opacity-65 pb-6 text-sm">
          <p>{animal.breed}</p>
          <p>{animal.old} months old</p>
        </div>
      </div>
      {/* PET PHOTOS */}
      <div className="relative overflow-hidden">
        <div className="flex overflow-x-auto scroll-smooth gap-4 px-2 box-border">
          <div className={`relative w-[200px] h-[200px] ${animal.bgColor} flex-shrink-0 rounded-xl`}>
            <Image
              src={animal.profilePic}
              alt={`${animal.name} profile`}
              fill
              className="object-cover rounded-xl object-top"
            />
          </div>

          {animal.images.map((imageSrc, index) => (
            <div key={index} className={`relative w-[200px] h-[200px] ${animal.bgColor} flex-shrink-0 rounded-xl`}>
              <Image src={imageSrc} alt={`${animal.name}-${index}`} fill className="object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </div>
      {/* BADGE FEATURES */}
      <div className="p-4 flex gap-2">
        <Drawer>
          <DrawerTrigger>
            <Badge className="gap-2 bg-[#d54746] p-2">
              <p className="text-white">About his Health</p>
              <Info className="h-4 w-4" />
            </Badge>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>About {animal.name}'s health</DrawerTitle>
              <DrawerDescription>Updated on 26 July 2024</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className="space-y-2">
                {animal.health.map((item, index) => (
                  <Badge
                    key={index}
                    className={`gap-2 ${
                      item.type === 'good' ? 'bg-green-600' : 'bg-red-600'
                    } flex justify-between items-center p-2`}
                  >
                    <p className="text-white">{item.text}</p>
                    {item.type === 'good' ? <Shield className="h-4 w-4" /> : <ShieldAlert className="h-4 w-4" />}
                  </Badge>
                ))}
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Drawer>
          <DrawerTrigger>
            <Badge className="gap-2 bg-[#d54746] p-2">
              <p className="text-white">About his Nutrition</p>
              <Info className="h-4 w-4" />
            </Badge>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>About {animal.name}'s nutrition</DrawerTitle>
              <DrawerDescription>Updated on 26 July 2024</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className="space-y-2">
                {animal.nutrition.map((item, index) => (
                  <Badge
                    key={index}
                    className={`gap-2 ${
                      item.type === 'good' ? 'bg-green-600' : 'bg-red-600'
                    } flex justify-between items-center p-2`}
                  >
                    <p className="text-white">{item.text}</p>
                    {item.type === 'good' ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </Badge>
                ))}
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* OWNER FEATURE */}
      <div className="flex items-center justify-between px-4 mt-3 mb-auto cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out">
        <div className="flex items-center justify-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-bold">Adapostul pentru animale Timisoara</p>
            <div className="flex justify-between items-center">
              <p className="opacity-50 font-medium">Pet Owner</p>
            </div>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </div>

      {/* CONTACT FEATURE */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-lg z-10">
        <div className="flex items-center gap-4">
          <a
            href="tel:+1234567890"
            className="rounded-full bg-[#e0e5e9] p-3 cursor-pointer shadow-sm hover:bg-[#d1d8dd] transition-colors duration-200"
            aria-label="Call"
          >
            <Phone className="h-6 w-6 text-[#6c757d]" />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#e0e5e9] p-3 cursor-pointer shadow-sm hover:bg-[#d1d8dd] transition-colors duration-200"
            aria-label="Message on WhatsApp"
          >
            <MessageCircle className="h-6 w-6 text-[#6c757d]" />
          </a>
        </div>
        <div className="bg-gradient-to-r from-[#d54746] to-[#c43e3b] px-6 py-3 rounded-full text-lg font-bold text-white cursor-pointer shadow-md hover:opacity-90 transition-opacity duration-200">
          Visit {animal.name}
        </div>
      </div>
      <div className="flex flex-col gap-1 p-4">
        <p className="text-xl font-bold opacity-80">About {animal.name}</p>
        <p className="font-normal text-sm opacity-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A magni, enim quisquam dignissimos reiciendis, quam
          natus voluptatem, asperiores recusandae dolorem excepturi! Soluta aliquam possimus perferendis cupiditate
          quibusdam iure repellendus voluptatibus.
        </p>
      </div>
    </div>
  )
}

export default AnimalDetails
