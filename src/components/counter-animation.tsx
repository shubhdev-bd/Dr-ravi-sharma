
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface CounterAnimationProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function CounterAnimation({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = "",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return

    hasAnimated.current = true
    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t)
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuad(progress))

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <div ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}
