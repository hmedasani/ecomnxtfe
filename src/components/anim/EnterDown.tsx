import { ChildProps } from '@/app/layout'
import React from 'react'
import * as motion from "motion/react-client"

export default function AnimEnterDown({ className, children }: ChildProps) {
    return (
        <motion.div
            className={className ?? className}
            initial={{ y: -50, opacity: 0 }}       // Start slightly to the right
            animate={{ y: 0, opacity: 1 }}        // Animate to original position
            exit={{ y: 20, opacity: 0 }}         // Optional: animate out to the left
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}
