// 'use client'

// import { useState } from 'react'
// import Carousel from './Carousel'


// const properties = [
//   {
//     id: 1,
//     title: 'Mandrem Villa',
//     location: 'Mandrem, India',
//     price: 31377,
//     pricePerNight: 6275,
//     rating: 4.91,
//     distance: '541 kilometres away',
//     dates: '11-16 May',
//     totalNights: 5,
//     images: [
//       '../public/images/property-1/img-1.jpg',
//       '../public/images/property-1/img-2.jpg',
//       '../public/images/property-1/img-3.jpg',
//       '../public/images/property-1/img-4.jpg',
//       '../public/images/property-1/img-5.jpg',
//       '../public/images/property-1/img-6.jpg',
//       '../public/images/property-1/img-7.jpg',
//       '../public/images/property-1/img-8.jpg',
//       '../public/images/property-1/img-9.jpg',
//       '../public/images/property-1/img-10.jpg',
//     ]
//   },
//   {
//     id: 2,
//     title: 'Mandrem Villa',
//     location: 'Mandrem, India',
//     price: 31377,
//     pricePerNight: 6280,
//     rating: 4.91,
//     distance: '541 kilometres away',
//     dates: '11-16 May',
//     totalNights: 5,
//     images: [
//       '/images/property-1/img-1.jpg',
//       '/images/property-1/img-2.jpg',
//       '/images/property-1/img-3.jpg',
//       '/images/property-1/img-4.jpg',
//       '/images/property-1/img-5.jpg',
//       '/images/property-1/img-6.jpg',
//       '/images/property-1/img-7.jpg',
//       '/images/property-1/img-8.jpg',
//       '/images/property-1/img-9.jpg',
//       '/images/property-1/img-10.jpg',
//     ]
//   },
//   {
//     id: 3,
//     title: 'Mandrem Villa',
//     location: 'Mandrem, India',
//     price: 31377,
//     pricePerNight: 6280,
//     rating: 4.91,
//     distance: '541 kilometres away',
//     dates: '11-16 May',
//     totalNights: 5,
//     images: [
//       '/images/property-1/img-1.jpg',
//       '/images/property-1/img-2.jpg',
//       '/images/property-1/img-3.jpg',
//       '/images/property-1/img-4.jpg',
//       '/images/property-1/img-5.jpg',
//       '/images/property-1/img-6.jpg',
//       '/images/property-1/img-7.jpg',
//       '/images/property-1/img-8.jpg',
//       '/images/property-1/img-9.jpg',
//       '/images/property-1/img-10.jpg',
//     ]
//   },
//   {
//     id: 4,
//     title: 'Raja, India',
//     location: 'Raja, India',
//     price: 23474,
//     pricePerNight: 4695,
//     rating: 4.9,
//     distance: '531 kilometres away',
//     dates: '14-19 May',
//     totalNights: 5,
//     images: [
//       '/images/property-4/img-1.jpg',
//       '/images/property-4/img-2.jpg',
//       '/images/property-4/img-3.jpg',
//       '/images/property-4/img-4.jpg',
//       '/images/property-4/img-5.jpg'
//     ]
//   },
//   {
//     id: 5,
//     title: 'Madgaon, India',
//     location: 'Madgaon, India',
//     price: 20028,
//     pricePerNight:4006,
//     rating: 4.88,
//     distance: '531 kilometres away',
//     dates: '26 Apr-1 May',
//     totalNights: 5,
//     images: [
//       '/images/property-5/img-1.jpg',
//       '/images/property-5/img-2.jpg',
//       '/images/property-5/img-3.jpg',
//       '/images/property-5/img-4.jpg',
//       '/images/property-5/img-5.jpg'
//     ]
//   },
//   {
//     id: 6,
//     title: 'Bengaluru Urban, India',
//     location: 'Bengaluru Urban, India',
//     price: 93577,
//     pricePerNight:18715,
//     rating: 4.95,
//     distance: '475 kilometres away',
//     dates: '27 Apr-2 May',
//     totalNights: 5,
//     images: [
//       '/images/property-6/img-1.jpg',
//       '/images/property-6/img-2.jpg',
//       '/images/property-6/img-3.jpg',
//       '/images/property-6/img-4.jpg',
//       '/images/property-6/img-5.jpg'
//     ]
//   },
//   {
//     id: 7,
//     title: 'Siolim, India',
//     location: 'Siolim, India',
//     price: 46750,
//     pricePerNight:9350,
//     rating: 4.86,
//     distance: '538 kilometres away',
//     dates: '27 Apr-2 May',
//     totalNights: 5,
//     images: [
//       '/images/property-7/img-1.jpeg',
//       '/images/property-7/img-2.jpeg',
//       '/images/property-7/img-3.jpeg',
//       '/images/property-7/img-5.jpeg'
//     ]
//   },
//   {
//     id: 8,
//     title: 'Mandrem, India',
//     location: 'Mandrem, India',
//     price: 24277,
//     pricePerNight:6510,
//     rating: 4.88,
//     distance: '541 kilometres away',
//     dates: '8-13 May',
//     totalNights: 5,
//     images: [
//       '/images/property-1/img-1.jpg',
//       '/images/property-1/img-2.jpg',
//       '/images/property-1/img-3.jpg',
//       '/images/property-1/img-4.jpg',
//       '/images/property-1/img-5.jpg',
//       '/images/property-1/img-6.jpg',
//       '/images/property-1/img-7.jpg',
//       '/images/property-1/img-8.jpg',
//       '/images/property-1/img-9.jpg',
//       '/images/property-1/img-10.jpg',
//     ]
//   },
//   {
//     id: 9,
//     title: 'Assagao, India',
//     location: 'Assagao, India',
//     price: 84504,
//     pricePerNight:16901,
//     rating: 4.84,
//     distance: '539 kilometres away',
//     dates: '25-30 Apr',
//     totalNights: 5,
//     images: [
//       '/images/property-9/img-1.jpeg',
//       '/images/property-9/img-2.jpeg',
//       '/images/property-9/img-3.jpeg',
//       '/images/property-9/img-4.jpeg',
//       '/images/property-9/img-5.jpeg'
//     ]
//   },
//   {
//     id: 10,
//     title: 'Chikmagalur, India',
//     location: 'Chikmagalur, India',
//     price: 17118,
//     pricePerNight:3424,
//     rating: 4.81,
//     distance: '537 kilometres away',
//     dates: '20-25 Apr',
//     totalNights: 5,
//     images: [
//       '/images/property-10/img-1.jpg',
//       '/images/property-10/img-2.jpg',
//       '/images/property-10/img-3.jpg',
//       '/images/property-10/img-4.jpg',
//       '/images/property-10/img-5.jpg'
//     ]
//   },
//   {
//     id: 11,
//     title: 'Mahabaleshwar, India',
//     location: 'Mahabaleshwar, India',
//     price: 27000,
//     pricePerNight:5400,
//     rating: 4.95,
//     distance: '502 kilometres away',
//     dates: '1-6 Jun',
//     totalNights: 5,
//     images: [
//       '/images/property-11/img-1.jpg',
//       '/images/property-11/img-2.jpg',
//       '/images/property-11/img-3.jpg',
//       '/images/property-11/img-4.jpg',
//       '/images/property-11/img-5.jpg'
//     ]
//   },
//   {
//     id: 12,
//     title: 'Pune, India',
//     location: 'Pune, India',
//     price: 19855,
//     pricePerNight:4571,
//     rating: 4.92,
//     distance: '523 kilometres away',
//     dates: '26 Apr-1 May',
//     totalNights: 5,
//     images: [
//       '/images/property-12/img-1.jpg',
//       '/images/property-12/img-2.jpg',
//       '/images/property-12/img-3.jpg',
//       '/images/property-12/img-4.jpg',
//       '/images/property-12/img-5.jpg'
//     ]
//   },
//   {
//     id: 13,
//     title: 'Vagator, Anjuna, India',
//     location: 'Vagator, Anjuna, India',
//     price: 59110,
//     pricePerNight:11822,
//     rating: 4.98,
//     distance: '541 kilometres away',
//     dates: '29 Apr-4 May',
//     totalNights: 5,
//     images: [
//       '/images/property-13/img-1.jpg',
//       '/images/property-13/img-2.jpg',
//       '/images/property-13/img-3.jpg',
//       '/images/property-13/img-4.jpg',
//       '/images/property-13/img-5.jpg'
//     ]
//   },
//   {
//     id: 14,
//     title: 'Bilagola, India',
//     location: 'Bilagola, India',
//     price: 21391,
//     pricePerNight:4278,
//     rating: 4.96,
//     distance: '559 kilometres away',
//     dates: '4-9 May',
//     totalNights: 5,
//     images: [
//       '/images/property-14/img-1.jpg',
//       '/images/property-14/img-2.jpg',
//       '/images/property-14/img-3.jpg',
//       '/images/property-14/img-4.jpg',
//       '/images/property-14/img-5.jpg'
//     ]
//   },
//   {
//     id: 15,
//     title: 'Assago, India',
//     location: 'Assago, India',
//     price: 45647,
//     pricePerNight:9129,
//     rating: 4.79,
//     distance: '538 kilometres away',
//     dates: '4-9 May',
//     totalNights: 5,
//     images: [
//       '/images/property-9/img-1.jpeg',
//       '/images/property-9/img-2.jpeg',
//       '/images/property-9/img-3.jpeg',
//       '/images/property-9/img-4.jpeg',
//       '/images/property-9/img-5.jpeg'
//     ]
//   },
//   {
//     id: 16,
//     title: 'Chevella, India',
//     location: 'Chevella, India',
//     price: 65618,
//     pricePerNight:13124,
//     rating: 4.88,
//     distance: '40 kilometres away',
//     dates: '28 Apr-3 May',
//     totalNights: 5,
//     images: [
//       '/images/property-16/img-1.jpg',
//       '/images/property-16/img-2.jpg',
//       '/images/property-16/img-3.jpg',
//       '/images/property-16/img-4.jpg',
//       '/images/property-16/img-5.jpg'
//     ]
//   }
// ]

