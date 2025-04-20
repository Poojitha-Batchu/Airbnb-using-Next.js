'use client'

import React, { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import {MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import { MapIcon, HomeIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'
import { format, addMonths, isWithinInterval, startOfDay, isBefore, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addDays } from 'date-fns'
import Filters from './Filters'

interface Tab {
  id: string
  label: string
}

const tabs: Tab[] = [
  { id: 'stays', label: 'Stays' },
  { id: 'experiences', label: 'Experiences' }
]

const categoryIcons = [
  { icon: '🏡', label: 'Farms' },
  { icon: '🎨', label: 'Icons' },
  { icon: '🛏️', label: 'Rooms' },
  { icon: '🏊‍♂️', label: 'Amazing pools' },
  { icon: '🏠', label: 'Cabins' },
  { icon: '😮', label: 'OMG!' },
  { icon: '🌄', label: 'Amazing views' },
  { icon: '🌳', label: 'Countryside' },
  { icon: '🏖️', label: 'Beachfront' },
  { icon: '👑', label: 'Luxe' },
  { icon: '🌲', label: 'Treehouses' },
  { icon: '🏞️', label: 'National parks' },
  { icon: '🏝️', label: 'Islands' },
  { icon: '🏰', label: 'Castles' },
  { icon: '🌆', label: 'Top cities' },
  { icon: '🏛️', label: 'Mansions' },
  { icon: '🎯', label: 'Design' },
  { icon: '🏡', label: 'Tiny homes' },
  { icon: '🏺', label: 'Historical homes' },
  { icon: '❄️', label: 'Arctic' },
  { icon: '🌍', label: 'Earth homes' }
]
const destinations = [
  {
    icon: <MapIcon className="w-6 h-6 text-gray-600" />,
    title: 'Nearby',
    description: "Find what's around you",
    iconBg: 'bg-gray-100'
  },
  {
    icon: <HomeIcon className="w-6 h-6 text-rose-500" />,
    title: 'North Goa, Goa',
    description: 'Popular beach destination',
    iconBg: 'bg-rose-50'
  },
  {
    icon: <BuildingOffice2Icon className="w-6 h-6 text-gray-600" />,
    title: 'Puducherry, Puducherry',
    description: 'For sights like Sri Aurobindo Ashram',
    iconBg: 'bg-gray-50'
  },
  {
    icon: <HomeIcon className="w-6 h-6 text-blue-500" />,
    title: 'South Goa, Goa',
    description: 'For nature lovers',
    iconBg: 'bg-blue-50'
  },
  {
    icon: <BuildingOffice2Icon className="w-6 h-6 text-rose-500" />,
    title: 'Calangute, Goa',
    description: 'For its bustling nightlife',
    iconBg: 'bg-rose-50'
  },
  {
    icon: <HomeIcon className="w-6 h-6 text-gray-600" />,
    title: 'Tirupati, Andhra Pradesh',
    description: 'Popular with travellers near you',
    iconBg: 'bg-gray-50'
  },
  {
    icon: <BuildingOffice2Icon className="w-6 h-6 text-blue-500" />,
    title: 'Madikeri, Karnataka',
    description: 'A hidden gem',
    iconBg: 'bg-blue-50'
  },
  {
    icon: <HomeIcon className="w-6 h-6 text-rose-500" />,
    title: 'Anjuna, Goa',
    description: 'For its bustling nightlife',
    iconBg: 'bg-rose-50'
  },
  {
    icon: <BuildingOffice2Icon className="w-6 h-6 text-gray-600" />,
    title: 'Secunderabad, Telangana',
    description: 'Near you',
    iconBg: 'bg-gray-50'
  },
  {
    icon: <HomeIcon className="w-6 h-6 text-blue-500" />,
    title: 'Kondapur, Telangana',
    description: 'Off the beaten path',
    iconBg: 'bg-blue-50'
  },
  {
    icon: <BuildingOffice2Icon className="w-6 h-6 text-rose-500" />,
    title: 'Panaji, Goa',
    description: 'A hidden gem',
    iconBg: 'bg-rose-50'
  },
  {
    icon: <HomeIcon className="w-6 h-6 text-gray-600" />,
    title: 'Bengaluru, Karnataka',
    description: 'For sights like Lalbagh Botanical Garden',
    iconBg: 'bg-gray-50'
  }
]

interface DateRange {
  startDate: Date | null
  endDate: Date | null
}

interface GuestCounts {
  adults: number
  children: number
  infants: number
  pets: number
}

const ITEMS_PER_PAGE = 10

const NavbarSearch = () => {
  const router = useRouter()
  const [showDestinations, setShowDestinations] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showGuestPicker, setShowGuestPicker] = useState(false)
  const [selectedDestination, setSelectedDestination] = useState('')
  const [selectedView, setSelectedView] = useState('Dates')
  const [activeSection, setActiveSection] = useState<'where' | 'checkin' | 'checkout' | 'who' | null>(null)
  const [showTotalBeforeTaxes, setShowTotalBeforeTaxes] = useState(false)
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null
  })
  const [currentMonth, setCurrentMonth] = useState(new Date()) // Current month
  const [guests, setGuests] = useState<GuestCounts>({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
  })
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 10
  const [showFilters, setShowFilters] = useState(false)

  const generateMonthDays = (month: Date) => {
    const start = startOfMonth(month)
    const end = endOfMonth(month)
    const days = eachDayOfInterval({ start, end })
    
    const firstDayOfWeek = start.getDay()
    const emptyDays = Array(firstDayOfWeek).fill(null)
    
    return [...emptyDays, ...days]
  }

  const firstMonth = useMemo(() => generateMonthDays(currentMonth), [currentMonth])
  const secondMonth = useMemo(() => generateMonthDays(addMonths(currentMonth, 1)), [currentMonth])

  const visibleCategories = useMemo(() => {
    const start = currentPage * itemsPerPage
    return categoryIcons.slice(start, start + itemsPerPage)
  }, [currentPage])

  const totalPages = Math.ceil(categoryIcons.length / itemsPerPage)
  const isFirstPage = currentPage === 0
  const isLastPage = currentPage === totalPages - 1

  const isDateDisabled = (date: Date | null) => {
    if (!date) return true
    return isBefore(date, startOfDay(new Date()))
  }

  const handleDestinationClick = (destination: string) => {
    setSelectedDestination(destination)
    setShowDestinations(false)
    setShowDatePicker(false)
    setShowGuestPicker(false)
    setActiveSection('checkin')
  }

  const handleDateClick = (date: Date) => {
    if (isDateDisabled(date)) return

    if (!dateRange.startDate || (dateRange.startDate && dateRange.endDate)) {
      setDateRange({ startDate: date, endDate: null })
      setActiveSection('checkout')
    } else {
      if (isBefore(date, dateRange.startDate)) {
        setDateRange({ startDate: date, endDate: dateRange.startDate })
      } else {
        setDateRange({ ...dateRange, endDate: date })
      }
      setShowDatePicker(false)
    }
  }

  const getDateStyles = (date: Date | null) => {
    if (!date) return ''
    
    const isDisabled = isDateDisabled(date)
    const isSelected = dateRange.startDate && (
      isSameDay(date, dateRange.startDate) || 
      (dateRange.endDate && isSameDay(date, dateRange.endDate))
    )
    const isInRange = dateRange.startDate && dateRange.endDate && 
      isWithinInterval(date, { 
        start: startOfDay(dateRange.startDate), 
        end: startOfDay(dateRange.endDate) 
      })

    return `
      w-12 h-12 rounded-full flex items-center justify-center text-sm
      ${isDisabled ? 
        'text-gray-300 cursor-not-allowed' : 
        'hover:bg-gray-100 cursor-pointer'
      }
      ${isSelected ? 
        'bg-black text-white hover:bg-black' : 
        isInRange ? 'bg-gray-100' : ''
      }
      transition-all duration-200
    `
  }

  const formatDateDisplay = (date: Date | null) => {
    if (!date) return 'Add dates'
    return format(date, 'MMM d')
  }

  const getGuestsDisplay = () => {
    const total = guests.adults + guests.children
    const parts = []
    
    if (total > 0) {
      parts.push(`${total} guest${total !== 1 ? 's' : ''}`)
    }
    if (guests.infants > 0) {
      parts.push(`${guests.infants} infant${guests.infants !== 1 ? 's' : ''}`)
    }
    if (guests.pets > 0) {
      parts.push(`${guests.pets} pet${guests.pets !== 1 ? 's' : ''}`)
    }
    
    return parts.length > 0 ? parts.join(', ') : 'Add guests'
  }

  const handleGuestChange = (type: keyof GuestCounts, increment: boolean) => {
    setGuests(prev => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }))
  }

  const getSectionStyle = (section: 'where' | 'checkin' | 'checkout' | 'who') => {
    const isActive = section === activeSection
    const isFirst = section === 'where'
    const isLast = section === 'who'
    const roundedStyle = isFirst ? 'rounded-l-full' : isLast ? 'rounded-r-full' : ''
    
    return `${isActive ? 'bg-white shadow-sm' : activeSection !== null ? 'bg-[#e0e0e0]' : 'hover:bg-[#f0f0f0]'} 
            ${roundedStyle} rounded-full transition-all duration-200 ease-in-out`
  }

  const renderMonth = (days: (Date | null)[], monthDate: Date) => (
    <div className="flex-1 max-w-[340px]">
      <div className="text-center mb-6">
        <h2 className="text-base font-medium">
          {format(monthDate, 'MMMM yyyy')}
        </h2>
      </div>
      <div className="grid grid-cols-7 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="h-8 flex items-center justify-center text-xs text-gray-600">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, i) => (
          <div key={i} className="flex items-center justify-center p-[2px]">
            {date && (
              <button
                onClick={() => handleDateClick(date)}
                disabled={isDateDisabled(date)}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm
                  ${isDateDisabled(date) ? 
                    'text-gray-300 cursor-not-allowed' : 
                    'hover:bg-gray-100 cursor-pointer'
                  }
                  ${isSelected(date) ? 
                    'bg-black text-white hover:bg-black' : 
                    isInRange(date) ? 'bg-gray-100' : ''
                  }
                  transition-all duration-200
                `}
              >
                {format(date, 'd')}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  const isSelected = (date: Date) => {
    return dateRange.startDate && (
      isSameDay(date, dateRange.startDate) || 
      (dateRange.endDate && isSameDay(date, dateRange.endDate))
    )
  }

  const isInRange = (date: Date) => {
    return dateRange.startDate && dateRange.endDate && 
      isWithinInterval(date, { 
        start: startOfDay(dateRange.startDate), 
        end: startOfDay(dateRange.endDate) 
      })
  }

  const handleSearch = () => {
    // Store search data in localStorage if needed
    localStorage.setItem('searchData', JSON.stringify({
      destination: selectedDestination,
      dateRange,
      guests
    }))
    
    // Redirect to home page
    router.push('/')
    
    // Reset search state
    setShowDestinations(false)
    setShowDatePicker(false)
    setShowGuestPicker(false)
    setActiveSection(null)
  }

  return (
    <div className="flex justify-center py-4 relative w-full px-4 md:px-0 top-16">
      <div className="relative flex items-center border rounded-full shadow-md hover:shadow-lg transition-shadow w-full md:w-[55%] bg-white">
        <div className="flex items-center w-full">
          <div 
            className={`px-4 md:px-6 py-3 flex-1 md:w-1/2 cursor-pointer relative ${getSectionStyle('where')}`}
            onClick={() => {
              setShowDestinations(!showDestinations)
              setShowDatePicker(false)
              setShowGuestPicker(false)
              setActiveSection(activeSection === 'where' ? null : 'where')
            }}
          >
            <div className="text-[13px] font-semibold">Where</div>
            <input 
              type="text"
              placeholder="Search destinations"
              value={selectedDestination}
              className="text-[14px] text-gray-600 w-full focus:outline-none bg-transparent"
              readOnly
            />
            {showDestinations && (
              <div className="absolute top-[calc(100%+24px)] left-0 w-full md:w-[480px] bg-white rounded-3xl shadow-xl p-6 z-50">
                <div className="text-[14px] font-semibold mb-2 text-gray-500">Suggested destinations</div>
                <div className="space-y-1 max-h-[400px] overflow-y-auto custom-scrollbar">
                  {destinations.map((destination, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-4 p-3 hover:bg-gray-200 rounded-xl cursor-pointer"
                      onClick={() => handleDestinationClick(destination.title)}
                    >
                      <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${destination.iconBg}`}>
                        {destination.icon}
                      </div>
                      <div>
                        <div className="text-[14px] text-gray-800">{destination.title}</div>
                        <div className="text-[14px] text-gray-500">{destination.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div 
            className={`px-4 md:px-6 py-3 hidden md:block md:w-1/4 cursor-pointer ${getSectionStyle('checkin')}`}
            onClick={() => {
              setShowDatePicker(!showDatePicker)
              setShowDestinations(false)
              setShowGuestPicker(false)
              setActiveSection(activeSection === 'checkin' ? null : 'checkin')
            }}
          >
            <div className="text-[13px] font-semibold">Check in</div>
            <div className="text-[14px] text-gray-500">{formatDateDisplay(dateRange.startDate)}</div>
          </div>
          <div 
            className={`px-4 md:px-6 py-3 hidden md:block md:w-1/4 cursor-pointer ${getSectionStyle('checkout')}`}
            onClick={() => {
              setShowDatePicker(!showDatePicker)
              setShowDestinations(false)
              setShowGuestPicker(false)
              setActiveSection(activeSection === 'checkout' ? null : 'checkout')
            }}
          >
            <div className="text-[13px] font-semibold">Check out</div>
            <div className="text-[14px] text-gray-500">{formatDateDisplay(dateRange.endDate)}</div>
          </div>
          <div 
            className={`px-4 md:px-6 py-3 flex-1 md:w-1/2 cursor-pointer ${getSectionStyle('who')}`}
            onClick={() => {
              setShowGuestPicker(!showGuestPicker)
              setShowDatePicker(false)
              setShowDestinations(false)
              setActiveSection(activeSection === 'who' ? null : 'who')
            }}
          >
            <div className="text-[13px] font-semibold">Who</div>
            <div className="text-[14px] text-gray-500">{getGuestsDisplay()}</div>
          </div>
        </div>
        <button 
          onClick={handleSearch}
          className={`
            bg-[#FF385C] text-white rounded-full flex items-center justify-center 
            transition-all duration-200 ease-in-out hover:bg-[#D93B60]
            ${activeSection === null 
              ? 'p-3 w-12 h-12 mx-2' 
              : 'px-6 py-4 mx-3 space-x-2'
            }
          `}
        >
          <MagnifyingGlassIcon className="h-4 w-4" />
          {activeSection !== null && <span className="font-medium hidden md:inline">Search</span>}
        </button>
      </div>


        {showDatePicker && (
          <div className="absolute top-[calc(100%+24px)] left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-3xl shadow-xl p-8 z-50">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Select dates</h2>
            </div>

            {/* Arrows and calendar */}
            <div className="flex items-center justify-center mb-6 space-x-6">
              {/* Left Arrow */}
              <button 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setCurrentMonth(prev => addMonths(prev, -1))}
              >
                <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
              </button>

              {/* Calendar content */}
              <div className="flex space-x-12 justify-center">
                {renderMonth(firstMonth, currentMonth)}
                {renderMonth(secondMonth, addMonths(currentMonth, 1))}
              </div>

              {/* Right Arrow */}
              <button 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setCurrentMonth(prev => addMonths(prev, 1))}
              >
                <ChevronRightIcon className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        )}


      {showGuestPicker && (
        <div className="absolute top-[calc(100%+24px)] right-[10%] w-96 bg-white rounded-3xl shadow-xl p-6 z-50">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">Adults</div>
                <div className="text-sm text-gray-500">Ages 13 or above</div>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleGuestChange('adults', false)}
                  className={`p-2 rounded-full border ${guests.adults === 0 ? 'border-gray-200 text-gray-200' : 'border-gray-400 text-gray-600'} hover:border-gray-700`}
                  disabled={guests.adults === 0}
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <span className="w-6 text-center">{guests.adults}</span>
                <button 
                  onClick={() => handleGuestChange('adults', true)}
                  className="p-2 rounded-full border border-gray-400 text-gray-600 hover:border-gray-700"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">Children</div>
                <div className="text-sm text-gray-500">Ages 2–12</div>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleGuestChange('children', false)}
                  className={`p-2 rounded-full border ${guests.children === 0 ? 'border-gray-200 text-gray-200' : 'border-gray-400 text-gray-600'} hover:border-gray-700`}
                  disabled={guests.children === 0}
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <span className="w-6 text-center">{guests.children}</span>
                <button 
                  onClick={() => handleGuestChange('children', true)}
                  className="p-2 rounded-full border border-gray-400 text-gray-600 hover:border-gray-700"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">Infants</div>
                <div className="text-sm text-gray-500">Under 2</div>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleGuestChange('infants', false)}
                  className={`p-2 rounded-full border ${guests.infants === 0 ? 'border-gray-200 text-gray-200' : 'border-gray-400 text-gray-600'} hover:border-gray-700`}
                  disabled={guests.infants === 0}
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <span className="w-6 text-center">{guests.infants}</span>
                <button 
                  onClick={() => handleGuestChange('infants', true)}
                  className="p-2 rounded-full border border-gray-400 text-gray-600 hover:border-gray-700"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">Pets</div>
                <div className="text-sm text-gray-500 underline cursor-pointer">Bringing a service animal?</div>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handleGuestChange('pets', false)}
                  className={`p-2 rounded-full border ${guests.pets === 0 ? 'border-gray-200 text-gray-200' : 'border-gray-400 text-gray-600'} hover:border-gray-700`}
                  disabled={guests.pets === 0}
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <span className="w-6 text-center">{guests.pets}</span>
                <button 
                  onClick={() => handleGuestChange('pets', true)}
                  className="p-2 rounded-full border border-gray-400 text-gray-600 hover:border-gray-700"
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <hr className="absolute left-0 right-0 bottom-0 border-gray-200" />

      <div className="absolute left-0 right-0 top-[calc(100%+1px)] bg-white">
        <div className="relative max-w-[90%] mx-auto py-4">
          <div className="relative flex items-center">
            <div className="relative flex-1">
              <div className="relative mx-auto flex items-center" style={{ width: 'calc(56px * 10 + 2.5rem * 9)' }}>
                {currentPage > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                    <button 
                      className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
                      onClick={() => setCurrentPage(prev => prev - 1)}
                    >
                      <ChevronLeftIcon className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                )}

                <div className="overflow-hidden w-full mx-[40px]">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{
                      transform: `translateX(-${currentPage * (56 * 10 + 32 * 9)}px)`,
                    }}
                  >
                    {categoryIcons.map((option, index) => (
                      <div 
                        key={index}
                        className="flex-shrink-0 first:ml-0 ml-8"
                        style={{ width: '56px' }}
                      >
                        <button className="w-full flex flex-col items-center pb-4 relative group">
                          <div className="mb-1 text-2xl text-gray-500 transition-colors group-hover:text-rose-500">
                            {option.icon}
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap transition-colors group-hover:text-rose-500">
                            {option.label}
                          </span>
                          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-rose-500 transition-colors duration-200" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {currentPage < totalPages - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
                    <button 
                      className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
                      onClick={() => setCurrentPage(prev => prev + 1)}
                    >
                      <ChevronRightIcon className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button 
                className="h-12 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors flex items-center gap-2"
                onClick={() => setShowFilters(true)}
              >
                <AdjustmentsHorizontalIcon className="h-4 w-4" />
                <span className="text-sm font-medium">Filters</span>
              </button>

              <div className="h-14 px-4 rounded-xl bg-white flex items-center gap-3">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', height: '35px', width: '25px', fill: '#FF385C', transform: 'rotate(10deg)' }}>
                  <path d="M2 4v7.5c0 .5.2 1 .5 1.3l8.7 8.7c.7.7 1.8.7 2.5 0l7.5-7.5c.7-.7.7-1.8 0-2.5l-8.7-8.7c-.4-.3-.8-.5-1.3-.5H4c-1.1 0-2 .9-2 2z"></path>
                </svg>
                <span className="text-medium">Prices include all fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="absolute left-0 right-0 bottom-0 border-gray-200" />

      <Filters isOpen={showFilters} onClose={() => setShowFilters(false)} />
    </div>
  )
}

export default NavbarSearch