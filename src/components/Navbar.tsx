'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center">
            <img
              src="/kummo_assets/logo/kummo-logo.svg"
              alt="KUMMO"
              style={{ height: '90px', width: 'auto' }}
            />
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
