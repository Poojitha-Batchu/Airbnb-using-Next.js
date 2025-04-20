'use client'

import { useState } from 'react'
import { ChevronUp, ChevronDown, Check } from 'lucide-react'

const HostLanguageSelector = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])

  const toggleExpanded = () => setIsExpanded(!isExpanded)

  const languages = [
    'English', 'French', 'German', 'Korean', 'Portuguese', 'Russian',
    'Spanish', 'Arabic', 'Danish', 'Dutch', 'Hindi', 'Indonesian',
    'Malay', 'Swedish', 'Thai', 'Bengali', 'Gujarati', 'Kannada'
  ]

  const handleLanguageToggle = (language: string) => {
    setSelectedLanguages(prev => 
      prev.includes(language) 
        ? prev.filter(lang => lang !== language)
        : [...prev, language]
    )
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
      <div 
        className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
        onClick={toggleExpanded}
      >
        <h2 className="text-lg font-medium text-gray-800 flex items-center">
          <svg className="mr-2 text-gray-600" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
            <path d="M2 12h20"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          Host language
        </h2>
        {isExpanded ? 
          <ChevronUp size={20} className="text-gray-600" /> : 
          <ChevronDown size={20} className="text-gray-600" />
        }
      </div>

      {isExpanded && (
        <div className="p-5 border-t border-gray-200 bg-white">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
            {languages.map(lang => (
              <label key={lang} className="flex items-center gap-3 group cursor-pointer">
                <div className="relative">
                  <input 
                    type="checkbox" 
                    className="peer sr-only"
                    checked={selectedLanguages.includes(lang)}
                    onChange={() => handleLanguageToggle(lang)}
                  />
                  <div className={`w-5 h-5 border rounded transition-all ${
                    selectedLanguages.includes(lang) 
                      ? 'bg-blue-500 border-blue-500' 
                      : 'border-gray-300 group-hover:border-gray-400'
                  }`}></div>
                  {selectedLanguages.includes(lang) && (
                    <Check size={14} className="absolute top-0.5 left-0.5 text-white" />
                  )}
                </div>
                <span className="text-gray-700 group-hover:text-gray-900 text-sm">{lang}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default HostLanguageSelector