import React from 'react'
import '@styles/global.css';

export const metadata = {
    title: "Promptopia",
    description: "Discover and share AI-generated prompts",
}

const RootLayout = () => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">{children}</main>
        </body>
    </html>
  )
}

export default RootLayout;