
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { useRef } from "react"
import TypingText from "./typing-text"
import CounterAnimation from "./counter-animation"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-primary text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20">
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-dark-accent/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-4 md:px-6 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <span className="text-light-accent font-semibold text-xs md:text-sm tracking-wide">
                ABOUT DR. RAVI SHARMA
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            >
              <TypingText text="Transforming Lives Through Educational Excellence" delay={300} speed={40} />
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 text-sm sm:text-base leading-relaxed text-white/90"
            >
              <p>
                Dr. Ravi Sharma is a distinguished education mentor with over two decades of experience in guiding
                students towards academic excellence and personal growth.
              </p>

              <p>
                His innovative approach has transformed the lives of thousands of students, combining traditional wisdom
                with contemporary techniques to create lasting impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-3 md:gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm px-3 md:px-6 py-3 md:py-4 rounded-xl border border-white/20">
                <CounterAnimation end={20} suffix="+" className="text-2xl md:text-3xl font-bold text-light-accent" />
                <div className="text-xs md:text-sm mt-1">Years</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 md:px-6 py-3 md:py-4 rounded-xl border border-white/20">
                <CounterAnimation end={5000} suffix="+" className="text-2xl md:text-3xl font-bold text-light-accent" />
                <div className="text-xs md:text-sm mt-1">Students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 md:px-6 py-3 md:py-4 rounded-xl border border-white/20">
                <CounterAnimation end={95} suffix="%" className="text-2xl md:text-3xl font-bold text-light-accent" />
                <div className="text-xs md:text-sm mt-1">Success</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                size="lg"
                className="bg-light-accent hover:bg-light-accent/90 text-primary px-6 md:px-10 py-5 md:py-6 text-sm md:text-lg font-semibold group w-full sm:w-auto"
              >
                <Link to="/about">
                  Discover My Story
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image - appears from hero section scroll */}
          <motion.div style={{ y: imageY, opacity: imageOpacity }} className="relative order-first lg:order-last">
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 md:border-4 border-white/30"
              >
                <img
                  src="/professional-indian-education-mentor-doctor-in-for.jpg"
                  alt="Dr. Ravi Sharma"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
