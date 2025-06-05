import { ChildProps } from '@/app/layout'
import React from 'react'
import * as motion from "motion/react-client"

export default function AnimEnterLeft({ className, children }: ChildProps) {
    return (
        <motion.div
            className={className ?? className}
            initial={{ x: 50, opacity: 0 }}       // Start slightly to the right
            animate={{ x: 0, opacity: 1 }}        // Animate to original position
            exit={{ x: -20, opacity: 0 }}         // Optional: animate out to the left
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}
