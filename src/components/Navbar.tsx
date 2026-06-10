'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            {/* Tag icon */}
            <svg width="48" height="48" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 68L62 24H98V58L54 102C48 108 38 108 32 102L18 88C12 82 12 74 18 68Z" stroke="#FFC928" strokeWidth="8" strokeLinejoin="round"/>
              <circle cx="85" cy="41" r="7" stroke="#FFC928" strokeWidth="7"/>
              <path d="M35 74C44 86 62 86 71 74" stroke="#FFC928" strokeWidth="7" strokeLinecap="round"/>
            </svg>
            {/* Text */}
            <div className="flex flex-col leading-none">
              <span className="text-[#071426] font-black tracking-[0.18em] text-3xl leading-none">KUMMO</span>
              <div className="flex justify-between mt-1" style={{fontSize: '11px', fontWeight: 500, letterSpacing: '0.04em'}}>
                <span className="text-[#FFC928] font-semibold">comunitatea</span>
                <span className="text-[#071426]">care negociază</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/cum-functioneaza" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Cum funcționează</Link>
            <Link href="/campanii" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Campanii active</Link>
            <Link href="/despre-noi" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Despre noi</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/inregistrare" className="bg-[#FFC928] hover:bg-[#F5A623] text-black font-semibold px-5 py-2 rounded-lg text-sm transition-colors">
              Intră în comunitate
            </Link>
            <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <Link href="/cum-functioneaza" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>Cum funcționează</Link>
          <Link href="/campanii" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>Campanii active</Link>
          <Link href="/despre-noi" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>Despre noi</Link>
        </div>
      )}
    </nav>
  )
}
