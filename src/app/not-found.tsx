import Brand from '@/components/layout/header/Brand'
import React from 'react'

function NotFound() {
    return (
        <div className='m-auto flex items-center justify-center flex-col'>
            <Brand />
            <h2 className="text-4xl text-muted-foreground">Page not found!</h2>
        </div>
    )
}

export default NotFound
