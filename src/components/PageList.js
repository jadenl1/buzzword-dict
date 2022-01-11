import React from 'react'
import { Link } from 'react-router-dom'

const PageList = () => {
    return (
        <div id = 'body2'>
            <p id = 'divider'>
                --------- or ---------
            </p>
            <div id = 'pages'>
                <Link to = '/trending'>
                    <a href = "">
                        trending
                    </a>
                </Link>
                <Link to = '/community'>
                    <a href = "">
                        community
                    </a>
                </Link>
                <Link to = '/browse'>
                    <a href = "">
                        browse
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default PageList
