'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

function KummoLogo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const s = size === 'sm' ? 28 : 36
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg width={s} height={s} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#FFBE00"/>
        <path d="M10 12C10 10.9 10.9 10 12 10H22L26 14V24C26 25.1 25.1 26 24 26H12C10.9 26 10 25.1 10 24V12Z" fill="black" opacity="0.85"/>
        <circle cx="12.5" cy="12.5" r="1.5" fill="#FFBE00"/>
        <path d="M14 17H22M14 20H20" stroke="#FFBE00" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <div>
        <div className={`font-bold leading-none text-gray-900 ${size === 'sm' ? 'text-base' : 'text-lg'}`}>KUMMO</div>
        <div className="text-[10px] text-gray-500 leading-none">comunitatea care negociază</div>
      </div>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <KummoLogo />

          <div className="hidden md:flex items-center gap-8">
            <Link href="/cum-functioneaza" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Cum funcționează</Link>
            <Link href="/campanii" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Campanii active</Link>
            <Link href="/despre-noi" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Despre noi</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/inregistrare" className="bg-[#FFBE00] hover:bg-[#F5A623] text-black font-semibold px-5 py-2 rounded-lg text-sm transition-colors">
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

export { KummoLogo }
