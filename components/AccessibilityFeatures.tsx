'use client'

import { useState } from 'react'
import { ChevronUp, ChevronDown, Check } from 'lucide-react'

const AccessibilityFeatures = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  
  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature)
        ? prev.filter(item => item !== feature)
        : [...prev, feature]
    )
  }
  
  const featureCategories = {
    "Guest entrance and parking": [
      "Step-free access",
      "Disabled parking spot",
      "Guest entrance wider than 32 inches (81 centimetres)"
    ],
    "Bedroom": [
      "Step-free bedroom access",
      "Bedroom entrance wider than 32 inches (81 centimetres)"
    ],
    "Bathroom": [
      "Step-free bathroom access",
      "Bathroom entrance wider than 32 inches (81 centimetres)",
      "Toilet grab bar",
      "Shower grab bar",
      "Step-free shower",
      "Shower or bath chair"
    ],
    "Adaptive equipment": [
      "Ceiling or mobile hoist"
    ]
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
      {/* Header with Collapse Button */}
      <div
        className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-medium text-gray-800 flex items-center">
          <svg className="mr-2 text-gray-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
            <path d="M9.5 15.5L4.5 12l5-3.5"/>
            <path d="M14.5 8.5l5 3.5-5 3.5"/>
          </svg>
          Accessibility features
        </h3>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-600" />
        )}
      </div>

      {/* Collapsible Content */}
      {isExpanded && (
        <div className="p-5 border-t border-gray-200 space-y-6 bg-white">
          {Object.entries(featureCategories).map(([category, features]) => (
            <div key={category} className="space-y-3">
              <h4 className="font-semibold text-gray-800">{category}</h4>
              <div className="space-y-2 pl-1">
                {features.map((feature) => (
                  <Checkbox 
                    key={feature} 
                    label={feature} 
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => toggleFeature(feature)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Reusable Checkbox Component with Interactive Style
const Checkbox = ({ 
  label, 
  checked, 
  onChange 
}: { 
  label: string; 
  checked: boolean; 
  onChange: () => void 
}) => (
  <label className="flex items-center space-x-3 cursor-pointer group">
    <div className="relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <div className={`w-5 h-5 border rounded transition-all ${
        checked 
          ? 'bg-blue-500 border-blue-500' 
          : 'border-gray-300 group-hover:border-gray-400'
      }`}></div>
      {checked && (
        <Check size={14} className="absolute top-0.5 left-0.5 text-white" />
      )}
    </div>
    <span className="text-gray-700 group-hover:text-gray-900 text-sm">{label}</span>
  </label>
)

export default AccessibilityFeatures