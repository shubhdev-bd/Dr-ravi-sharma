import { useEffect } from "react"
import VidyajeevanSection from "@/components/vidyajeevan-section"
import Footer from "@/components/footer"

export default function VidyajeevanPage() {
  useEffect(() => {
    document.title = "Vidyajeevan - Dr. Ravi Sharma"
  }, [])

  return (
    <>
      <div className="pt-24 pb-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Vidyajeevan Framework</h1>
          <p className="text-xl opacity-90">Transforming Education Through Structured Mentorship</p>
        </div>
      </div>
      <VidyajeevanSection />
      <Footer />
    </>
  )
}
