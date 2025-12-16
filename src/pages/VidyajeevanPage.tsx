// import { useEffect } from "react"
// import VidyajeevanSection from "@/components/vidyajeevan-section"
// import Footer from "@/components/footer"

// export default function VidyajeevanPage() {
//   useEffect(() => {
//     document.title = "Vidyajeevan - Dr. Ravi Sharma"
//   }, [])

//   return (
//     <>
//       <div className="pt-24 pb-12 bg-primary text-primary-foreground">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Vidyajeevan Framework</h1>
//           <p className="text-xl opacity-90">Transforming Education Through Structured Mentorship</p>
//         </div>
//       </div>
//       <VidyajeevanSection />
//       <Footer />
//     </>
//   )
// }
import { useEffect } from "react";
import Footer from "@/components/footer";

export default function VidyajeevanPage() {
  useEffect(() => {
    document.title = "Vidyajeevan - Dr. Ravi Sharma";
  }, []);

  return (
    <>
      {/* Hero Section
      <div className="relative h-[60vh] sm:h-[70vh] md:h-screen min-h-[400px] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop"
            alt="Campus"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              Experience Vidyajeevan
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90">
              Transforming Education Through Structured Mentorship
            </p>
          </div>
        </div>
      </div> */}
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-screen min-h-[400px] overflow-hidden bg-black">
        {/* YouTube Background */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/RT_MRoew6fA?autoplay=1&mute=1&loop=1&playlist=RT_MRoew6fA&controls=0&showinfo=0&modestbranding=1&rel=0"
            title="Vidyajeevan Background Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-[1]" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              Experience Vidyajeevan
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90">
              Transforming Education Through Structured Mentorship
            </p>
          </div>
        </div>
      </div>

      {/* Campus Gallery Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12">
            <div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=600&fit=crop"
                alt="Campus event"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=300&fit=crop"
                alt="Classroom"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=300&fit=crop"
                alt="Students"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=300&fit=crop"
                alt="Campus life"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop"
                alt="Library"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm md:text-base text-white leading-relaxed">
              Our campus is nestled within the vibrant Your first immersion to
              what a workplace looks like begins right here – experiencing
              professional culture, networking opportunities, and world-class
              infrastructure.
            </p>
          </div>

          {/* Partners Logos
          <div className="mt-8 sm:mt-12 md:mt-16">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center">
              {[
                "Offine BTR",
                "CRISP",
                "Conceptual Orthopedics Offline Events",
                // "",
                // "Gartner",
                // "Siemens",
                // "Ogilvy",
                // "ET",
                // "Expedia",
                // "Vizury",
                // "Weiss",
                // "WPP",
              ].map((brand) => (
                <div
                  key={brand}
                  className="flex items-center justify-center p-2 sm:p-3 md:p-4"
                >
                  <div className="text-white/70 font-semibold text-xs sm:text-sm md:text-base text-center">
                    {brand}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-green-300 via-yellow-300 to-orange-300">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  ALUMNI NETWORK
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900">
                  Stay Connected With Your Alma Mater Long After You Graduate
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
                  <strong>Lifelong Networking:</strong> Connect with other
                  members of the student community through our alumni network.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
                  <strong>Alumni Events:</strong> Our annual get-togethers,
                  meet-ups, and reunions are great opportunities to renew old
                  bonds and meet distinguished alumni from different batches.
                </p>
                <button className="text-primary font-semibold hover:underline text-xs sm:text-sm md:text-base">
                  Explore Before →
                </button>
              </div>
              <div className="h-48 sm:h-64 md:h-full">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=600&fit=crop"
                  alt="Graduation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
                🌱
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">
                Sustainability
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                Leading efforts to create a sustainable and eco-friendly campus
                environment.
              </p>
              <button className="text-primary text-xs sm:text-sm font-semibold hover:underline">
                Read LEED Accreditation →
              </button>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
                💪
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">
                Powerful CII Chapters to lift you higher
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                CII Student Chapters connect future leaders with industry
                pioneers.
              </p>
              <button className="text-primary text-xs sm:text-sm font-semibold hover:underline">
                Learn More →
              </button>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
                🌍
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">
                Navigate Operational Working Journey
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                International collaborations and global exposure programs.
              </p>
              <button className="text-primary text-xs sm:text-sm font-semibold hover:underline">
                Take the First Step →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Campus Tour */}
      <section className="py-8 sm:py-12 md:py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Explore our Campus Virtually
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-400">
              Take a comprehensive virtual tour of our state-of-the-art
              facilities and experience the vibrant campus life from anywhere in
              the world.
            </p>
          </div>

          {/* <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto aspect-video">
            <div className="h-48 sm:h-64 md:h-full">
              <iframe
                className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                src="https://www.youtube.com/embed/PO1mfamb32E?autoplay=1&mute=1&loop=1&playlist=PO1mfamb32E&controls=0&showinfo=0&modestbranding=1&rel=0"
                title="Vidyajeevan "
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[6px] sm:border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[10px] sm:border-l-[14px] md:border-l-[18px] border-l-primary border-b-[6px] sm:border-b-[8px] md:border-b-[10px] border-b-transparent ml-1"></div>
              </button>
            </div>
          </div> */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto aspect-video">
            {/* YouTube Video */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/PO1mfamb32E?autoplay=1&mute=1&loop=1&playlist=PO1mfamb32E&controls=0&modestbranding=1&rel=0"
              title="Vidyajeevan Campus Tour"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
              <button className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] sm:border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[10px] sm:border-l-[14px] md:border-l-[18px] border-l-primary border-b-[6px] sm:border-b-[8px] md:border-b-[10px] border-b-transparent ml-1"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Amenities */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-gray-900">
            Discover a world of convenience
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-xl">🏙️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1">
                    Cyber City
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Located in the heart of business district
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-xl">🚇</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1">
                    Moulsari Avenue
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Easy metro connectivity
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg sm:text-xl">🍽️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-1">
                    Food Court
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Diverse dining options
                  </p>
                </div>
              </div>

              <button className="text-primary font-semibold hover:underline text-xs sm:text-sm md:text-base">
                View More Amenities →
              </button>
            </div>

            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop"
                alt="Campus building"
                className="w-full h-48 sm:h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mental Health Support */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto items-center">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                alt="Mental health"
                className="w-full h-48 sm:h-64 md:h-96 object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900">
                Your Mental Health Partner
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                With the AMU and other associated support groups, we provide
                comprehensive mental health resources to support students
                through their academic journey.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                Our dedicated counselors and peer support programs ensure that
                every student has access to the help they need, when they need
                it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                In case of an emergency, students can reach out via
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl">📧</span>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Email
                    </div>
                    <div className="text-sm sm:text-base md:text-lg font-semibold">
                      contact@vidyajeevan.edu
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl">📞</span>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Helpline
                    </div>
                    <div className="text-sm sm:text-base md:text-lg font-semibold">
                      +91-XXXX-XXXX
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Support team"
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Campus Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center">
            Explore Our Campus
          </h2>

          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="h-48 sm:h-64 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=600&fit=crop"
                  alt="Campus activity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                <div className="text-xs sm:text-sm text-gray-500 mb-2">
                  CAMPUS LIFE
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                  An Informative Session and Olympus Tour
                </h3>
                <button className="text-primary font-semibold hover:underline text-left text-xs sm:text-sm md:text-base">
                  View Events →
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
