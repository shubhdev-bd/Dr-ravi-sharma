// import { useEffect } from "react"
// import ReviewsSection from "@/components/reviews-section"
// import Footer from "@/components/footer"

// export default function ReviewsPage() {
//   useEffect(() => {
//     document.title = "Student Reviews - Dr. Ravi Sharma"
//   }, [])

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//          {/* Hero Section with YouTube Video Background */}
//         <div className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
//           {/* Video Background */}
//           <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
//             <iframe
//               className="absolute top-1/2 left-1/2 pointer-events-none"
//               style={{
//                 width: "100vw",
//                 height: "56.25vw",
//                 minHeight: "100vh",
//                 minWidth: "177.77vh",
//                 transform: "translate(-50%, -50%)",
//               }}
//               src="https://www.youtube.com/embed/TzcOn93fvVM?autoplay=1&mute=1&loop=1&playlist=TzcOn93fvVM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
//               title="Background Video"
//               frameBorder="0"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//             />

//             {/* LIGHTER overlay - video more visible, brighter look */}
//             <div className="absolute inset-0 bg-white/40" />

//             {/* Subtle gradient for depth */}
//             <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
//           </div>

//           {/* Background Pattern - adjusted for lighter theme */}
//           <div className="absolute inset-0 opacity-3 z-[1]">
//             <div
//               className="absolute inset-0"
//               style={{
//                 backgroundImage: `radial-gradient(circle at 1px 1px, rgb(14, 107, 168) 1px, transparent 0)`,
//                 backgroundSize: "40px 40px",
//               }}
//             />
//           </div>

//           {/* Hero Content */}
//           <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
//               Student Testimonials
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-800">
//               Success Stories from Our Mentorship Program
//             </p>
//           </div>
//         </div>
//       </div>
//       <ReviewsSection />
//       <Footer />
//     </>
//   )
// }


import { useEffect } from "react"
import ReviewsSection from "@/components/reviews-section"
import Footer from "@/components/footer"

export default function ReviewsPage() {
  useEffect(() => {
    document.title = "Student Reviews - Dr. Ravi Sharma"
  }, [])

  return (
    <>
      {/* <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white"> */}
        {/* Hero Section with YouTube Video Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
          <iframe
            className="absolute top-1/2 left-1/2 pointer-events-none"
            style={{
              width: "100vw",
              height: "56.25vw",
              minHeight: "100vh",
              minWidth: "177.77vh",
              transform: "translate(-50%, -50%)",
            }}
            src="https://www.youtube.com/embed/TzcOn93fvVM?autoplay=1&mute=1&loop=1&playlist=TzcOn93fvVM&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/40" />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-3 z-[1]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(14, 107, 168) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="flex flex-col justify-center items-center text-center min-h-[60vh]">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]">
              Student Testimonials
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 font-medium drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]">
              Success Stories from Our Mentorship Program
            </p>
          </div>
        </div>
      
      <ReviewsSection />
      <Footer />
      </section>
    </>
  )
}