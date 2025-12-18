import { useEffect } from "react"
import ReviewsSection from "@/components/reviews-section"
import Footer from "@/components/footer"

export default function ReviewsPage() {
  useEffect(() => {
    document.title = "Student Reviews - Dr. Ravi Sharma"
  }, [])

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
         {/* Hero Section with YouTube Video */}
        <div className="relative min-h-screen bg-black">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/TzcOn93fvVM?autoplay=1&mute=1&controls=1&loop=1&playlist=TzcOn93fvVM"
            title="Student Success Stories"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Student Testimonials
              </h1>
              <p className="text-xl text-gray-200">
                Success Stories from Our Mentorship Program
              </p>
            </div>
          </div>
          </div>
      </div>
      <ReviewsSection />
      <Footer />
    </>
  )
}
