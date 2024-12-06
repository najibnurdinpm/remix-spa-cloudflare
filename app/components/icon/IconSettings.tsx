import React from 'react'

type IIconSettings = {
    className: string
}

export default function IconSettings( { className }: IIconSettings ) {
    return (
        <div className={ className }>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
                >
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M14.49 11.424a2.59 2.59 0 012.593 2.58 2.59 2.59 0 01-2.593 2.58 2.59 2.59 0 01-2.595-2.58 2.59 2.59 0 012.595-2.58zm0 1.25a1.34 1.34 0 00-1.345 1.33c0 .734.603 1.33 1.345 1.33.74 0 1.343-.596 1.343-1.33 0-.734-.602-1.33-1.343-1.33zm-6.09.737a.625.625 0 010 1.25H3.15a.625.625 0 010-1.25H8.4zM5.094 3.333a2.59 2.59 0 012.594 2.581 2.59 2.59 0 01-2.594 2.58A2.59 2.59 0 012.5 5.913a2.591 2.591 0 012.594-2.58zm0 1.25A1.34 1.34 0 003.75 5.915c0 .734.603 1.33 1.344 1.33.742 0 1.344-.596 1.344-1.33 0-.734-.602-1.33-1.344-1.33zm10.899.75a.625.625 0 010 1.25h-5.25a.625.625 0 010-1.25h5.25z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </div>
    )
}
