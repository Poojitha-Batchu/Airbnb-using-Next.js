'use client'

import React, { useState } from 'react'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [noOfGuests, setNoOfGuests] = useState(1)

  return (
    <div className="flex flex-col col-span-3 mx-auto">
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Where are you going?"
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto p-4 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">Check-in Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="p-2 border rounded-md"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-gray-700">Check-out Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="p-2 border rounded-md"
                min={startDate || new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>
          <div className="flex items-center border-t mt-4 pt-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
            <div className="flex items-center">
              <button
                onClick={() => setNoOfGuests(Math.max(1, noOfGuests - 1))}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
              >
                -
              </button>
              <span className="mx-4">{noOfGuests}</span>
              <button
                onClick={() => setNoOfGuests(noOfGuests + 1)}
                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar 