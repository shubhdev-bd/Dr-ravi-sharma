// import { motion, useScroll, useTransform } from "framer-motion"

// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"
// import { Link } from "react-router-dom"
// import { useRef, useState, useEffect } from "react"
// import TypingText from "./typing-text"
// import CyclingTypingText from "./cycling-typing-text"
// import CounterAnimation from "./counter-animation"

// export default function HeroSection() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const [preloaderFinished, setPreloaderFinished] = useState(false)

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   })

//   const imageY = useTransform(scrollYProgress, [0, 1], [0, 200])
//   const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
//   const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setPreloaderFinished(true)
//     }, 2500)

//     return () => clearTimeout(timer)
//   }, [])

//   const subtitleTexts = [
//     "Empowering students through personalized mentorship",
//     "Building futures with innovative learning frameworks",
//     "Transforming education, one student at a time",
//     "Your guide to academic excellence and success",
//     "Creating pathways to meaningful careers",
//   ]

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen bg-gradient-to-br from-background via-muted/30 to-light-accent/20 flex items-center overflow-hidden pt-16"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, rgb(14, 107, 168) 1px, transparent 0)`,
//             backgroundSize: "40px 40px",
//           }}
//         />
//       </div>

//       <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: preloaderFinished ? 0 : 2.5 }}
//             className="space-y-6 md:space-y-8"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: preloaderFinished ? 0.2 : 2.7 }}
//               className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-accent/10 rounded-full border border-accent/20"
//             >
//               <span className="text-accent font-semibold text-xs md:text-sm tracking-wide">
//                 Education Mentor & Guide
//               </span>
//             </motion.div>

//             <div className="space-y-4 md:space-y-6">
//               <motion.h1
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: preloaderFinished ? 0.4 : 2.9 }}
//                 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
//               >
//                 <span className="block mb-2">Hello, I am</span>
//                 <span className="block text-secondary">
//                   {preloaderFinished && <TypingText text="Dr. Ravi Sharma" delay={0} speed={80} />}
//                 </span>
//               </motion.h1>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: preloaderFinished ? 1.5 : 4 }}
//                 className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-xl min-h-[3rem] md:min-h-[4rem]"
//               >
//                 {preloaderFinished && (
//                   <CyclingTypingText
//                     texts={subtitleTexts}
//                     delay={1500}
//                     typingSpeed={50}
//                     deletingSpeed={30}
//                     pauseTime={2000}
//                   />
//                 )}
//               </motion.div>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: preloaderFinished ? 1.8 : 4.3 }}
//               className="flex flex-col sm:flex-row gap-3 md:gap-4"
//             >
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-accent hover:bg-accent/90 text-white px-6 py-5 md:px-8 md:py-6 text-sm md:text-base group"
//               >
//                 <Link to="/about">
//                   Learn About Me
//                   <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </Button>

//               <Button
//                 asChild
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-5 md:px-8 md:py-6 text-sm md:text-base bg-transparent"
//               >
//                 <Link to="/vidyajeevan">Explore Vidyajeevan</Link>
//               </Button>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: preloaderFinished ? 2 : 4.5 }}
//               className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-border"
//             >
//               <div>
//                 {preloaderFinished && (
//                   <CounterAnimation
//                     end={20}
//                     suffix="+"
//                     className="text-xl md:text-2xl lg:text-3xl font-bold text-primary"
//                     duration={2000}
//                   />
//                 )}
//                 <div className="text-xs md:text-sm text-foreground/60">Years</div>
//               </div>
//               <div>
//                 {preloaderFinished && (
//                   <CounterAnimation
//                     end={5000}
//                     suffix="+"
//                     className="text-xl md:text-2xl lg:text-3xl font-bold text-primary"
//                     duration={2000}
//                   />
//                 )}
//                 <div className="text-xs md:text-sm text-foreground/60">Students</div>
//               </div>
//               <div>
//                 {preloaderFinished && (
//                   <CounterAnimation
//                     end={95}
//                     suffix="%"
//                     className="text-xl md:text-2xl lg:text-3xl font-bold text-primary"
//                     duration={2000}
//                   />
//                 )}
//                 <div className="text-xs md:text-sm text-foreground/60">Success</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Image with scroll effect */}
//           <motion.div
//             style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: preloaderFinished ? 0.3 : 2.8 }}
//             className="relative order-first lg:order-last"
//           >
//             <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
//               {/* Decorative Elements */}
//               <motion.div
//                 animate={{ y: [0, -20, 0] }}
//                 transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
//                 className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-48 h-48 md:w-72 md:h-72 bg-accent/20 rounded-full blur-3xl"
//               />
//               <motion.div
//                 animate={{ y: [0, 20, 0] }}
//                 transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
//                 className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-48 h-48 md:w-72 md:h-72 bg-secondary/20 rounded-full blur-3xl"
//               />

//               {/* Main Image with fade animation */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1.2, delay: 0.5 }}
//                 className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-white/50"
//               >
//                 <img
//                   src="/professional-indian-education-mentor-doctor-in-for.jpg"
//                   alt="Dr. Ravi Sharma"
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";

// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useRef, useState, useEffect } from "react";
// import TypingText from "./typing-text";
// import CyclingTypingText from "./cycling-typing-text";
// import CounterAnimation from "./counter-animation";

// export default function HeroSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [preloaderFinished, setPreloaderFinished] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
//   const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
//   const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setPreloaderFinished(true);
//     }, 2500);

//     return () => clearTimeout(timer);
//   }, []);

//   const subtitleTexts = [
//     "Empowering students through personalized mentorship",
//     "Building futures with innovative learning frameworks",
//     "Transforming education, one student at a time",
//     "Your guide to academic excellence and success",
//     "Creating pathways to meaningful careers",
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex items-center overflow-hidden pt-16"
//     >
//       {/* Background Video Layer */}
//       <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//           crossOrigin="anonymous"
//         >
//           {/* Replace this URL with your video link */}
//           <source src="https://youtu.be/RT_MRoew6fA" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         {/* Dark overlay for text readability */}
//         <div className="absolute inset-0 bg-black/50" />
//         {/* Gradient overlay for better blending */}
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20" />
//       </div>

//       {/* Background Pattern (now on top of video) */}
//       <div className="absolute inset-0 opacity-5 z-[1]">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, rgb(14, 107, 168) 1px, transparent 0)`,
//             backgroundSize: "40px 40px",
//           }}
//         />
//       </div>

//       <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: preloaderFinished ? 0 : 2.5 }}
//             className="space-y-6 md:space-y-8"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 delay: preloaderFinished ? 0.2 : 2.7,
//               }}
//               className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm"
//             >
//               <span className="text-accent font-semibold text-xs md:text-sm tracking-wide">
//                 Education Mentor & Guide
//               </span>
//             </motion.div>

//             <div className="space-y-4 md:space-y-6">
//               <motion.h1
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: preloaderFinished ? 0.4 : 2.9,
//                 }}
//                 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg"
//               >
//                 <span className="block mb-2">Hello, I am</span>
//                 <span className="block text-accent drop-shadow-[0_2px_10px_rgba(14,107,168,0.5)]">
//                   {preloaderFinished && (
//                     <TypingText text="Dr. Ravi Sharma" delay={0} speed={80} />
//                   )}
//                 </span>
//               </motion.h1>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: preloaderFinished ? 1.5 : 4,
//                 }}
//                 className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl min-h-[3rem] md:min-h-[4rem] drop-shadow-md"
//               >
//                 {preloaderFinished && (
//                   <CyclingTypingText
//                     texts={subtitleTexts}
//                     delay={1500}
//                     typingSpeed={50}
//                     deletingSpeed={30}
//                     pauseTime={2000}
//                   />
//                 )}
//               </motion.div>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: preloaderFinished ? 1.8 : 4.3,
//               }}
//               className="flex flex-col sm:flex-row gap-3 md:gap-4"
//             >
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-accent hover:bg-accent/90 text-white px-6 py-5 md:px-8 md:py-6 text-sm md:text-base group shadow-xl"
//               >
//                 <Link href="/about">
//                   Learn About Me
//                   <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
//                 </Link>
//               </Button>

