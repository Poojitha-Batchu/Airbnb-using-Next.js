# Airbnb-using-Next.js - 🏠 Airbnb Clone

A modern, responsive Airbnb clone built with Next.js, TypeScript, and Tailwind CSS. This project includes features like property listings, user authentication, and an interactive chatbot for booking assistance.

## ✨ Features

### 🔐 User Authentication
- Sign up with email and password
- Login functionality
- Secure user sessions
- Profile management

### 🏡 Property Listings
- Grid layout of available properties
- Property details with images
- Filtering options
- Category-based navigation

### 🤖 Interactive Chatbot
- AI-powered booking assistant
- Step-by-step booking guidance
- Location selection
- Room type preferences
- Guest count selection
- Price range filtering
- Real-time responses
  

### 🎨 UI Features
- Responsive design
- Modern and clean interface
- Smooth animations
- Category navigation
- Search functionality
- User-friendly filters
  

## 🛠️ Tech Stack

- **Frontend Framework:** Next.js 13+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide Icons
- **Image Optimization:** Next.js Image Component
- **State Management:** React Hooks
- **Authentication:** Local Storage (Demo)
- **Animations:** CSS Transitions & Tailwind
  

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/airbnb-clone.git
```

2. Install dependencies:
```bash
cd airbnb-clone
npm install
```

3. Create necessary environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.
   

## 📁 Project Structure

```
airbnb-clone/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ChatBot.tsx
│   ├── Header.tsx
│   └── [other components]
├── public/
│   └── images/
│       ├── chatbot.png
│       └── [other images]
└── styles/
    └── globals.css
```


## 💡 Usage

### User Authentication
- Click "Sign Up" to create a new account
- Use email and password to log in
- Access your profile through the user menu

### Property Search
- Use the search bar to find properties by location
- Filter results using the category navigation
- Apply additional filters using the filter button

### Chatbot Booking Assistant
1. Click the chatbot icon in the bottom right
2. Follow the step-by-step booking process:
   - Select location
   - Choose property type
   - Specify guest count
   - Set price range
   - Confirm booking preferences
     

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Edit component-specific styles in their respective files
- Update global styles in `globals.css`

### Chatbot Responses
- Customize chatbot responses in `ChatBot.tsx`
- Modify the `responses` array to change questions and options
- Adjust timing and animations as needed
  

## 🙏 Acknowledgments

- Design inspired by [Airbnb](https://www.airbnb.com)
- Icons from [Lucide Icons](https://lucide.dev)
- Next.js team for the amazing framework

---

⭐️ Star this repo if you find it helpful! 
