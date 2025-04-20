'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

interface CarouselProps {
  images: string[]
  title: string
  location: string
  price: number
  pricePerNight: number
  rating: number
  distance: string
  dates: string
  totalNights: number
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  title,
  location,
  price,
  pricePerNight,
  rating,
  distance,
  dates,
  totalNights
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showPriceDetails, setShowPriceDetails] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  // Adjust image paths for GitHub Pages deployment
  const getImagePath = (imagePath: string) => {
    // If image path already starts with a URL (http/https), don't modify it
    if (imagePath.startsWith('http')) {
      return imagePath
    }
    
    // If image is using a relative path, prepend the basePath
    // Make sure the path starts with a slash
    const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
    return `/Airbnb-using-Next.js${normalizedPath}`
  }

  return (
    <div 
      className="relative group cursor-pointer top-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={getImagePath(images[currentIndex])}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          priority={currentIndex === 0}
        />
        
        {/* Navigation Buttons */}
        {isHovered && (
          <>
            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevSlide()
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 hover:scale-110 transition"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
            )}
            
            {currentIndex < images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextSlide()
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 hover:scale-110 transition"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            )}
          </>
        )}

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 hover:scale-110 transition z-10"
        >
          {isFavorite ? (
            <HeartSolid className="h-7 w-7 text-red-500 drop-shadow-md" />
          ) : (
            <HeartIcon className="h-7 w-7 text-white stroke-[2] drop-shadow-md" />
          )}
        </button>

        {/* Guest Favorite Badge */}
        {rating >= 4.9 && (
          <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded-lg">
            <p className="text-xs font-medium">Guest favorite</p>
          </div>
        )}

        {/* Dot Indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation()
                goToSlide(index)
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Property Info */}
      <div className="mt-3 space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-rose-500">{title}</h3>
          <div className="flex items-center gap-1">
            <StarIcon className="h-4 w-4 fill-current" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        {/* <p className="text-gray-500 text-sm">{location}</p> */}
        <p className="text-gray-500 text-sm">{distance}</p>
        <p className="text-gray-500 text-sm">{dates}</p>
        
        {/* Price Display */}
        <div>
          <p 
            onClick={(e) => {
              e.stopPropagation();
              setShowPriceDetails(true);
            }}
            className="text-sm font-semibold textDecoration: underline cursor-pointer hover:opacity-80 mb-4"
          >
            ₹{(pricePerNight * totalNights).toLocaleString()} for {totalNights} nights
          </p>
        </div>
      </div>

      {/* Price Details Modal */}
      {showPriceDetails && (
        <div className="absolute inset-0 bg-white rounded-xl p-4 shadow-lg z-10">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Price details</h4>
              <p className="text-sm text-gray-500">{dates} · {totalNights} nights</p>
            </div>
            <button
              onClick={() => setShowPriceDetails(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>₹{pricePerNight.toLocaleString()} × {totalNights} nights</span>
              <span>₹{price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Cleaning fee</span>
              <span>₹{Math.round(price * 0.1).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Service fee</span>
              <span>₹{Math.round(price * 0.15).toLocaleString()}</span>
            </div>
            <div className="pt-2 border-t flex justify-between font-medium">
              <span>Total</span>
              <span>₹{Math.round(price * 1.25).toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Carousel