//               <Button
//                 asChild
//                 size="lg"
//                 variant="outline"
//                 className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-5 md:px-8 md:py-6 text-sm md:text-base bg-transparent backdrop-blur-sm shadow-xl"
//               >
//                 <Link href="/vidyajeevan">Explore Vidyajeevan</Link>
//               </Button>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: preloaderFinished ? 2 : 4.5 }}
//               className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/30"
//             >
//               <div>
//                 {preloaderFinished && (
//                   <CounterAnimation
//                     end={20}
//                     suffix="+"
//                     className="text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg"
//                     duration={2000}
//                   />
//                 )}
//                 <div className="text-xs md:text-sm text-white/80">Years</div>
//               </div>
//               <div>
//                 {preloaderFinished && (
//                   <CounterAnimation
//                     end={5000}
//                     suffix="+"
//                     className="text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg"
//                     duration={2000}
//                   />
//                 )}
//                 <div className="text-xs md:text-sm text-white/80">Students</div>
//               </div>
//               <div>
//                 {preloaderFinished && (
//                   <CounterAnimation
//                     end={95}
//                     suffix="%"
//                     className="text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg"
//                     duration={2000}
//                   />
//                 )}
//                 <div className="text-xs md:text-sm text-white/80">Success</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Image with scroll effect */}
//           <motion.div
//             style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: preloaderFinished ? 0.3 : 2.8 }}
//             className="relative order-first lg:order-last"
//           >
//             <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
//               {/* Decorative Elements */}
//               <motion.div
//                 animate={{ y: [0, -20, 0] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-48 h-48 md:w-72 md:h-72 bg-accent/30 rounded-full blur-3xl"
//               />
//               <motion.div
//                 animate={{ y: [0, 20, 0] }}
//                 transition={{
//                   duration: 5,
//                   repeat: Number.POSITIVE_INFINITY,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-48 h-48 md:w-72 md:h-72 bg-secondary/30 rounded-full blur-3xl"
//               />

