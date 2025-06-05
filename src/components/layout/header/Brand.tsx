import { APP_NAME } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

function Brand() {
    return (
        <Link href={"/"} id='brand'>
            <h2 className='text-2xl'>{APP_NAME.toUpperCase()}</h2>
        </Link>
    )
}

export default Brand
