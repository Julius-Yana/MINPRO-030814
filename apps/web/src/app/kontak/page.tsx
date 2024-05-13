import React from 'react'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
 
export default function kontak() {
  return (
    <div className="pt-28">
          <div className="text-xl text-center w-10/12 mx-auto tracking-wider text-neutral-400 max-lg:text-base max-md:text-sm"
        >
           Jl. Raya Antapani | SEJATI INDAH RAYA 
           <p>B/36, Probolinggo, Kec. Antapani Kidul, Bandung,</p>
           <p> Jawa Barat 40291</p>

          <p>support@kitatiketin.com</p>

         <p> +62851xxxxxx </p>
       
      </div>
      <Footer/>
    </div>
    
  )
}
