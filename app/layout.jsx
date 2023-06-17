import React from 'react'
import '@styles/global.css'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export const metadata = {
  title:'Curology',
  description:'Curology in a teraphy cream for your skinn'
}

const layout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <main>
                <div>
                    <Navbar />
                    {children}
                    <Footer />
                 </div>
            </main>
        </body>
    </html>
  )
}

export default layout