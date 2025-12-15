
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CyclingTypingTextProps {
  texts: string[]
  className?: string
  delay?: number
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export default function CyclingTypingText({
  texts,
  className = "",
  delay = 0,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseTime = 2000,
}: CyclingTypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setHasStarted(true)
    }, delay)

    return () => clearTimeout(startDelay)
  }, [delay])

  useEffect(() => {
    if (!hasStarted) return

    const currentText = texts[currentTextIndex]

    if (isTyping) {
      // Typing phase
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Pause before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, pauseTime)
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Move to next text
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }
    }
  }, [displayedText, currentTextIndex, isTyping, hasStarted, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
        className="inline-block ml-0.5"
      >
        |
      </motion.span>
    </span>
  )
}
