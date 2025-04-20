import Header from '../components/Header'
import PropertyGrid from '../components/PropertyGrid'
import Footer from '@/components/Footer'
import ChatBot from "@/components/ChatBot";
import NavbarSearch from "@/components/NavbarSearch";

export default function Home() {
  return (
    <div>
      <Header />
      <NavbarSearch />
      <main className="pt-[80px]">
        {/* <CategoryBar /> */}
        <div className="py-8">
          <PropertyGrid />
          <ChatBot />
        </div>
      </main>
      <Footer />
    </div>
  )
} 