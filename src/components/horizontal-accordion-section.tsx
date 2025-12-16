// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronRight } from "lucide-react"

// interface AccordionItem {
//   id: number
//   title: string
//   subtitle: string
//   description: string
//   icon: string
// }

// interface HorizontalAccordionSectionProps {
//   items: AccordionItem[]
//   videoUrl?: string
//   title?: string
// }

// export default function HorizontalAccordionSection({ items, videoUrl, title }: HorizontalAccordionSectionProps) {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0)

//   return (
//     <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
//       {/* Background Video */}
//       <div className="absolute inset-0">
//         {videoUrl ? (
//           <video autoPlay loop muted playsInline className="w-full h-full object-cover">
//             <source src={videoUrl} type="video/mp4" />
//           </video>
//         ) : (
//           <div className="w-full h-full bg-gradient-to-br from-primary via-secondary to-accent" />
//         )}
//         <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8 lg:px-16">
//         {title && (
//           <motion.h2
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12 text-center"
//           >
//             {title}
//           </motion.h2>
//         )}

//         {/* Horizontal Accordion */}
//         <div className="flex gap-2 md:gap-4 h-[250px] md:h-[300px] max-w-7xl mx-auto w-full">
//           {items.map((item, index) => {
//             const isActive = activeIndex === index

//             return (
//               <motion.div
//                 key={item.id}
//                 className={`relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer transition-all duration-500 ${
//                   isActive ? "flex-[3]" : "flex-1"
//                 }`}
//                 onClick={() => setActiveIndex(isActive ? null : index)}
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: isActive ? 1 : 1.02 }}
//               >
//                 {/* Background */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent opacity-90" />

//                 {/* Content */}
//                 <div className="relative h-full p-4 md:p-6 flex flex-col justify-between">
//                   {/* Icon & Title - Always visible */}
//                   <div className="flex items-start gap-3">
//                     <div className="text-3xl md:text-4xl flex-shrink-0">{item.icon}</div>
//                     <div className={`${!isActive && "hidden md:block"}`}>
//                       <h3
//                         className={`font-bold text-white transition-all duration-300 ${
//                           isActive ? "text-lg md:text-2xl" : "text-sm md:text-base"
//                         }`}
//                       >
//                         {item.title}
//                       </h3>
//                       {!isActive && (
//                         <p className="text-white/80 text-xs md:text-sm mt-1 line-clamp-2">{item.subtitle}</p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Expanded Content */}
//                   <AnimatePresence>
//                     {isActive && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 20 }}
//                         transition={{ duration: 0.3, delay: 0.2 }}
//                         className="space-y-3 md:space-y-4"
//                       >
//                         <p className="text-white/90 text-sm md:text-base font-medium">{item.subtitle}</p>
//                         <p className="text-white/80 text-xs md:text-sm leading-relaxed">{item.description}</p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                   {/* Expand Indicator */}
//                   {!isActive && (
//                     <motion.div className="self-end" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
//                       <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
//                     </motion.div>
//                   )}
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronRight } from "lucide-react"

// export default function HorizontalAccordionSection({ items, videoUrl, youtubeId, title }) {
//   const [activeIndex, setActiveIndex] = useState(0)

//   return (
//     <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
//       {/* ========================================
//           BACKGROUND VIDEO OPTIONS
//           ======================================== */}

//       <div className="absolute inset-0">
//         {/* OPTION 1: YouTube Video (Uncomment to use) */}
//         {youtubeId ? (
//           <>
//             <iframe
//               className="absolute top-1/2 left-1/2 pointer-events-none"
//               style={{
//                 width: '100vw',
//                 height: '56.25vw',
//                 minHeight: '100vh',
//                 minWidth: '177.77vh',
//                 transform: 'translate(-50%, -50%)',
//               }}
//               src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
//               title="Background Video"
//               frameBorder="0"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//             />
//           </>
//         ) : videoUrl ? (
//           /* OPTION 2: Local Video from Public Folder or CDN URL */
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="w-full h-full object-cover"
//           >
//             <source src={videoUrl} type="video/mp4" />
//             <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
//           </video>
//         ) : (
//           /* OPTION 3: Fallback Gradient Background */
//           <div className="w-full h-full bg-gradient-to-br from-primary via-secondary to-accent" />
//         )}

//         {/* Overlay for text readability */}
//         <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
//       </div>

//       {/* ========================================
//           COMMENTED SNIPPETS FOR DIFFERENT VIDEO TYPES
//           ========================================

//           To use YouTube video, pass youtubeId prop:
//           <HorizontalAccordionSection
//             youtubeId="dQw4w9WgXcQ"
//             items={items}
//           />

//           To use local video from public folder:
//           Place video in: public/videos/accordion-bg.mp4
//           <HorizontalAccordionSection
//             videoUrl="/videos/accordion-bg.mp4"
//             items={items}
//           />

