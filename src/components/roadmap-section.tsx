
import { useRef, useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"
import TypingText from "./typing-text"

const roadmapSteps = [
  {
    year: "2003",
    title: "The Beginning",
    description: "Started with a vision to transform education through personalized mentorship.",
  },
  {
    year: "2008",
    title: "Foundation",
    description: "Built core principles of student-centric mentorship and innovative teaching methods.",
  },
  {
    year: "2012",
    title: "Vidyajeevan Launch",
    description: "Launched revolutionary framework integrating personalized learning and career guidance.",
  },
  {
    year: "2015",
    title: "Recognition",
    description: "Received national acclaim with widespread success stories from mentored students.",
  },
  {
    year: "2019",
    title: "Digital Growth",
    description: "Integrated technology to reach students nationwide through online platforms.",
  },
  {
    year: "2023",
    title: "Legacy Continues",
    description: "Mentoring next generation with proven methodologies. 5000+ students transformed.",
  },
]

export default function RoadmapSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const stepIndex = Math.min(Math.floor(latest * (roadmapSteps.length + 1)), roadmapSteps.length - 1)
      setActiveStep(Math.max(0, stepIndex))
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <section ref={containerRef} className="relative py-12 md:py-20 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 md:px-6 py-1.5 md:py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-4 md:mb-6"
          >
            <span className="text-secondary font-semibold text-xs md:text-sm tracking-wide">THE JOURNEY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6"
          >
            <TypingText text="Journey & Roadmap" delay={200} speed={70} />
          </motion.h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto px-4">
            Explore the remarkable journey from humble beginnings to renowned education mentor
          </p>
        </motion.div>

        {/* Desktop View - Horizontal */}
        <div className="hidden md:block relative pb-20">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-border" />
            <motion.div
              style={{
                width: `${((activeStep + 1) / roadmapSteps.length) * 100}%`,
              }}
              className="absolute top-0 left-0 h-1 bg-accent origin-left transition-all duration-700 ease-out"
            />

            {/* Roadmap Steps */}
            <div className="relative flex justify-between pt-12">
              {roadmapSteps.map((step, index) => {
                const isActive = index <= activeStep

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col items-center w-1/6"
                  >
                    {/* Node */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.4 : 1,
                        backgroundColor: isActive ? "rgb(14, 107, 168)" : "rgb(226, 232, 240)",
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="w-4 h-4 rounded-full border-4 border-background shadow-lg z-10 -mt-14 mb-8"
                    />

                    {/* Card */}
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0.4,
                        y: isActive ? 0 : 20,
                        scale: isActive ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow w-full"
                    >
                      <div className="text-accent font-bold text-lg mb-2">{step.year}</div>
                      <h3 className="font-bold text-base lg:text-lg text-foreground mb-3">{step.title}</h3>
                      <p className="text-xs lg:text-sm text-foreground/70 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical */}
        <div className="md:hidden relative">
          {/* Progress Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          <motion.div
            style={{
              height: `${((activeStep + 1) / roadmapSteps.length) * 100}%`,
            }}
            className="absolute left-6 top-0 w-0.5 bg-accent origin-top transition-all duration-700 ease-out"
          />

          {/* Roadmap Steps */}
          <div className="space-y-10">
            {roadmapSteps.map((step, index) => {
              const isActive = index <= activeStep

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative flex items-start gap-4"
                >
                  {/* Node */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.5 : 1,
                      backgroundColor: isActive ? "rgb(14, 107, 168)" : "rgb(226, 232, 240)",
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-3 h-3 rounded-full border-4 border-background shadow-lg flex-shrink-0 mt-2 z-10"
                  />

                  {/* Card */}
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      x: isActive ? 0 : -10,
                      scale: isActive ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-card p-5 rounded-xl shadow-lg border border-border flex-1"
                  >
                    <div className="text-accent font-bold text-base mb-2">{step.year}</div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{step.description}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
