import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/navbar'
import MobileNav from '@/components/mobile-nav'
import Preloader from '@/components/preloader'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ReviewsPage from '@/pages/ReviewsPage'
import VidyajeevanPage from '@/pages/VidyajeevanPage'

function App() {
  return (
    <div className="font-sans antialiased">
      <Preloader />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/vidyajeevan" element={<VidyajeevanPage />} />
        </Routes>
      </main>
      <MobileNav />
    </div>
  )
}

export default App
