'use client'

export default function HeroProducts() {
  return (
    <div className="hidden lg:flex lg:col-span-5 items-end justify-center relative overflow-hidden">
      {/* Yellow blob */}
      <div className="absolute top-4 right-4 w-56 h-56 bg-[#FFBE00] rounded-full" style={{opacity: 0.9}} />
      {/* Floating avatars */}
      {[
        { src: 'https://i.pravatar.cc/40?img=20', style: 'absolute top-6 left-20 z-20' },
        { src: 'https://i.pravatar.cc/40?img=21', style: 'absolute top-8 right-16 z-20' },
        { src: 'https://i.pravatar.cc/40?img=22', style: 'absolute top-1/3 left-6 z-20' },
        { src: 'https://i.pravatar.cc/40?img=23', style: 'absolute bottom-4 right-4 z-20' },
      ].map((a, i) => (
        <img key={i} src={a.src} alt="" className={`w-10 h-10 rounded-full border-2 border-white object-cover shadow-lg ${a.style}`} />
      ))}
      {/* Products */}
      <div className="relative z-10 flex items-end justify-center h-full w-full">
        <img
          src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-1.jpg"
          alt="iPhone 15"
          className="h-64 object-contain z-10 -mr-4"
          style={{filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.6))'}}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <img
          src="https://m.media-amazon.com/images/I/71nWnKFfg5L._AC_SX679_.jpg"
          alt="Whey"
          className="h-72 object-contain z-20"
          style={{filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.6))'}}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <img
          src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-excee-mens-shoes-DZ5996.png"
          alt="Nike"
          className="h-32 object-contain z-30 -mb-2 -ml-4"
          style={{filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'}}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <img
          src="https://www.philips.com/c-dam/b2c/master/experience/ho/oven/airfryer-xxl/hd9860-91/hd9860-91-product-image-front-facing.png"
          alt="Airfryer"
          className="h-56 object-contain z-10 -ml-6"
          style={{filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'}}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>
    </div>
  )
}
