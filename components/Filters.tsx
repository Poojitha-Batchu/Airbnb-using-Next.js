import React, { useState } from 'react'
import { XMarkIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import PropertyTypeSelector from '@/components/PropertyTypeSelector'
import HostLanguageSelector from '@/components/HostLanguageSelector'
import AccessibilityFeatures from '@/components/AccessibilityFeatures'

interface FiltersProps {
  isOpen: boolean
  onClose: () => void
}

interface RoomCounts {
  bedrooms: number
  beds: number
  bathrooms: number
}

const MIN_PRICE = 4300
const MAX_PRICE = 150000
const PRICE_GAP = 1000

const Filters: React.FC<FiltersProps> = ({ isOpen, onClose }) => {
  const [placeType, setPlaceType] = useState<'any' | 'room' | 'entire'>('any')
  const [priceRange, setPriceRange] = useState<[number, number]>([4300, 100000])
  const [roomCounts, setRoomCounts] = useState<RoomCounts>({
    bedrooms: 0,
    beds: 0,
    bathrooms: 0
  })
  const [expandedSections, setExpandedSections] = useState({
    propertyType: false,
    accessibility: false,
    hostLanguage: false
  })
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [selectedBookingOptions, setSelectedBookingOptions] = useState<string[]>([])
  const [isStandoutSelected, setIsStandoutSelected] = useState(false)

  const handleRoomCountChange = (type: keyof RoomCounts, increment: boolean) => {
    setRoomCounts(prev => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }))
  }

  const amenities = [
    { icon: '📶', label: 'Wifi' },
    { icon: '🍳', label: 'Kitchen' },
    { icon: '🧺', label: 'Washing machine' },
    { icon: '🧺', label: 'Dryer' },
    { icon: '❄️', label: 'Air conditioning' },
    { icon: '🌡️', label: 'Heating' }
  ]

  const bookingOptions = [
    { icon: '⚡', label: 'Instant Book' },
    { icon: '🔑', label: 'Self check-in' },
    { icon: '🐕', label: 'Allows pets' }
  ]

  const formatPrice = (price: number) => {
    return '₹' + price.toLocaleString('en-IN')
  }

  const handlePriceRangeChange = (value: number, isMin: boolean) => {
    setPriceRange(prev => {
      let [min, max] = prev
      if (isMin) {
        min = Math.min(value, max - PRICE_GAP)
      } else {
        max = Math.max(value, min + PRICE_GAP)
      }
      return [min, max]
    })
  }

  const toggleAmenity = (label: string) => {
    setSelectedAmenities(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label) 
        : [...prev, label]
    )
  }

  const toggleBookingOption = (label: string) => {
    setSelectedBookingOptions(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label) 
        : [...prev, label]
    )
  }

  const handleClearAll = () => {
    setPlaceType('any')
    setPriceRange([MIN_PRICE, 100000])
    setRoomCounts({ bedrooms: 0, beds: 0, bathrooms: 0 })
    setSelectedAmenities([])
    setSelectedBookingOptions([])
    setIsStandoutSelected(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300">
      <div className="bg-white rounded-xl w-[35%] max-w-1xl max-h-[90vh] flex flex-col overflow-hidden shadow-xl border border-gray-200 transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-4 divide-y divide-gray-200" style={{ maxHeight: 'calc(90vh - 130px)' }}>
          {/* Type of place */}
          <div className="py-6">
            <h3 className="text-lg font-semibold mb-4">Type of place</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'any', label: 'Any type' },
                { value: 'room', label: 'Room' },
                { value: 'entire', label: 'Entire home' }
              ].map(option => (
                <button
                  key={option.value}
                  className={`p-4 rounded-xl border transition-all duration-200 hover:border-gray-500 ${
                    placeType === option.value 
                      ? 'border-black bg-gray-50 shadow-sm' 
                      : 'border-gray-300'
                  }`}
                  onClick={() => setPlaceType(option.value as 'any' | 'room' | 'entire')}
                >
                  <span className="font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Price range */}
          <div className="py-6">
            <h3 className="text-lg font-semibold mb-4">Price Range</h3>

            <div className="bg-gray-50 p-5 rounded-xl">
              {/* Track */}
              <div className="relative w-full h-[4px] bg-gray-300 mb-6">
                {/* Selected range line */}
                <div
                  className="absolute h-[4px] bg-black"
                  style={{
                    left: `${((priceRange[0] - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
                    right: `${100 - ((priceRange[1] - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`
                  }}
                />

                {/* Min handle */}
                <div
                  className="absolute w-5 h-5 border-2 border-black bg-white rounded-full -translate-x-1/2 -translate-y-1/2 cursor-pointer shadow-md hover:scale-110 transition-transform duration-200"
                  style={{
                    left: `${((priceRange[0] - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
                    top: '50%'
                  }}
                />

                {/* Max handle */}
                <div
                  className="absolute w-5 h-5 border-2 border-black bg-white rounded-full -translate-x-1/2 -translate-y-1/2 cursor-pointer shadow-md hover:scale-110 transition-transform duration-200"
                  style={{
                    left: `${((priceRange[1] - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%`,
                    top: '50%'
                  }}
                />

                {/* Hidden inputs for accessibility and functionality */}
                <input
                  type="range"
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  step={PRICE_GAP}
                  value={priceRange[0]}
                  onChange={(e) => handlePriceRangeChange(parseInt(e.target.value), true)}
                  className="absolute w-full opacity-0 h-6 cursor-pointer"
                  style={{ top: '-12px' }}
                  aria-label="Minimum price"
                />
                <input
                  type="range"
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  step={PRICE_GAP}
                  value={priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(parseInt(e.target.value), false)}
                  className="absolute w-full opacity-0 h-6 cursor-pointer"
                  style={{ top: '-12px' }}
                  aria-label="Maximum price"
                />
              </div>

              {/* Min/Max labels */}
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span>{formatPrice(MIN_PRICE)}</span>
                <span>{formatPrice(MAX_PRICE)}</span>
              </div>

              {/* Display selected values */}
              <div className="flex justify-between text-lg font-medium text-gray-900 mb-2">
                <div>
                  <div>{formatPrice(priceRange[0])}</div>
                  <div className="text-sm text-gray-500">Minimum</div>
                </div>
                <div className="text-right">
                  <div>{formatPrice(priceRange[1])}</div>
                  <div className="text-sm text-gray-500">Maximum</div>
                </div>
              </div>
            </div>
          </div>

          {/* Rooms and beds */}
          <div className="py-6">
            <h3 className="text-lg font-semibold mb-4">Rooms and beds</h3>
            <div className="space-y-5">
              {Object.entries(roomCounts).map(([type, count]) => (
                <div key={type} className="flex items-center justify-between">
                  <span className="capitalize font-medium">{type}</span>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleRoomCountChange(type as keyof RoomCounts, false)}
                      className={`p-2 rounded-full border transition-all duration-200 ${
                        count === 0 
                          ? 'border-gray-200 text-gray-200 cursor-not-allowed' 
                          : 'border-gray-400 hover:border-gray-800 hover:bg-gray-50'
                      }`}
                      disabled={count === 0}
                      aria-label={`Decrease ${type}`}
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{count || 'Any'}</span>
                    <button
                      onClick={() => handleRoomCountChange(type as keyof RoomCounts, true)}
                      className="p-2 rounded-full border border-gray-400 hover:border-gray-800 hover:bg-gray-50 transition-all duration-200"
                      aria-label={`Increase ${type}`}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="py-6">
            <h3 className="text-lg font-semibold mb-4">Amenities</h3>
            <div className="grid grid-cols-2 gap-3">
              {amenities.map((amenity, index) => (
                <button
                  key={index}
                  className={`flex items-center gap-3 px-4 py-3 border rounded-xl transition-all duration-200 ${
                    selectedAmenities.includes(amenity.label)
                      ? 'border-black bg-gray-50 shadow-sm'
                      : 'border-gray-300 hover:border-gray-500'
                  }`}
                  onClick={() => toggleAmenity(amenity.label)}
                >
                  <span className="text-xl">{amenity.icon}</span>
                  <span className="font-medium">{amenity.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Booking options */}
          <div className="py-6">
            <h3 className="text-lg font-semibold mb-4">Booking options</h3>
            <div className="grid grid-cols-2 gap-3">
              {bookingOptions.map((option, index) => (
                <button
                  key={index}
                  className={`flex items-center gap-3 px-4 py-3 border rounded-xl transition-all duration-200 ${
                    selectedBookingOptions.includes(option.label)
                      ? 'border-black bg-gray-50 shadow-sm'
                      : 'border-gray-300 hover:border-gray-500'
                  }`}
                  onClick={() => toggleBookingOption(option.label)}
                >
                  <span className="text-xl">{option.icon}</span>
                  <span className="font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Standout stays */}
          <div className="py-6">
            <h3 className="text-lg font-semibold mb-4">Standout stays</h3>
            <button 
              className={`w-full flex items-center gap-3 p-4 border rounded-xl transition-all duration-200 ${
                isStandoutSelected
                  ? 'border-black bg-gray-50 shadow-sm'
                  : 'border-gray-300 hover:border-gray-500'
              }`}
              onClick={() => setIsStandoutSelected(!isStandoutSelected)}
            >
              <span className="text-xl">🏆</span>
              <div className="text-left">
                <div className="font-medium">Guest favourite</div>
                <div className="text-sm text-gray-500">The most loved homes on Airbnb</div>
              </div>
            </button>
          </div>

          {/* Collapsible sections */}
          <PropertyTypeSelector />
          <AccessibilityFeatures />
          <HostLanguageSelector />
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-5 flex items-center justify-between">
          <button 
            className="font-medium underline text-gray-800 hover:text-black transition-colors duration-200"
            onClick={handleClearAll}
          >
            Clear all
          </button>
          <button 
            className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-sm"
            onClick={onClose}
          >
            Show 1,000+ places
          </button>
        </div>
      </div>
    </div>
  )
}

export default Filters