// const PropertyGrid = () => {
//   const [showAll, setShowAll] = useState(false)
//   const visibleProperties = showAll ? properties : properties.slice(0, 8)

//   return (
//     <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {visibleProperties.map((property) => (
//           <Carousel
//             key={property.id}
//             images={property.images}
//             title={property.title}
//             location={property.location}
//             price={property.price}
//             pricePerNight={property.pricePerNight}
//             rating={property.rating}
//             distance={property.distance}
//             dates={property.dates}
//             totalNights={property.totalNights}
//           />
//         ))}
//       </div>
      
//       {!showAll && properties.length > 8 && (
//         <div className="mt-24 flex justify-center">
//           <button
//             onClick={() => setShowAll(true)}
//             className="bg-rose-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
//           >
//             Explore More
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

// export default PropertyGrid 


'use client'

import { useState } from 'react'
import Carousel from './Carousel'
import { usePathname } from 'next/navigation'

const PropertyGrid = () => {
  const [showAll, setShowAll] = useState(false)
  const pathname = usePathname()
  
  // Determine base URL for GitHub Pages deployment
  const basePath = process.env.NODE_ENV === 'production' 
    ? pathname.split('/').slice(0, 2).join('/') // This will extract the repo name part
    : ''
  
  const properties = [
    {
      id: 1,
      title: 'Mandrem Villa',
      location: 'Mandrem, India',
      price: 31377,
      pricePerNight: 6275,
      rating: 4.91,
      distance: '541 kilometres away',
      dates: '11-16 May',
      totalNights: 5,
      images: [
        `${basePath}/images/property-1/img-1.jpg`,
        `${basePath}/images/property-1/img-2.jpg`,
        `${basePath}/images/property-1/img-3.jpg`,
        `${basePath}/images/property-1/img-4.jpg`,
        `${basePath}/images/property-1/img-5.jpg`,
        `${basePath}/images/property-1/img-6.jpg`,
        `${basePath}/images/property-1/img-7.jpg`,
        `${basePath}/images/property-1/img-8.jpg`,
        `${basePath}/images/property-1/img-9.jpg`,
        `${basePath}/images/property-1/img-10.jpg`,
      ]
    },
    {
      id: 2,
      title: 'Mandrem Villa',
      location: 'Mandrem, India',
      price: 31377,
      pricePerNight: 6280,
      rating: 4.91,
      distance: '541 kilometres away',
      dates: '11-16 May',
      totalNights: 5,
      images: [
        `${basePath}/images/property-1/img-1.jpg`,
        `${basePath}/images/property-1/img-2.jpg`,
        `${basePath}/images/property-1/img-3.jpg`,
        `${basePath}/images/property-1/img-4.jpg`,
        `${basePath}/images/property-1/img-5.jpg`,
        `${basePath}/images/property-1/img-6.jpg`,
        `${basePath}/images/property-1/img-7.jpg`,
        `${basePath}/images/property-1/img-8.jpg`,
        `${basePath}/images/property-1/img-9.jpg`,
        `${basePath}/images/property-1/img-10.jpg`,
      ]
    },
    {
      id: 3,
      title: 'Mandrem Villa',
      location: 'Mandrem, India',
      price: 31377,
      pricePerNight: 6280,
      rating: 4.91,
      distance: '541 kilometres away',
      dates: '11-16 May',
      totalNights: 5,
      images: [
        `${basePath}/images/property-1/img-1.jpg`,
        `${basePath}/images/property-1/img-2.jpg`,
        `${basePath}/images/property-1/img-3.jpg`,
        `${basePath}/images/property-1/img-4.jpg`,
        `${basePath}/images/property-1/img-5.jpg`,
        `${basePath}/images/property-1/img-6.jpg`,
        `${basePath}/images/property-1/img-7.jpg`,
        `${basePath}/images/property-1/img-8.jpg`,
        `${basePath}/images/property-1/img-9.jpg`,
        `${basePath}/images/property-1/img-10.jpg`,
      ]
    },
    {
      id: 4,
      title: 'Raja, India',
      location: 'Raja, India',
      price: 23474,
      pricePerNight: 4695,
      rating: 4.9,
      distance: '531 kilometres away',
      dates: '14-19 May',
      totalNights: 5,
      images: [
        `${basePath}/images/property-4/img-1.jpg`,
        `${basePath}/images/property-4/img-2.jpg`,
        `${basePath}/images/property-4/img-3.jpg`,
        `${basePath}/images/property-4/img-4.jpg`,
        `${basePath}/images/property-4/img-5.jpg`
      ]
    },
    {
      id: 5,
      title: 'Madgaon, India',
      location: 'Madgaon, India',
      price: 20028,
      pricePerNight:4006,
      rating: 4.88,
      distance: '531 kilometres away',
      dates: '26 Apr-1 May',
      totalNights: 5,
      images: [
        `${basePath}/images/property-5/img-1.jpg`,
        `${basePath}/images/property-5/img-2.jpg`,
        `${basePath}/images/property-5/img-3.jpg`,
        `${basePath}/images/property-5/img-4.jpg`,
        `${basePath}/images/property-5/img-5.jpg`
      ]
    },
    {
      id: 6,
      title: 'Bengaluru Urban, India',
      location: 'Bengaluru Urban, India',
      price: 93577,
      pricePerNight:18715,
      rating: 4.95,
      distance: '475 kilometres away',
      dates: '27 Apr-2 May',
      totalNights: 5,
      images: [
        `${basePath}/images/property-6/img-1.jpg`,
        `${basePath}/images/property-6/img-2.jpg`,
        `${basePath}/images/property-6/img-3.jpg`,
        `${basePath}/images/property-6/img-4.jpg`,
        `${basePath}/images/property-6/img-5.jpg`
      ]
    },
    {
      id: 7,
      title: 'Siolim, India',
      location: 'Siolim, India',
      price: 46750,
      pricePerNight:9350,
      rating: 4.86,
      distance: '538 kilometres away',
      dates: '27 Apr-2 May',
      totalNights: 5,
      images: [
        `${basePath}/images/property-7/img-1.jpeg`,
        `${basePath}/images/property-7/img-2.jpeg`,
        `${basePath}/images/property-7/img-3.jpeg`,
        `${basePath}/images/property-7/img-5.jpeg`
      ]
    },
    {
      id: 8,
      title: 'Mandrem, India',
      location: 'Mandrem, India',
      price: 24277,
      pricePerNight:6510,
      rating: 4.88,
      distance: '541 kilometres away',
      dates: '8-13 May',
      totalNights: 5,
      images: [
        `${basePath}/images/property-1/img-1.jpg`,
        `${basePath}/images/property-1/img-2.jpg`,
        `${basePath}/images/property-1/img-3.jpg`,
        `${basePath}/images/property-1/img-4.jpg`,
        `${basePath}/images/property-1/img-5.jpg`,
        `${basePath}/images/property-1/img-6.jpg`,
        `${basePath}/images/property-1/img-7.jpg`,
        `${basePath}/images/property-1/img-8.jpg`,
        `${basePath}/images/property-1/img-9.jpg`,
        `${basePath}/images/property-1/img-10.jpg`,
      ]
    },
    {
      id: 9,
      title: 'Assagao, India',
      location: 'Assagao, India',
      price: 84504,
      pricePerNight:16901,
      rating: 4.84,
      distance: '539 kilometres away',
      dates: '25-30 Apr',
      totalNights: 5,
      images: [
        `${basePath}/images/property-9/img-1.jpeg`,
        `${basePath}/images/property-9/img-2.jpeg`,
        `${basePath}/images/property-9/img-3.jpeg`,
        `${basePath}/images/property-9/img-4.jpeg`,
        `${basePath}/images/property-9/img-5.jpeg`
      ]
    },
    {
      id: 10,
      title: 'Chikmagalur, India',
      location: 'Chikmagalur, India',
      price: 17118,
      pricePerNight:3424,
      rating: 4.81,
      distance: '537 kilometres away',
      dates: '20-25 Apr',
      totalNights: 5,
      images: [
        `${basePath}/images/property-10/img-1.jpg`,
        `${basePath}/images/property-10/img-2.jpg`,
        `${basePath}/images/property-10/img-3.jpg`,
        `${basePath}/images/property-10/img-4.jpg`,
        `${basePath}/images/property-10/img-5.jpg`
      ]
    },
    {
      id: 11,
      title: 'Mahabaleshwar, India',
      location: 'Mahabaleshwar, India',
      price: 27000,
      pricePerNight:5400,
      rating: 4.95,
      distance: '502 kilometres away',
      dates: '1-6 Jun',
      totalNights: 5,
      images: [
        `${basePath}/images/property-11/img-1.jpg`,
        `${basePath}/images/property-11/img-2.jpg`,
        `${basePath}/images/property-11/img-3.jpg`,
        `${basePath}/images/property-11/img-4.jpg`,
        `${basePath}/images/property-11/img-5.jpg`
      ]
    },
    {
      id: 12,
      title: 'Pune, India',
      location: 'Pune, India',
      price: 19855,
      pricePerNight:4571,
      rating: 4.92,
      distance: '523 kilometres away',
      dates: '26 Apr-1 May',
      totalNights: 5,
      images: [
        `${basePath}/images/property-12/img-1.jpg`,
        `${basePath}/images/property-12/img-2.jpg`,
        `${basePath}/images/property-12/img-3.jpg`,
        `${basePath}/images/property-12/img-4.jpg`,
        `${basePath}/images/property-12/img-5.jpg`
      ]
    },
    {
      id: 13,
      title: 'Vagator, Anjuna, India',
      location: 'Vagator, Anjuna, India',
      price: 59110,
      pricePerNight:11822,
      rating: 4.98,
      distance: '541 kilometres away',
      dates: '29 Apr-4 May',
      totalNights: 5,
      images: [
        `${basePath}/images/property-13/img-1.jpg`,
        `${basePath}/images/property-13/img-2.jpg`,
        `${basePath}/images/property-13/img-3.jpg`,
        `${basePath}/images/property-13/img-4.jpg`,
        `${basePath}/images/property-13/img-5.jpg`
      ]
    },
    {
      id: 14,
      title: 'Bilagola, India',
      location: 'Bilagola, India',
      price: 21391,
      pricePerNight:4278,
      rating: 4.96,
      distance: '559 kilometres away',
      dates: '4-9 May',
      totalNights: 5,
      images: [
        `${basePath}/images/property-14/img-1.jpg`,
        `${basePath}/images/property-14/img-2.jpg`,
        `${basePath}/images/property-14/img-3.jpg`,
        `${basePath}/images/property-14/img-4.jpg`,
        `${basePath}/images/property-14/img-5.jpg`
      ]
    },
    {
      id: 15,
      title: 'Assago, India',
      location: 'Assago, India',
      price: 45647,
      pricePerNight:9129,
      rating: 4.79,
      distance: '538 kilometres away',
      dates: '4-9 May',
      totalNights: 5,
      images: [
        `${basePath}/images/property-9/img-1.jpeg`,
        `${basePath}/images/property-9/img-2.jpeg`,
        `${basePath}/images/property-9/img-3.jpeg`,
        `${basePath}/images/property-9/img-4.jpeg`,
        `${basePath}/images/property-9/img-5.jpeg`
      ]
    },
    {
      id: 16,
      title: 'Chevella, India',
      location: 'Chevella, India',
      price: 65618,
      pricePerNight:13124,
      rating: 4.88,
      distance: '40 kilometres away',
      dates: '28 Apr-3 May',
      totalNights: 5,
      images: [
        `${basePath}/images/property-16/img-1.jpg`,
        `${basePath}/images/property-16/img-2.jpg`,
        `${basePath}/images/property-16/img-3.jpg`,
        `${basePath}/images/property-16/img-4.jpg`,
        `${basePath}/images/property-16/img-5.jpg`
      ]
    }
  ]
  
  const visibleProperties = showAll ? properties : properties.slice(0, 8)

  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleProperties.map((property) => (
          <Carousel
            key={property.id}
            images={property.images}
            title={property.title}
            location={property.location}
            price={property.price}
            pricePerNight={property.pricePerNight}
            rating={property.rating}
            distance={property.distance}
            dates={property.dates}
            totalNights={property.totalNights}
          />
        ))}
      </div>
      
      {!showAll && properties.length > 8 && (
        <div className="mt-24 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="bg-rose-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Explore More
          </button>
        </div>
      )}
    </div>
  )
}

export default PropertyGrid
