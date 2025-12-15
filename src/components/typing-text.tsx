
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingTextProps {
  text: string
  className?: string
  delay?: number
  speed?: number
}

export default function TypingText({ text, className = "", delay = 0, speed = 50 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setHasStarted(true)
    }, delay)

    return () => clearTimeout(startDelay)
  }, [delay])

  useEffect(() => {
    if (!hasStarted || currentIndex >= text.length) return

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex])
      setCurrentIndex((prev) => prev + 1)
    }, speed)

    return () => clearTimeout(timeout)
  }, [currentIndex, text, hasStarted, speed])

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block ml-0.5"
        >
          |
        </motion.span>
      )}
    </span>
  )
}
