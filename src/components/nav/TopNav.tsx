import Link from 'next/link'
import React from 'react'

function TopNav() {
    return (
        <nav id='top_nav'>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
        </nav>
    )
}

export default TopNav
