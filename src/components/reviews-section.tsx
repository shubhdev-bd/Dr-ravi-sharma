
// import { motion } from "framer-motion"
// import { Star, Quote } from "lucide-react"

// import TypingText from "./typing-text"

// const reviews = [
//   {
//     name: "Priya Sharma",
//     role: "IIT Delhi Graduate",
//     image: "/student-testimonial-priya-sharma.jpg",
//     rating: 5,
//     review: "Dr. Sharma's mentorship was instrumental in my IIT journey. His guidance helped me develop confidence.",
//   },
//   {
//     name: "Rahul Verma",
//     role: "Medical Student, AIIMS",
//     image: "/student-testimonial-rahul-verma.jpg",
//     rating: 5,
//     review: "The personalized approach made all the difference. Vidyajeevan provided structure when I needed it most.",
//   },
//   {
//     name: "Ananya Patel",
//     role: "CA Finalist",
//     image: "/student-testimonial-ananya-patel.jpg",
//     rating: 5,
//     review: "Grateful for his expertise. He helped me navigate challenging subjects and kept me focused on my goals.",
//   },
//   {
//     name: "Vikram Singh",
//     role: "UPSC Aspirant",
//     image: "/student-testimonial-vikram-singh.jpg",
//     rating: 5,
//     review: "His holistic approach transformed my preparation strategy. Insights and encouragement were invaluable.",
//   },
//   {
//     name: "Neha Gupta",
//     role: "MBA, IIM Bangalore",
//     image: "/student-testimonial-neha-gupta.jpg",
//     rating: 5,
//     review: "The best mentor! Helped me academically and in developing leadership skills and career clarity.",
//   },
//   {
//     name: "Arjun Reddy",
//     role: "Software Engineer, Google",
//     image: "/student-testimonial-arjun-reddy.jpg",
//     rating: 5,
//     review: "Mentorship extended beyond textbooks. Taught me how to think, learn, and adapt for my career.",
//   },
// ]

// export default function ReviewsSection() {
//   return (
//     <section className="relative py-12 md:py-20 lg:py-32 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-10 md:mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6"
//           >
//             <TypingText text="Student Testimonials" delay={200} speed={60} />
//           </motion.h2>
//           <p className="text-sm md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto">
//             Hear from students transformed through mentorship
//           </p>
//         </motion.div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {reviews.map((review, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="group bg-gradient-to-br from-card to-card/80 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg border border-border hover:shadow-2xl hover:border-accent/30 transition-all relative overflow-hidden"
//             >
//               {/* Gradient overlay on hover */}
//               <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

//               <div className="relative z-10">
//                 <Quote className="w-10 h-10 md:w-12 md:h-12 text-accent/20 mb-4" />

//                 <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-6 italic min-h-[80px] md:min-h-[100px]">
//                   "{review.review}"
//                 </p>

//                 <div className="flex gap-1 mb-4">
//                   {[...Array(review.rating)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-accent text-accent" />
//                   ))}
//                 </div>

//                 <div className="flex items-center gap-4 pt-4 border-t border-border/50">
//                   <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-accent/50 group-hover:border-accent transition-colors">
//                     <img src={review.image || "/placeholder.svg"} alt={review.name} className="absolute inset-0 w-full h-full object-cover" />
//                   </div>

//                   <div>
//                     <h3 className="font-serif text-base md:text-lg font-bold text-foreground">{review.name}</h3>
//                     <p className="text-xs md:text-sm text-secondary">{review.role}</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import React from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

interface Review {
  name: string
  role: string
  image: string
  rating: number
  review: string
}

const reviews: Review[] = [
  {
    name: "Priya Sharma",
    role: "IIT Delhi Graduate",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    rating: 5,
    review: "Dr. Sharma's mentorship was instrumental in my IIT journey. His guidance helped me develop confidence.",
  },
  {
    name: "Rahul Verma",
    role: "Medical Student, AIIMS",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    rating: 5,
    review: "The personalized approach made all the difference. Vidyajeevan provided structure when I needed it most.",
  },
  {
    name: "Ananya Patel",
    role: "CA Finalist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
    rating: 5,
    review: "Grateful for his expertise. He helped me navigate challenging subjects and kept me focused on my goals.",
  },
  {
    name: "Vikram Singh",
    role: "UPSC Aspirant",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    rating: 5,
    review: "His holistic approach transformed my preparation strategy. Insights and encouragement were invaluable.",
  },
  {
    name: "Neha Gupta",
    role: "MBA, IIM Bangalore",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
    rating: 5,
    review: "The best mentor! Helped me academically and in developing leadership skills and career clarity.",
  },
  {
    name: "Arjun Reddy",
    role: "Software Engineer, Google",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    rating: 5,
    review: "Mentorship extended beyond textbooks. Taught me how to think, learn, and adapt for my career.",
  },
]

// Create three columns of reviews
const reviewColumns: Review[][] = [
  [reviews[0], reviews[1], reviews[2]],
  [reviews[3], reviews[4], reviews[0]],
  [reviews[5], reviews[1], reviews[3]],
]

const ReviewsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <style>{`
        @keyframes slideUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes slideDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slideUp 60s linear infinite;
        }
        
        .animate-slide-down {
          animation: slideDown 65s linear infinite;
        }
        
        .fog-overlay {
          position: absolute;
          left: 0;
          right: 0;
          height: 150px;
          pointer-events: none;
          z-index: 10;
        }
        
        .fog-top {
          top: 0;
          background: linear-gradient(
            to bottom,
            rgba(249, 250, 251, 1) 0%,
            rgba(249, 250, 251, 0.95) 20%,
            rgba(249, 250, 251, 0.7) 50%,
            rgba(249, 250, 251, 0) 100%
          );
        }
        
        .fog-bottom {
          bottom: 0;
          background: linear-gradient(
            to top,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.95) 20%,
            rgba(255, 255, 255, 0.7) 50%,
            rgba(255, 255, 255, 0) 100%
          );
        }
      `}</style>

      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Student Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students transformed through mentorship
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto" style={{ height: '600px' }}>
        <div className="flex gap-6 h-full">
          {reviewColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex-1 overflow-hidden relative">
              <div
                className={columnIndex % 2 === 0 ? "animate-slide-up" : "animate-slide-down"}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {/* Duplicate the reviews for seamless loop */}
                {[...column, ...column].map((review, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-7 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    style={{ minHeight: '280px' }}
                  >
                    <Quote className="w-10 h-10 text-blue-500/20 mb-4" />

                    <p className="text-gray-600 leading-relaxed text-[15px] mb-6 italic">
                      "{review.review}"
                    </p>

                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-5 border-t-2 border-blue-500">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                        <img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-base font-semibold text-blue-600">
                          {review.name}
                        </h3>
                        <p className="text-sm text-gray-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fog overlays */}
        <div className="fog-overlay fog-top"></div>
        <div className="fog-overlay fog-bottom"></div>
      </div>

      {/* Mobile View - Single Column */}
      <div className="block md:hidden px-4 mt-8">
        <div className="space-y-6">
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
            >
              <Quote className="w-8 h-8 text-blue-500/20 mb-3" />
              
              <p className="text-gray-600 leading-relaxed text-sm mb-4 italic">
                "{review.review}"
              </p>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t-2 border-blue-500">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-blue-600">
                    {review.name}
                  </h3>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection