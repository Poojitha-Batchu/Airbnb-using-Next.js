'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

interface LocationItem {
  city: string;
  type?: string;
  region?: string;
  location?: string;
}

type TabContent = {
  [key: string]: LocationItem[];
}

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [activeTab, setActiveTab] = useState('Popular')
  const [activeCategory, setActiveCategory] = useState('')

  const tabs = [
    'Popular',
    'Arts & culture',
    'Outdoors',
    'Mountains',
    'Beach',
    'Unique stays',
    'Categories',
    'Things to do'
  ]

  const locationsByTab: TabContent = {
    'Popular': [
      { city: 'Canmore', type: 'Pet-friendly rentals' },
      { city: 'Tucson', type: 'Rentals with pools' },
      { city: 'Anaheim', type: 'Apartment rentals' },
      { city: 'Benalmádena', type: 'Flat rentals' },
      { city: 'Marbella', type: 'House rentals' },
      { city: 'Mijas', type: 'Flat rentals' },
      { city: 'Prescott', type: 'Cabin rentals' },
      { city: 'Scottsdale', type: 'Flat rentals' },
      { city: 'Jasper', type: 'Cabin rentals' },
      { city: 'Mountain View', type: 'Cabin rentals' },
      { city: 'Devonport', type: 'Cottage rentals' },
      { city: 'Mallacoota', type: 'Pet-friendly rentals' },
      { city: 'Ibiza', type: 'Holiday rentals' },
      { city: 'Monterey', type: 'Bungalow rentals' },
      { city: 'Paso Robles', type: 'Cottage rentals' },
      { city: 'Santa Barbara', type: 'Pet-friendly rentals' },
      { city: 'Sonoma', type: 'House rentals' }
    ],
    'Arts & culture': [
      { city: 'Phoenix', type: 'House rentals' },
      { city: 'Hot Springs', type: 'House rentals' },
      { city: 'Los Angeles', type: 'Bed and breakfasts' },
      { city: 'San Diego', type: 'Bungalow rentals' },
      { city: 'San Francisco', type: 'Holiday rentals' },
      { city: 'Barcelona', type: 'Holiday rentals' },
      { city: 'Prague', type: 'Holiday rentals' },
      { city: 'Washington', type: 'Flat rentals' },
      { city: 'Keswick', type: 'Cottage rentals' },
      { city: 'London', type: 'Villa rentals' },
      { city: 'Scarborough', type: 'Holiday rentals' },
      { city: 'Sherwood Forest', type: 'Cabin rentals' },
      { city: 'York', type: 'Flat rentals' },
      { city: 'Paris', type: 'Flat rentals' },
      { city: 'Rhodes', type: 'House rentals' },
      { city: 'Nashville', type: 'Holiday rentals' },
      { city: 'Dublin', type: 'House rentals' }
    ],
    'Outdoors': [
      { city: 'Lake Martin', type: 'Pet-friendly rentals' },
      { city: 'Banff', type: 'Apartment rentals' },
      { city: 'Nerja', type: 'Flat rentals' },
      { city: 'Greer', type: 'Cabin rentals' },
      { city: 'Lake Havasu City', type: 'House rentals' },
      { city: 'Lake Powell', type: 'Holiday rentals' },
      { city: 'North Rim', type: 'Holiday rentals' },
      { city: 'Payson', type: 'Holiday rentals' },
      { city: 'Pinetop-Lakeside', type: 'Cabin rentals' },
      { city: 'Red Rock', type: 'Cabin rentals' },
      { city: 'Dinner Plain', type: 'Pet-friendly rentals' },
      { city: 'Streaky Bay', type: 'Holiday rentals' },
      { city: 'Emerald Lake', type: 'Cabin rentals' },
      { city: 'Vancouver Island', type: 'Pet-friendly rentals' },
      { city: 'Victoria', type: 'Flat rentals' },
      { city: 'Idyllwild-Pine Cove', type: 'Cabin rentals' },
      { city: 'Mammoth Lakes', type: 'Holiday rentals' }
    ],
    'Mountains': [
      { city: 'Mentone', type: 'House rentals' },
      { city: 'Sedona', type: 'Villa rentals' },
      { city: 'Helen', type: 'Apartment rentals' },
      { city: 'Pine Mountain', type: 'Holiday rentals' },
      { city: 'Stone Mountain', type: 'Cabin rentals' },
      { city: 'Island Park', type: 'House rentals' },
      { city: 'Blue Mountains', type: 'House rentals' },
      { city: 'Asheville', type: 'Cottage rentals' },
      { city: 'Blowing Rock', type: 'Cottage rentals' },
      { city: 'Boone', type: 'Holiday rentals' },
      { city: 'Hochatown', type: 'Holiday rentals' },
      { city: 'Pigeon Forge', type: 'Holiday rentals' },
      { city: 'Townsend', type: 'Holiday rentals' },
      { city: 'Wears Valley', type: 'Holiday rentals' },
      { city: 'Cabins', type: 'Holiday rentals' }
    ],
    'Beach': [
      { city: 'Dauphin Island', type: 'Rentals with pools' },
      { city: 'Fort Morgan', type: 'Holiday rentals' },
      { city: 'Gulf Shores', type: 'Holiday rentals' },
      { city: 'Bruny Island', type: 'Holiday rentals' },
      { city: 'Crescent Head', type: 'Beach house rentals' },
      { city: 'Gerringong', type: 'Holiday rentals' },
      { city: 'Hamilton Island', type: 'House rentals' },
      { city: 'Lancelin', type: 'Holiday rentals' },
      { city: 'Melbourne Beach', type: 'Beach apartment rentals' },
      { city: 'Moonta Bay', type: 'Beachfront rentals' },
      { city: 'Ocean Grove', type: 'Cabin rentals' },
      { city: 'Majorca', type: 'Pet-friendly rentals' },
      { city: 'Big Sur', type: 'Cabin rentals' },
      { city: 'Bodega Bay', type: 'Holiday rentals' },
      { city: 'Cambria', type: 'Pet-friendly rentals' },
      { city: 'Cayucos', type: 'Holiday rentals' },
      { city: 'Huntington Beach', type: 'Flat rentals' }
    ],
    'Unique stays': [
      { city: 'Yurt Rentals', location: 'United States' },
      { city: 'Yurt Rentals', location: 'United Kingdom' },
      { city: 'Castle Rentals', location: 'United States' },
      { city: 'Houseboats', location: 'United States' },
      { city: 'Holiday Caravans', location: 'United Kingdom' },
      { city: 'Private Island Rentals', location: 'United States' },
      { city: 'Farm Houses', location: 'United States' },
      { city: 'Farm Cottages', location: 'United Kingdom' },
      { city: 'Cabin Rentals', location: 'Australia' },
      { city: 'Luxury Cabins', location: 'United Kingdom' },
      { city: 'Luxury Cabins', location: 'United States' },
      { city: 'Holiday Chalets', location: 'United Kingdom' },
      { city: 'Cottage Rentals', location: 'United States' },
      { city: 'Holiday Cottages', location: 'United Kingdom' },
      { city: 'Mansion Rentals', location: 'United States' },
      { city: 'Villa Rentals', location: 'United Kingdom' },
      { city: 'Holiday Bungalows', location: 'United Kingdom' }
    ],
    'Categories': [
      { city: 'Amazing pools', location: '' },
      { city: 'Arctic', location: '' },
      { city: 'Camping', location: '' },
      { city: 'Camper vans', location: '' },
      { city: 'Castles', location: '' },
      { city: 'Containers', location: '' },
      { city: 'Countryside', location: '' },
      { city: 'Design', location: '' },
      { city: 'Earth homes', location: '' },
      { city: 'Farms', location: '' },
      { city: 'National parks', location: '' },
      { city: 'Vineyards', location: '' },
      { city: 'OMG!', location: '' },
      { city: 'Tiny homes', location: '' },
      { city: 'Towers', location: '' },
      { city: 'Windmills', location: '' },
      { city: 'Luxe', location: '' }
    ],
    'Things to do': [
      { city: 'London', region: 'England' },
      { city: 'Paris', region: 'Île-de-France' },
      { city: 'New York', region: 'New York' },
      { city: 'Barcelona', region: 'Catalonia' },
      { city: 'İstanbul', region: 'Istanbul' },
      { city: 'Bali', region: 'Indonesia' },
      { city: 'Amsterdam', region: 'North Holland' },
      { city: 'Miami', region: 'Florida' },
      { city: 'Madrid', region: 'Community of Madrid' },
      { city: 'Los Angeles', region: 'California' },
      { city: 'Rome', region: 'Lazio' },
      { city: 'Lisbon', region: 'Lisbon' },
      { city: 'Tokyo', region: 'Tokyo Prefecture' },
      { city: 'Vienna', region: 'Vienna' },
      { city: 'Athens', region: 'Greece' },
      { city: 'Prague', region: 'Czechia' },
      { city: 'Orlando', region: 'Florida' }
    ]
  }

  const footerSections = [
    {
      title: 'Support',
      links: [
        { text: 'Help Centre', href: '#' },
        { text: 'AirCover', href: '#' },
        { text: 'Anti-discrimination', href: '#' },
        { text: 'Disability support', href: '#' },
        { text: 'Cancellation options', href: '#' },
        { text: 'Report neighbourhood concern', href: '#' },
      ],
    },
    {
      title: 'Hosting',
      links: [
        { text: 'Airbnb your home', href: '#' },
        { text: 'AirCover for Hosts', href: '#' },
        { text: 'Hosting resources', href: '#' },
        { text: 'Community forum', href: '#' },
        { text: 'Hosting responsibly', href: '#' },
        { text: 'Join a free Hosting class', href: '#' },
        { text: 'Find a co-host', href: '#' },
      ],
    },
    {
      title: 'Airbnb',
      links: [
        { text: 'Newsroom', href: '#' },
        { text: 'New features', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Investors', href: '#' },
        { text: 'Airbnb.org emergency stays', href: '#' },
      ],
    },
  ]

  return (
    <footer className="border-t bg-gray-100 text-1xl">
      <div className="max-w-7xl mx-auto px-1 py-12">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6 text-rose-500">Inspiration for future getaways</h2>

        {/* Tabs */}
        <div className="border-b mb-6">
          <div className="flex overflow-x-auto space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 text-sm whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-b-2 border-rose-500 text-rose-500 font-medium'
                    : 'text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {locationsByTab[activeTab] && (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {locationsByTab[activeTab].map((item) => (
                <div key={item.city} className="space-y-1">
                  <h3 className="text-sm font-medium">{item.city}</h3>
                  {item.type && <p className="text-xs text-gray-500">{item.type}</p>}
                  {item.region && <p className="text-xs text-gray-500">{item.region}</p>}
                  {item.location && <p className="text-xs text-gray-500">{item.location}</p>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-rose-500 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href} className="text-sm text-gray-600 hover:underline">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-sm text-gray-600">
              © {currentYear} Airbnb, Inc.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-sm text-gray-600 hover:underline">Privacy</Link>
              <span className="text-gray-300">·</span>
              <Link href="#" className="text-sm text-gray-600 hover:underline">Terms</Link>
              <span className="text-gray-300">·</span>
              <Link href="#" className="text-sm text-gray-600 hover:underline">Sitemap</Link>
              <span className="text-gray-300">·</span>
              <Link href="#" className="text-sm text-gray-600 hover:underline">Company details</Link>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <button className="text-sm font-medium flex items-center space-x-2">
                <span>🌐</span>
                <span>English (IN)</span>
              </button>
              <button className="text-sm font-medium flex items-center space-x-2">
                <span>₹</span>
                <span>INR</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="https://www.facebook.com/AirbnbIndia" 
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link 
                href="https://x.com/airbnb_in" 
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.instagram.com/airbnb/" 
                className="text-gray-600 hover:text-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 