//           To use CDN video URL:
//           <HorizontalAccordionSection
//             videoUrl="https://your-cdn.com/video.mp4"
//             items={items}
//           />
//       */}

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-8 lg:px-16">
//         {title && (
//           <motion.h2
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12 text-center"
//           >
//             {title}
//           </motion.h2>
//         )}

//         {/* Horizontal Accordion */}
//         <div className="flex gap-2 md:gap-4 h-[250px] md:h-[300px] max-w-7xl mx-auto w-full">
//           {items.map((item, index) => {
//             const isActive = activeIndex === index

//             return (
//               <motion.div
//                 key={item.id}
//                 className={`relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer transition-all duration-500 ${
//                   isActive ? "flex-[3]" : "flex-1"
//                 }`}
//                 onClick={() => setActiveIndex(isActive ? null : index)}
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: isActive ? 1 : 1.02 }}
//               >
//                 {/* Background */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent opacity-90" />

//                 {/* Content */}
//                 <div className="relative h-full p-4 md:p-6 flex flex-col justify-between">
//                   {/* Icon & Title - Always visible */}
//                   <div className="flex items-start gap-3">
//                     <div className="text-3xl md:text-4xl flex-shrink-0">{item.icon}</div>
//                     <div className={`${!isActive && "hidden md:block"}`}>
//                       <h3
//                         className={`font-bold text-white transition-all duration-300 ${
//                           isActive ? "text-lg md:text-2xl" : "text-sm md:text-base"
//                         }`}
//                       >
//                         {item.title}
//                       </h3>
//                       {!isActive && (
//                         <p className="text-white/80 text-xs md:text-sm mt-1 line-clamp-2">{item.subtitle}</p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Expanded Content */}
//                   <AnimatePresence>
//                     {isActive && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 20 }}
//                         transition={{ duration: 0.3, delay: 0.2 }}
//                         className="space-y-3 md:space-y-4"
//                       >
//                         <p className="text-white/90 text-sm md:text-base font-medium">{item.subtitle}</p>
//                         <p className="text-white/80 text-xs md:text-sm leading-relaxed">{item.description}</p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                   {/* Expand Indicator */}
//                   {!isActive && (
//                     <motion.div className="self-end" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
//                       <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
//                     </motion.div>
//                   )}
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface AccordionItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

interface HorizontalAccordionSectionProps {
  items: AccordionItem[];
  youtubeId: string;
  title?: string;
}

export default function HorizontalAccordionSection({
  items,
  youtubeId,
  title,
}: HorizontalAccordionSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    // <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0">
        <iframe
          className="absolute top-1/2 left-1/2 pointer-events-none"
          style={{
            width: "100vw",
            height: "56.25vw",
            minHeight: "100vh",
            minWidth: "177.77vh",
            transform: "translate(-50%, -50%)",
          }}
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
      </div>

      {/* ========================================
          USAGE EXAMPLE:
          ========================================
          
          <HorizontalAccordionSection 
            youtubeId="dQw4w9WgXcQ"
            title="Our Services"
            items={accordionItems}
          />
          
          Replace "dQw4w9WgXcQ" with your YouTube video ID
          From: https://www.youtube.com/watch?v=YOUR_VIDEO_ID
      */}

      {/* Content */}
      <div className="relative z-10 h-full min-h-screen  flex flex-col justify-center px-4 md:px-8 lg:px-16 py-20">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12 text-center"
          >
            {title}
          </motion.h2>
        )}

        {/* Horizontal Accordion */}
        <div className="flex gap-2 md:gap-4 h-[350px] md:h-[400px] max-w-7xl mx-auto w-full">
          {items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={item.id}
                className={`relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer transition-all duration-500 ${
                  isActive ? "flex-[3]" : "flex-1"
                }`}
                onClick={() => setActiveIndex(isActive ? null : index)}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: isActive ? 1 : 1.02 }}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent opacity-90" />

                {/* Content */}
                <div className="relative h-full p-4 md:p-6 flex flex-col justify-between">
                  {/* Icon & Title - Always visible */}
                  <div className="flex items-start gap-3">
                    <div className="text-3xl md:text-4xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className={`${!isActive && "hidden md:block"}`}>
                      <h3
                        className={`font-bold text-white transition-all duration-300 ${
                          isActive
                            ? "text-lg md:text-2xl"
                            : "text-sm md:text-base"
                        }`}
                      >
                        {item.title}
                      </h3>
                      {!isActive && (
                        <p className="text-white/80 text-xs md:text-sm mt-1 line-clamp-2">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="space-y-3 md:space-y-4"
                      >
                        <p className="text-white/90 text-sm md:text-base font-medium">
                          {item.subtitle}
                        </p>
                        <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand Indicator */}
                  {!isActive && (
                    <motion.div
                      className="self-end"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