//               {/* Main Image with fade animation */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 1.2, delay: 0.5 }}
//                 className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-white/50 backdrop-blur-sm"
//               >
//                 <Image
//                   src="/professional-indian-education-mentor-doctor-in-for.jpg"
//                   alt="Dr. Ravi Sharma"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import TypingText from "./typing-text";
import CyclingTypingText from "./cycling-typing-text";
// import CounterAnimation from "./counter-animation";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloaderFinished(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const subtitleTexts = [
    "Empowering students through personalized mentorship",
    "Building futures with innovative learning frameworks",
    "Transforming education, one student at a time",
    "Your guide to academic excellence and success",
    "Creating pathways to meaningful careers",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* ========================================
          YOUTUBE VIDEO BACKGROUND (CURRENTLY ACTIVE)
          ========================================
          Replace YOUR_VIDEO_ID with your actual YouTube video ID
          Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ
          Video ID would be: dQw4w9WgXcQ
      */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <iframe
          className="absolute top-1/2 left-1/2 pointer-events-none"
          style={{
            width: "100vw",
            height: "56.25vw", // 16:9 aspect ratio
            minHeight: "100vh",
            minWidth: "177.77vh", // 16:9 aspect ratio
            transform: "translate(-50%, -50%)",
          }}
          src="https://www.youtube.com/embed/I1qPYBsKllg?autoplay=1&mute=1&loop=1&playlist=I1qPYBsKllg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Gradient overlay for better blending */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20" />
      </div>

      {/* ========================================
          LOCAL VIDEO FROM PUBLIC FOLDER (COMMENTED)
          ========================================
          To use a local video instead of YouTube:
          1. Place your video in: public/videos/hero-background.mp4
          2. Comment out the YouTube iframe section above
          3. Uncomment the section below
      */}
      {/* 
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20" />
      </div>
      */}

      {/* ========================================
          DIRECT VIDEO URL FROM CDN (COMMENTED)
          ========================================
          To use a video from a CDN or cloud storage:
          1. Comment out the YouTube iframe section
          2. Uncomment the section below
          3. Replace the src URL with your video URL
      */}
      {/* 
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          crossOrigin="anonymous"
        >
          <source src="https://your-cdn-url.com/path-to-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20" />
      </div>
      */}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(14, 107, 168) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: preloaderFinished ? 0 : 2.5 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: preloaderFinished ? 0.2 : 2.7,
              }}
              className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm"
            >
              <span className="text-accent font-semibold text-xs md:text-sm tracking-wide">
                Education Mentor & Guide
              </span>
            </motion.div>

            <div className="space-y-4 md:space-y-6">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: preloaderFinished ? 0.4 : 2.9,
                }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg"
              >
                <span className="block mb-2">Hello, I am</span>
                <span className="block text-accent drop-shadow-[0_2px_10px_rgba(14,107,168,0.5)]">
                  {preloaderFinished && (
                    <TypingText text="Dr. Ravi Sharma" delay={0} speed={80} />
                  )}
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: preloaderFinished ? 1.5 : 4,
                }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl min-h-[3rem] md:min-h-[4rem] drop-shadow-md"
              >
                {preloaderFinished && (
                  <CyclingTypingText
                    texts={subtitleTexts}
                    delay={1500}
                    typingSpeed={50}
                    deletingSpeed={30}
                    pauseTime={2000}
                  />
                )}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: preloaderFinished ? 1.8 : 4.3,
              }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-5 md:px-8 md:py-6 text-sm md:text-base group shadow-xl"
              >
                <Link to="/about">
                  Learn About Me
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-5 md:px-8 md:py-6 text-sm md:text-base bg-transparent backdrop-blur-sm shadow-xl"
              >
                <Link to="/vidyajeevan">Explore Vidyajeevan</Link>
              </Button>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: preloaderFinished ? 2 : 4.5 }}
              className="grid grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/30"
            >
              <div>
                {preloaderFinished && (
                  <CounterAnimation
                    end={20}
                    suffix="+"
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg"
                    duration={2000}
                  />
                )}
                <div className="text-xs md:text-sm text-white/80">Years</div>
              </div>
              <div>
                {preloaderFinished && (
                  <CounterAnimation
                    end={5000}
                    suffix="+"
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg"
                    duration={2000}
                  />
                )}
                <div className="text-xs md:text-sm text-white/80">Students</div>
              </div>
              <div>
                {preloaderFinished && (
                  <CounterAnimation
                    end={95}
                    suffix="%"
                    className="text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg"
                    duration={2000}
                  />
                )}
                <div className="text-xs md:text-sm text-white/80">Success</div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Image with scroll effect */}
          <motion.div
            style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: preloaderFinished ? 0.3 : 2.8 }}
            // className="relative order-first lg:order-last"
            className="hidden lg:block"
          >
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
              {/* Decorative Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-48 h-48 md:w-72 md:h-72 bg-accent/30 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-48 h-48 md:w-72 md:h-72 bg-secondary/30 rounded-full blur-3xl"
              />

              {/* Main Image with fade animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-white/50 backdrop-blur-sm"
              >
                <img
                  src="/professional-indian-education-mentor-doctor-in-for.jpg"
                  alt="Dr. Ravi Sharma"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
          {/* Space divider for mobile — replaces image height */}
          <div className="lg:hidden h-[400px] sm:h-[500px] md:h-[600px] flex items-end justify-center">
            {/* Optional: add subtle visual cue (e.g., dotted line or icon) */}
            {/* Example: */}
            <div className="w-px h-24 bg-white/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
