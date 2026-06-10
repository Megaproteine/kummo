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

      {/* Products */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center z-10" style={{height: '100%'}}>
        {/* iPhone */}
        <img
          src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&q=80"
          alt="iPhone 15"
          className="h-60 object-contain rounded-2xl"
          style={{filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))', marginRight: '-20px'}}
          onError={(e) => { (e.target as HTMLImageElement).src = '/kummo_assets/products/iphone15-placeholder.png' }}
        />
        {/* Whey */}
        <img
          src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=300&q=80"
          alt="Whey Protein"
          className="h-72 object-contain rounded-2xl"
          style={{filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.8))', zIndex: 15}}
          onError={(e) => { (e.target as HTMLImageElement).src = '/kummo_assets/products/whey-placeholder.png' }}
        />
        {/* Nike */}
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80"
          alt="Nike"
          className="h-24 object-contain rounded-xl"
          style={{filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.7))', marginBottom: '16px', marginLeft: '-30px', zIndex: 20}}
          onError={(e) => { (e.target as HTMLImageElement).src = '/kummo_assets/products/nike-placeholder.png' }}
        />
        {/* Airfryer */}
        <img
          src="https://images.unsplash.com/photo-1648146003700-2b30fe975b5e?w=300&q=80"
          alt="Airfryer"
          className="h-52 object-contain rounded-2xl"
          style={{filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))', marginLeft: '-10px'}}
          onError={(e) => { (e.target as HTMLImageElement).src = '/kummo_assets/products/airfryer-placeholder.png' }}
        />
      </div>
    </div>
  )
}
