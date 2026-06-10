import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Users, ArrowRight, Send, Shield, Truck, CheckCircle, Package, Handshake } from 'lucide-react'
import Navbar from '@/components/Navbar'
import CampaignCard from '@/components/CampaignCard'

export default async function HomePage() {
  const supabase = await createClient()
  const { data: campaigns } = await supabase
    .from('campaigns')
    .select('*')
    .eq('status', 'activa')
    .order('created_at', { ascending: false })
    .limit(4)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="bg-[#0F1923] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-stretch min-h-[480px]">

            {/* Left */}
            <div className="flex-1 flex flex-col justify-center py-12 lg:py-16 z-10">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Împreună cumpărăm<br />
                <span className="text-[#FFBE00]">mai bine.</span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xs">
                Cu cât suntem mai mulți, cu atât obținem prețuri mai bune la produsele pe care ni le dorim.
                Votează, alătură-te unei campanii și cumpără la preț negociat.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/campanii" className="flex items-center justify-center gap-2 bg-[#FFBE00] hover:bg-[#F5A623] text-black font-bold px-6 py-3 rounded-xl transition-colors">
                  Vezi campaniile active <ArrowRight size={18} />
                </Link>
                <Link href="/cum-functioneaza" className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                  <span className="w-5 h-5 rounded-full border border-white flex items-center justify-center">
                    <span className="w-0 h-0 border-l-[5px] border-l-white border-y-[4px] border-y-transparent ml-0.5" />
                  </span>
                  Cum funcționează
                </Link>
              </div>

              {/* Members */}
              <div className="flex items-center gap-3 mt-8">
                <div className="flex -space-x-2">
                  {[
                    'https://i.pravatar.cc/32?img=1',
                    'https://i.pravatar.cc/32?img=2',
                    'https://i.pravatar.cc/32?img=3',
                    'https://i.pravatar.cc/32?img=4',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-[#0F1923] object-cover" />
                  ))}
                </div>
                <span className="text-gray-300 text-sm">
                  <span className="text-[#FFBE00] font-bold">12.500+</span> membri activi și în continuă creștere
                </span>
              </div>
            </div>

            {/* Center — products */}
            <div className="hidden lg:flex flex-1 items-end justify-center relative">
              {/* Yellow blob */}
              <div className="absolute top-8 right-8 w-48 h-48 bg-[#FFBE00] rounded-full opacity-80 blur-sm" />
              {/* Floating avatars */}
              <img src="https://i.pravatar.cc/40?img=5" alt="" className="absolute top-6 left-12 w-10 h-10 rounded-full border-2 border-white object-cover shadow-lg z-10" />
              <img src="https://i.pravatar.cc/40?img=6" alt="" className="absolute top-4 right-32 w-10 h-10 rounded-full border-2 border-white object-cover shadow-lg z-10" />
              <img src="https://i.pravatar.cc/40?img=7" alt="" className="absolute top-1/3 left-4 w-9 h-9 rounded-full border-2 border-white object-cover shadow-lg z-10" />
              <img src="https://i.pravatar.cc/40?img=8" alt="" className="absolute bottom-8 right-8 w-9 h-9 rounded-full border-2 border-white object-cover shadow-lg z-10" />
              {/* Products */}
              <div className="relative z-10 flex items-end justify-center gap-0 h-full pb-0">
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blacktitanium?wid=5120&hei=2880&fmt=p-jpg&bgc=f5f5f7&blend-mode=exclusion&preferwebp=true&quality=90&im=Resize,width=480" alt="iPhone" className="h-72 object-contain drop-shadow-2xl" />
                <img src="https://m.media-amazon.com/images/I/71nWnKFfg5L._AC_SX679_.jpg" alt="Whey" className="h-64 object-contain drop-shadow-2xl -ml-8" />
                <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-excee-mens-shoes-DZ5996.png" alt="Nike" className="h-40 object-contain drop-shadow-2xl" />
              </div>
            </div>

            {/* Right — stats card */}
            <div className="lg:w-64 flex items-center py-8 lg:py-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 space-y-4 w-full border border-white/10">
                <div className="flex items-center gap-3">
                  <Users size={28} className="text-[#FFBE00]" />
                  <div>
                    <div className="text-3xl font-bold">124</div>
                    <div className="text-gray-400 text-xs">oameni</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <div className="flex-1 h-px bg-white/20" />
                  ↓ negociem împreună ↓
                  <div className="flex-1 h-px bg-white/20" />
                </div>
                <div className="flex justify-between">
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Preț retail</div>
                    <div className="text-gray-300 line-through text-base font-semibold">199 lei</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-xs mb-1">Preț KUMMO</div>
                    <div className="text-[#FFBE00] font-bold text-xl">149 lei</div>
                  </div>
                </div>
                <div className="bg-[#FFBE00] rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <div className="text-black text-xs font-medium">Economie pentru tine</div>
                    <div className="text-black font-bold text-3xl leading-none mt-1">50 lei</div>
                  </div>
                  <div className="bg-black text-[#FFBE00] font-bold text-sm px-2 py-1.5 rounded-lg">-25%</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CAMPANII ACTIVE ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Campanii active</h2>
          <Link href="/campanii" className="flex items-center gap-1 text-[#FFBE00] font-semibold text-sm hover:underline">
            Vezi toate campaniile <ArrowRight size={16} />
          </Link>
        </div>
        {campaigns && campaigns.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {campaigns.map((c) => <CampaignCard key={c.id} campaign={c} />)}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">Nu există campanii active momentan.</div>
        )}
      </section>

      {/* ===== PROPUNE UN PRODUS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-12">
        <div className="bg-[#FFFBEE] rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Icon + text */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-14 h-14 bg-[#FFF3C4] rounded-2xl flex items-center justify-center text-2xl shrink-0">🏷️</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Următorul pas:<br />Propune un produs!</h2>
                <p className="text-gray-500 text-sm mt-1 max-w-xs">Spune-ne ce produs îți dorești să negociem și îl vom include în următoarele campanii.</p>
              </div>
            </div>

            {/* Form */}
            <form action="/api/propune" method="POST" className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-stretch sm:items-start">
              <div className="flex flex-col gap-2 flex-1 sm:flex-none">
                <input
                  name="nume_produs"
                  type="text"
                  placeholder="Nume produs"
                  required
                  className="border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFBE00] w-full sm:w-56"
                />
                <input
                  name="link_produs"
                  type="url"
                  placeholder="Link produs (optional)"
                  className="border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFBE00] w-full sm:w-56"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#FFBE00] hover:bg-[#F5A623] text-black font-bold px-5 py-3 rounded-xl text-sm transition-colors whitespace-nowrap self-center"
              >
                <Send size={16} /> Propune produsul
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== CUM FUNCTIONEAZA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Cum funcționează?</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
          {[
            { nr: '1', emoji: '✏️', title: 'Propune produsul', desc: 'Spune-ne ce vrei să negociem.' },
            { nr: '2', emoji: '👥', title: 'Comunitatea votează', desc: 'Cele mai dorite produse merg mai departe.' },
            { nr: '3', emoji: '🤝', title: 'Negociem prețul', desc: 'Obținem cea mai bună ofertă posibilă.' },
            { nr: '4', emoji: '📦', title: 'Livrăm produsul', desc: 'La 100 cumpărători, campania se confirmă.' },
          ].map((step, i) => (
            <div key={i} className="flex sm:flex-col items-center gap-4 sm:gap-0 flex-1 min-w-0">
              <div className="flex sm:flex-col items-center gap-3 sm:gap-4 w-full sm:text-center relative">
                {/* Step circle */}
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#FFF9E6] flex items-center justify-center text-2xl">
                    {step.emoji}
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#FFBE00] rounded-full flex items-center justify-center text-black text-xs font-bold shadow-sm">
                    {step.nr}
                  </div>
                </div>
                <div className="sm:mt-3 text-left sm:text-center">
                  <div className="font-semibold text-gray-900 text-sm">{step.title}</div>
                  <div className="text-gray-500 text-xs mt-1 max-w-[130px]">{step.desc}</div>
                </div>
              </div>
              {/* Arrow */}
              {i < 3 && (
                <div className="hidden sm:flex items-center justify-center text-gray-300 text-xl px-2 mt-[-24px]">→</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3 COLOANE INFO ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* De ce platim mai putin */}
          <div>
            <h3 className="font-bold text-base mb-4 text-gray-900">De ce plătim mai puțin?</h3>
            <ul className="space-y-3">
              {['Negociem direct cu furnizorii','Eliminăm costurile inutile','Puterea comunității aduce prețuri mai bune','Cumpărăm inteligent, împreună'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle size={16} className="text-[#FFBE00] shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>

          {/* Comunitatea KUMMO */}
          <div className="text-center">
            <h3 className="font-bold text-base mb-6 text-gray-900">Comunitatea KUMMO</h3>
            <div className="flex justify-center gap-6">
              {[
                { icon: '👥', v: '12.500+', l: 'membri activi' },
                { icon: '🛍️', v: '120+', l: 'campanii finalizate' },
                { icon: '💰', v: '37.000+ lei', l: 'economisiți împreună' },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-2xl mb-1">{s.icon}</span>
                  <div className="font-bold text-lg">{s.v}</div>
                  <div className="text-gray-500 text-xs">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 100% in siguranta */}
          <div>
            <h3 className="font-bold text-base mb-4 text-gray-900">100% în siguranță</h3>
            <ul className="space-y-3">
              {['Plată securizată','Banii sunt reținuți până la atingerea pragului minim','Dacă nu se atinge pragul, primești banii înapoi integral'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                  <Shield size={16} className="text-[#FFBE00] shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="bg-[#0F1923] text-white py-10 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-12 h-12 bg-[#FFBE00] rounded-xl flex items-center justify-center shrink-0">
              <Send size={22} className="text-black" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="font-bold text-lg">Primește primul acces la campanii.</div>
              <div className="text-gray-400 text-sm">Fii primul care află despre noile produse și cele mai bune oferte negociate.</div>
              <div className="text-gray-500 text-xs mt-1">🔒 Nu trimitem spam. Doar oferte relevante.</div>
            </div>
            <form className="flex gap-2 w-full sm:w-auto" action="/api/newsletter" method="POST">
              <input
                name="email"
                type="email"
                placeholder="Adresa ta de email"
                required
                className="bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFBE00] w-full sm:w-64"
              />
              <button type="submit" className="bg-[#FFBE00] hover:bg-[#F5A623] text-black font-bold px-5 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap">
                Intră în comunitate
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-white border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#FFBE00] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">K</span>
                </div>
                <div>
                  <div className="font-bold text-sm">KUMMO</div>
                  <div className="text-[9px] text-gray-400">comunitatea care negociază</div>
                </div>
              </div>
              <div className="flex gap-3">
                {['f','ig','tt','yt'].map((s, i) => (
                  <div key={i} className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-xs font-bold">{s}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="font-semibold text-sm mb-3">KUMMO</div>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><Link href="/cum-functioneaza" className="hover:text-gray-900">Cum funcționează</Link></li>
                <li><Link href="/campanii" className="hover:text-gray-900">Campanii active</Link></li>
                <li><Link href="/propune-produs" className="hover:text-gray-900">Propune produs</Link></li>
                <li><Link href="/despre-noi" className="hover:text-gray-900">Despre noi</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-sm mb-3">Legal</div>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><Link href="/termeni" className="hover:text-gray-900">Termeni și condiții</Link></li>
                <li><Link href="/confidentialitate" className="hover:text-gray-900">Politica de confidențialitate</Link></li>
                <li><Link href="/retur" className="hover:text-gray-900">Politica de retur</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-sm mb-3">Contact</div>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>contact@kummo.ro</li>
                <li>+40 770 123 456</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-6 text-center text-gray-400 text-xs">
            © 2024 KUMMO. Toate drepturile rezervate.
          </div>
        </div>
      </footer>
    </div>
  )
}
