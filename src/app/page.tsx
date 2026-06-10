import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { ArrowRight, Send, Shield, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import CampaignCard from '@/components/CampaignCard'
import HeroProducts from '@/components/HeroProducts'

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
      <section className="bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[460px]">

            {/* LEFT — Text */}
            <div className="lg:col-span-4 flex flex-col justify-center py-10 lg:py-16 z-10">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Împreună cumpărăm<br />
                <span className="text-[#FFBE00]">mai bine.</span>
              </h1>
              <p className="text-gray-300 text-sm mb-8 max-w-xs leading-relaxed">
                Cu cât suntem mai mulți, cu atât obținem prețuri mai bune la produsele pe care ni le dorim.
                Votează, alătură-te unei campanii și cumpără la preț negociat.
              </p>
              <div className="flex flex-col gap-3 max-w-xs">
                <Link href="/campanii" className="flex items-center justify-center gap-2 bg-[#FFBE00] hover:bg-[#F5A623] text-black font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                  Vezi campaniile active <ArrowRight size={16} />
                </Link>
                <Link href="/cum-functioneaza" className="flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
                  <span className="w-5 h-5 rounded-full border border-white/70 flex items-center justify-center shrink-0">
                    <span className="w-0 h-0 border-l-[5px] border-l-white/70 border-y-[3px] border-y-transparent ml-0.5" />
                  </span>
                  Cum funcționează
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="flex -space-x-2">
                  {['https://i.pravatar.cc/32?img=10','https://i.pravatar.cc/32?img=11','https://i.pravatar.cc/32?img=12','https://i.pravatar.cc/32?img=13'].map((src, i) => (
                    <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-[#111827] object-cover" />
                  ))}
                </div>
                <span className="text-gray-300 text-xs">
                  <span className="text-[#FFBE00] font-bold">12.500+</span> membri activi și în continuă creștere
                </span>
              </div>
            </div>

            {/* CENTER — Products */}
            <HeroProducts />

            {/* RIGHT — Stats card WHITE */}
            <div className="lg:col-span-3 flex items-center justify-end py-8 lg:py-12">
              <div className="bg-white rounded-2xl p-5 w-full max-w-[240px] shadow-xl">
                {/* 124 oameni */}
                <div className="flex items-center gap-3 mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFBE00" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 leading-none">124</div>
                    <div className="text-gray-500 text-xs">oameni</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 my-2">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-gray-400 text-xs">↓</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="text-center text-gray-500 text-xs mb-3">negociem împreună</div>

                {/* Prices */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-gray-400 text-xs mb-0.5">Preț retail</div>
                    <div className="text-gray-400 line-through text-base font-semibold">199 lei</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-xs mb-0.5">Preț KUMMO</div>
                    <div className="text-[#FFBE00] font-bold text-xl">149 lei</div>
                  </div>
                </div>

                {/* Economy card */}
                <div className="bg-[#111827] rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <div className="text-gray-400 text-xs">Economie pentru tine</div>
                    <div className="text-white font-bold text-2xl leading-none mt-1">50 lei</div>
                  </div>
                  <div className="bg-[#FFBE00] text-black font-bold text-xs px-2 py-1 rounded-lg">-25%</div>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#FFFBEE] rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-14 h-14 bg-[#FFF0C2] rounded-2xl flex items-center justify-center text-2xl shrink-0">🏷️</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 leading-snug">Următorul pas:<br />Propune un produs!</h2>
                <p className="text-gray-500 text-sm mt-1.5 max-w-xs">Spune-ne ce produs îți dorești să negociem și îl vom include în următoarele campanii.</p>
              </div>
            </div>
            <form action="/api/propune" method="POST" className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-end">
              <div className="flex flex-col gap-2 flex-1 sm:flex-none">
                <input name="nume_produs" type="text" placeholder="Nume produs" required
                  className="border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFBE00] sm:w-52" />
                <input name="link_produs" type="url" placeholder="Link produs (optional)"
                  className="border border-gray-200 bg-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFBE00] sm:w-52" />
              </div>
              <button type="submit" className="flex items-center gap-2 bg-[#FFBE00] hover:bg-[#F5A623] text-black font-bold px-5 py-3 rounded-xl text-sm transition-colors whitespace-nowrap">
                <Send size={15} /> Propune produsul
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===== CUM FUNCTIONEAZA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-12">Cum funcționează?</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          {[
            { nr:'1', icon:'✏️', title:'Propune produsul', desc:'Spune-ne ce vrei să negociem.' },
            { nr:'2', icon:'👥', title:'Comunitatea votează', desc:'Cele mai dorite produse merg mai departe.' },
            { nr:'3', icon:'🤝', title:'Negociem prețul', desc:'Obținem cea mai bună ofertă posibilă.' },
            { nr:'4', icon:'📦', title:'Livrăm produsul', desc:'La 100 cumpărători, campania se confirmă.' },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-2xl bg-[#FFF9E6] flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#FFBE00] rounded-full flex items-center justify-center text-black text-xs font-bold">
                  {step.nr}
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 -translate-y-1/2 text-gray-300 text-lg">→</div>
                )}
              </div>
              <div className="font-semibold text-gray-900 text-sm">{step.title}</div>
              <div className="text-gray-500 text-xs mt-1 max-w-[140px]">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3 COLOANE ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-bold text-base mb-4">De ce plătim mai puțin?</h3>
            <ul className="space-y-3">
              {['Negociem direct cu furnizorii','Eliminăm costurile inutile','Puterea comunității aduce prețuri mai bune','Cumpărăm inteligent, împreună'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle size={16} className="text-[#FFBE00] shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-base mb-6">Comunitatea KUMMO</h3>
            <div className="flex justify-center gap-8">
              {[{icon:'👥',v:'12.500+',l:'membri activi'},{icon:'🛍️',v:'120+',l:'campanii finalizate'},{icon:'💰',v:'37.000+ lei',l:'economisiți împreună'}].map((s,i) => (
                <div key={i}><div className="text-2xl mb-1">{s.icon}</div><div className="font-bold text-lg">{s.v}</div><div className="text-gray-500 text-xs">{s.l}</div></div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-base mb-4">100% în siguranță</h3>
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
      <section className="bg-[#111827] text-white py-10 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-12 h-12 bg-[#FFBE00] rounded-xl flex items-center justify-center shrink-0">
              <Send size={22} className="text-black" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="font-bold text-lg">Primește primul acces la campanii.</div>
              <div className="text-gray-400 text-sm">Fii primul care află despre noile produse și cele mai bune oferte negociate.</div>
              <div className="flex items-center gap-3 mt-1 justify-center sm:justify-start">
                <span className="text-gray-500 text-xs">🔒 Nu trimitem spam.</span>
                <span className="text-gray-500 text-xs">Doar oferte relevante.</span>
              </div>
            </div>
            <form className="flex gap-2 w-full sm:w-auto" action="/api/newsletter" method="POST">
              <input name="email" type="email" placeholder="Adresa ta de email" required
                className="bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFBE00] w-full sm:w-64" />
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
              <div className="flex gap-2">
                {['f','ig','tt','yt'].map((s,i) => (
                  <div key={i} className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-xs">{s}</div>
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
