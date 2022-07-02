import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html>
        <Head/>
        <body className='min-h-screen dark:bg-dark dark:text-light transition-all '>
            <Main/>
            <NextScript/>
        </body>
    </Html>
  )
}

export default Document