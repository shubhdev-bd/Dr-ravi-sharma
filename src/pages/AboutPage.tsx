import { useEffect } from "react"
import Footer from "@/components/footer"
import AboutSection from "@/components/about-section"

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Dr. Ravi Sharma - Education Mentor"
  }, [])

  return (
    <>
      <div className="pt-24 pb-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-primary">About Dr. Ravi Sharma</h1>
          <p className="text-xl text-foreground/70">Dedicated to Excellence in Education</p>
        </div>
      </div>
      <AboutSection />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                To empower students with knowledge, skills, and guidance that enable them to achieve their full
                potential and succeed in their chosen paths. We believe in holistic development that goes beyond
                academics to build character, confidence, and critical thinking abilities.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                To be recognized as a leading force in educational mentorship, creating a generation of well-rounded
                individuals who contribute positively to society. We aim to revolutionize the mentorship landscape
                through innovative approaches and personalized guidance.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Our Approach</h2>
              <p className="text-foreground/80 leading-relaxed text-lg mb-4">
                Dr. Ravi Sharma's methodology combines traditional teaching wisdom with modern educational psychology.
                Each student receives:
              </p>
              <ul className="space-y-3 text-foreground/80 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Personalized learning plans tailored to individual strengths and weaknesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Regular progress tracking and constructive feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Career guidance and strategic planning for future success</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Mentorship that extends beyond academics to personal development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
