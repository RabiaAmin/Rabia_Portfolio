import { ArrowUp } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
   <footer className='py-12 px-4 bg-card relative  border-t border-border mt-12 mb-0 pt-8 flex flex-wrap justify-between'>
    {" "}
    <p>&copy; {new Date().getFullYear()}  Rabia.Dev , All rights reserved.  </p>

    <a href="#hero" className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
        <ArrowUp/>
    </a>
   </footer>
  )
}

export default Footer