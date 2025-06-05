import { ChildProps } from '@/app/layout'
import React from 'react'

function Main({ children }: ChildProps) {
    return (
        <main id='main_content_area'>
            {children}
        </main>
    )
}

export default Main
