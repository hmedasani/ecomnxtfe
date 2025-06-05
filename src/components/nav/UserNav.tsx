import Link from 'next/link'
import React from 'react'

function UserNav() {
    return (
        <nav id='user_nav'>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/my-account">My Account</Link>

        </nav>
    )
}

export default UserNav
