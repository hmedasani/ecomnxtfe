import { APP_NAME } from '@/lib/constants';
import React from 'react'

function SiteFooter() {
    const date = new Date().getFullYear();
    return (
        <footer id='site_footer'>
            <p>
                {APP_NAME}&copy;{date}. All rights reserved.
            </p>
        </footer>
    )
}

export default SiteFooter
