import { useEffect } from "react"
import ReviewsSection from "@/components/reviews-section"
import Footer from "@/components/footer"

export default function ReviewsPage() {
  useEffect(() => {
    document.title = "Student Reviews - Dr. Ravi Sharma"
  }, [])

  return (
    <>
      <div className="pt-24 pb-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Student Testimonials</h1>
          <p className="text-xl opacity-90">Success Stories from Our Mentorship Program</p>
        </div>
      </div>
      <ReviewsSection />
      <Footer />
    </>
  )
}
