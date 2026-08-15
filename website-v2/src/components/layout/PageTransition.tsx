import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const variants = {
  initial: { opacity: 0, y: 10, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -8, filter: 'blur(6px)' },
}

export function PageTransition({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.38,
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.28 },
        filter: { duration: 0.34 },
      }}
      style={{ willChange: 'transform, opacity, filter' }}
    >
      {children}
    </motion.div>
  )
}
