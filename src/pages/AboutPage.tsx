// import { useEffect } from "react"
// import Footer from "@/components/footer"
// import AboutSection from "@/components/about-section"

// export default function AboutPage() {
//   useEffect(() => {
//     document.title = "About Dr. Ravi Sharma - Education Mentor"
//   }, [])

//   return (
//     <>
//       <div className="pt-24 pb-12 bg-muted/30">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-primary">About Dr. Ravi Sharma</h1>
//           <p className="text-xl text-foreground/70">Dedicated to Excellence in Education</p>
//         </div>
//       </div>
//       <AboutSection />

//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto space-y-8">
//             <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
//               <h2 className="font-serif text-3xl font-bold text-primary mb-6">Our Mission</h2>
//               <p className="text-foreground/80 leading-relaxed text-lg">
//                 To empower students with knowledge, skills, and guidance that enable them to achieve their full
//                 potential and succeed in their chosen paths. We believe in holistic development that goes beyond
//                 academics to build character, confidence, and critical thinking abilities.
//               </p>
//             </div>

//             <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
//               <h2 className="font-serif text-3xl font-bold text-primary mb-6">Our Vision</h2>
//               <p className="text-foreground/80 leading-relaxed text-lg">
//                 To be recognized as a leading force in educational mentorship, creating a generation of well-rounded
//                 individuals who contribute positively to society. We aim to revolutionize the mentorship landscape
//                 through innovative approaches and personalized guidance.
//               </p>
//             </div>

//             <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
//               <h2 className="font-serif text-3xl font-bold text-primary mb-6">Our Approach</h2>
//               <p className="text-foreground/80 leading-relaxed text-lg mb-4">
//                 Dr. Ravi Sharma's methodology combines traditional teaching wisdom with modern educational psychology.
//                 Each student receives:
//               </p>
//               <ul className="space-y-3 text-foreground/80 text-lg">
//                 <li className="flex items-start gap-3">
//                   <span className="text-primary font-bold">•</span>
//                   <span>Personalized learning plans tailored to individual strengths and weaknesses</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-primary font-bold">•</span>
//                   <span>Regular progress tracking and constructive feedback</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-primary font-bold">•</span>
//                   <span>Career guidance and strategic planning for future success</span>
//                 </li>
//                 <li className="flex items-start gap-3">
//                   <span className="text-primary font-bold">•</span>
//                   <span>Mentorship that extends beyond academics to personal development</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   )
// }

import { useEffect } from "react";
import Footer from "@/components/footer";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Dr. Ravi Sharma - Education Mentor";
  }, []);

  return (
    <>
      {/* Hero Section with Background Video */}
      <div className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/I1qPYBsKllg?autoplay=1&mute=1&loop=1&playlist=I1qPYBsKllg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Background video"
            allow="autoplay; encrypted-media"
            style={{ pointerEvents: "none" }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              Extraordinary lives answer to a higher calling
            </h1>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800">
              An extraordinary life is one on your terms, both of deep meaning
              and incredible impact. Driven by the pursuit of excellence and
              guided by unwavering principles, Dr. Ravi Sharma has inspired
              thousands to dream bigger and reach higher.
            </p>
          </div>
        </div>
      </section>

      {/* The Start Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
                The start of a bigger story
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                From a small town to impacting thousands of lives, Dr. Sharma's
                journey began with a simple belief: every student deserves
                personalized guidance and mentorship.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                With over 15 years of experience in education, he has developed
                proven methodologies that have helped students achieve their
                dreams and unlock their full potential.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=600&fit=crop"
                alt="Education mentorship"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Secret Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=600&fit=crop"
                alt="Student success"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
                The secret is living in giving
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                From the start, the journey has not been about receiving—it's
                about giving. It's about the thrill of making an impact. But
                it's the impact on people's lives: the meaningful gifts that you
                give to your students, watching them flourish and succeed.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                When a student says, "You have helped me see what I am and now
                I've begun to change my life," that's something that you can't
                put a price tag on. It's far more valuable than any achievement
                or recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Greater Purpose Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
                A life dedicated to a greater purpose
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Dr. Ravi Sharma is not just a teacher but a life strategist and
                coach. He is dedicated to inspiring students to see the profound
                impact they can have on the lives of others and the potential
                they have to make a massive contribution to their communities.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                His work transcends traditional education—it's about creating
                leaders, innovators, and compassionate individuals who will
                shape the future.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=600&fit=crop"
                alt="Student collaboration"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              "I decided that I was going to find a way, somehow, someday, to
              give back and pay it forward."
            </blockquote>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              — Dr. Ravi Sharma
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-gray-900">
              Impact that spans generations
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 text-center">
              With thousands of students mentored and countless lives
              transformed, Dr. Sharma's methodology has become a beacon of
              excellence in educational mentorship.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div className="text-center p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  5000+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Students Mentored
                </div>
              </div>
              <div className="text-center p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  15+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  95%
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Success Rate
                </div>
              </div>
              <div className="text-center p-4 sm:p-6">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  50+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Awards Won
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight">
              "Dr. Ravi Sharma has been one of the critical keys to transforming
              education and empowering countless students to achieve their
              dreams."
            </p>
            <div className="text-sm sm:text-base md:text-lg text-gray-400">
              — Former Students & Parents
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer h-64 sm:h-80 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop"
                alt="Academic excellence"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  A System for Academic Excellence
                </h3>
                <button className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors w-fit text-sm sm:text-base">
                  Learn more
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer h-64 sm:h-80 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop"
                alt="Career guidance"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Career Guidance with Proven Results
                </h3>
                <button className="bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors w-fit text-sm sm:text-base">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
