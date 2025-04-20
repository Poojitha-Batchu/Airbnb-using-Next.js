// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

//  // Adjust image paths for GitHub Pages deployment
//   const getImagePath = (imagePath: string) => {
//     // If image path already starts with a URL (http/https), don't modify it
//     if (imagePath.startsWith('http')) {
//       return imagePath
//     }
    
//     // If image is using a relative path, prepend the basePath
//     // Make sure the path starts with a slash
//     const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`
//     return `/Airbnb-using-Next.js${normalizedPath}`
//   }

// export const metadata = {
//   title: 'Airbnb Clone',
//   description: 'A clone of the Airbnb website',
//   icons: {
//     icon: {getImagePath(images['/favicon.ico'])},
//   },
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// } 

import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Adjust image paths for GitHub Pages deployment
const getImagePath = (imagePath: string) => {
  if (imagePath.startsWith('http')) return imagePath;
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `/Airbnb-using-Next.js${normalizedPath}`; // your basePath
};

const faviconPath = getImagePath('/images/favicon.ico');

export const metadata = {
  title: 'Airbnb Clone',
  description: 'A clone of the Airbnb website',
  icons: {
    icon: faviconPath,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
