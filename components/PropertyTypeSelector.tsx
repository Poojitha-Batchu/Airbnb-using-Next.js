'use client'

import { useState } from 'react'
import { ChevronUp, ChevronDown, Home, Building, Hotel, Landmark } from 'lucide-react'

const PropertyTypeSelector = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const toggleExpanded = () => setIsExpanded(!isExpanded)

  const propertyTypes = [
    { id: 'house', label: 'House', icon: <Home size={20} /> },
    { id: 'flat', label: 'Flat', icon: <Building size={20} /> },
    { id: 'guesthouse', label: 'Guest house', icon: <Landmark size={20} /> },
    { id: 'hotel', label: 'Hotel', icon: <Hotel size={20} /> }
  ]

  const handleSelectType = (id: string) => {
    setSelectedType(id === selectedType ? null : id)
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
      <div 
        className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
        onClick={toggleExpanded}
      >
        <h2 className="text-lg font-medium text-gray-800 flex items-center">
          <Building className="mr-2 text-gray-600" size={20} />
          Property type
        </h2>
        {isExpanded ? 
          <ChevronUp size={20} className="text-gray-600" /> : 
          <ChevronDown size={20} className="text-gray-600" />
        }
      </div>

      {isExpanded && (
        <div className="p-5 border-t border-gray-200 bg-white">
          <div className="flex flex-wrap gap-4">
            {propertyTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleSelectType(type.id)}
                className={`flex items-center gap-3 border rounded-lg px-5 py-3 transition-all duration-200 ${
                  selectedType === type.id 
                    ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-sm' 
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <span className={`${selectedType === type.id ? 'text-blue-600' : 'text-gray-600'}`}>
                  {type.icon}
                </span>
                <span className="font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default PropertyTypeSelector