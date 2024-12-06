import React from 'react'

export default function Close( { size = 'normal' }: { size?: 'small' | 'normal' } ) {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={ size === 'normal' ? "11" : '8' }
            height={ size === 'normal' ? "11" : '8' }
            fill="none"
            viewBox="0 0 9 9"
        >
            <path
            fill="currentColor"
            d="M.93 8.717L.333 8.12 3.62 4.832.333 1.544.93.946l3.288 3.288L7.506.946l.598.598-3.288 3.288L8.104 8.12l-.598.597L4.218 5.43.93 8.717z"
            ></path>
        </svg>
    )
}
