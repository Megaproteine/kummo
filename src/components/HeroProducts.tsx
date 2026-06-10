'use client'

import Image from 'next/image'

export default function HeroProducts() {
  return (
    <div className="hidden lg:flex lg:col-span-5 items-end justify-center relative overflow-hidden">
      {/* Yellow blob */}
      <div className="absolute top-0 right-8 w-60 h-60 bg-[#FFC928] rounded-full" style={{opacity: 1}} />
      {/* Floating avatars */}
      <img src="https://i.pravatar.cc/40?img=20" alt="" className="absolute top-6 left-16 w-10 h-10 rounded-full border-2 border-white object-cover shadow-lg z-20" />
      <img src="https://i.pravatar.cc/40?img=21" alt="" className="absolute top-4 right-20 w-10 h-10 rounded-full border-2 border-white object-cover shadow-lg z-20" />
      <img src="https://i.pravatar.cc/40?img=22" alt="" className="absolute top-1/3 left-4 w-9 h-9 rounded-full border-2 border-white object-cover shadow-lg z-20" />
      <img src="https://i.pravatar.cc/40?img=23" alt="" className="absolute bottom-6 right-6 w-9 h-9 rounded-full border-2 border-white object-cover shadow-lg z-20" />

      {/* Products */}
      <div className="relative z-10 flex items-end justify-center w-full h-full">
        <img
          src="/kummo_assets/products/iphone15-placeholder.png"
          alt="iPhone 15"
          className="h-64 object-contain z-10"
          style={{filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.7))'}}
        />
        <img
          src="/kummo_assets/products/whey-placeholder.png"
          alt="Whey"
          className="h-72 object-contain z-20 -mx-4"
          style={{filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.7))'}}
        />
        <img
          src="/kummo_assets/products/nike-placeholder.png"
          alt="Nike"
          className="h-28 object-contain z-30 mb-4"
          style={{filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.6))'}}
        />
        <img
          src="/kummo_assets/products/airfryer-placeholder.png"
          alt="Airfryer"
          className="h-52 object-contain z-10"
          style={{filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))'}}
        />
      </div>
    </div>
  )
}
