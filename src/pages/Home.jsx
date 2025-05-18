import React from 'react'
import ThemeToggle from '../component/ThemeToggle'
import Threads from '../component/ThreadsBackground'

function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
    {/* Theme Toggle */}
    <ThemeToggle />
    {/* Background Effeect */}
    <div style={{ width: '100vw', height: '100vh', position: 'relative'  }}>
  <Threads
    amplitude={3}
    distance={1.1}
    enableMouseInteraction={false}
  />
</div>
    {/* Navbar */}
    {/* Main Content*/}
    {/* Footer*/}


    </div>
  )
}

export default Home