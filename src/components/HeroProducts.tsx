'use client'

export default function HeroProducts() {
  return (
    <div className="hidden lg:block lg:col-span-5 relative overflow-hidden">
      {/* Yellow blob */}
      <div className="absolute top-6 right-6 w-52 h-52 bg-[#FFC928] rounded-full z-0" />

      {/* Floating avatars */}
      <img src="https://i.pravatar.cc/40?img=20" alt="" className="absolute top-8 left-24 w-10 h-10 rounded-full border-2 border-white object-cover shadow-lg z-20" />
      <img src="https://i.pravatar.cc/40?img=21" alt="" className="absolute top-6 right-28 w-10 h-10 rounded-full border-2 border-white object-cover shadow-lg z-20" />
      <img src="https://i.pravatar.cc/40?img=22" alt="" className="absolute top-2/5 left-6 w-9 h-9 rounded-full border-2 border-white object-cover shadow-lg z-20" />
      <img src="https://i.pravatar.cc/40?img=23" alt="" className="absolute bottom-8 right-8 w-9 h-9 rounded-full border-2 border-white object-cover shadow-lg z-20" />

      {/* Products — arranged exactly as in design */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center z-10" style={{height: '100%'}}>
        {/* iPhone — tall left */}
        <img
          src="/kummo_assets/products/iphone15-placeholder.png"
          alt="iPhone 15"
          className="h-60 object-contain"
          style={{filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))', marginRight: '-20px'}}
        />
        {/* Whey — center tallest */}
        <img
          src="/kummo_assets/products/whey-placeholder.png"
          alt="Whey"
          className="h-72 object-contain"
          style={{filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))', zIndex: 15}}
        />
        {/* Nike — front bottom */}
        <img
          src="/kummo_assets/products/nike-placeholder.png"
          alt="Nike"
          className="h-24 object-contain"
          style={{filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.7))', marginBottom: '16px', marginLeft: '-30px', zIndex: 20}}
        />
        {/* Airfryer — right */}
        <img
          src="/kummo_assets/products/airfryer-placeholder.png"
          alt="Airfryer"
          className="h-52 object-contain"
          style={{filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))', marginLeft: '-10px'}}
        />
      </div>
    </div>
  )
}
