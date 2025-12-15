
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Target, Award, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import CounterAnimation from "./counter-animation"
import TypingText from "./typing-text"

const features = [
  {
    icon: BookOpen,
    title: "Industry-Relevant Curriculum",
    description: "Comprehensive, updated curriculum aligned with modern educational standards.",
  },
  {
    icon: Users,
    title: "Personalized Mentorship",
    description: "One-on-one guidance tailored to your unique learning style and aspirations.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Support",
    description: "Career guidance and strategic planning to achieve your academic objectives.",
  },
  {
    icon: Award,
    title: "Lifetime Placement",
    description: "Continuous guidance even after achieving your initial goals.",
  },
]

const stats = [
  { label: "Students Placed", value: "4,500+" },
  { label: "Hiring Partners", value: "800+" },
  { label: "Highest Salary", value: "50 LPA" },
  { label: "Expert Mentors", value: "1,200+" },
]

export default function VidyajeevanSection() {
  return (
    <section className="relative py-12 md:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 md:px-6 py-1.5 md:py-2 bg-accent/10 rounded-full border border-accent/20 mb-4 md:mb-6"
          >
            <span className="text-accent font-semibold text-xs md:text-sm tracking-wide">OUR VISION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 leading-tight px-4"
          >
            <TypingText
              text="A world where talent finds opportunity through education-driven learning"
              delay={200}
              speed={30}
            />
          </motion.h2>
        </motion.div>

        {/* Mission Statement with Large Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl order-last lg:order-first"
            >
              <img
                src="/modern-educational-institution-students-learning-t.jpg"
                alt="Vidyajeevan Educational Framework"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </motion.div>

            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                Our goal is to prepare you for success in your educational career.
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed">
                Vidyajeevan is an institutional framework designed by Dr. Ravi Sharma to transform students' educational
                journey through structured mentorship, innovative learning methods, and comprehensive career guidance.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base group w-full sm:w-auto"
              >
                <Link to="/vidyajeevan">
                  Explore Vidyajeevan
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card p-5 md:p-6 rounded-2xl shadow-lg border border-border hover:shadow-2xl hover:border-accent/30 transition-all"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/10 rounded-xl md:rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                  </div>
                </div>

                <h3 className="text-base md:text-xl font-bold text-foreground mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-xs md:text-sm">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Results Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 md:mb-16"
          >
            <TypingText text="Results That Speak" delay={200} speed={60} />
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-card p-6 rounded-2xl shadow-lg border border-border"
            >
              <CounterAnimation
                end={Number.parseInt(stat.value.replace(/[^0-9]/g, ""))}
                suffix={stat.value.includes("+") ? "+" : stat.value.includes("LPA") ? " LPA" : ""}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-2"
                duration={2500}
              />
              <div className="text-xs sm:text-sm md:text-base text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
