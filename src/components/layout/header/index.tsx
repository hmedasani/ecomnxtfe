import React from 'react'
import Brand from './Brand'
import TopNav from '@/components/nav/TopNav'
import UserNav from '@/components/nav/UserNav'

function SiteHeader() {
    return (
        <header id="site_header">
            <Brand />
            <TopNav />
            <UserNav />
        </header>
    )
}

export default SiteHeader
