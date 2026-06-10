import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { ArrowRight, Send, Shield, CheckCircle, Users, ShoppingBag, Tag, Edit3, Handshake, Package, Truck } from 'lucide-react'
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
                    <span className="w-0 h-0 border-l-[5px] border-l-white border-y-[3px] border-y-transparent ml-0.5" />
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

            {/* CENTER — Products (Client Component) */}
            <HeroProducts />

            {/* RIGHT — Stats card WHITE */}
            <div className="lg:col-span-3 flex items-center justify-end py-8 lg:py-12">
              <div className="bg-white rounded-2xl p-5 w-full max-w-[240px] shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Users size={26} className="text-[#FFBE00]" />
                  <div>
                    <div className="text-3xl font-bold text-gray-900 leading-none">124</div>
                    <div className="text-gray-500 text-xs mt-0.5">oameni</div>
                  </div>
                </div>
                <div className="text-center text-gray-400 text-xs my-2">↓</div>
                <div className="text-center text-gray-600 text-xs font-medium mb-3">negociem împreună</div>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Preț retail</div>
                    <div className="text-gray-400 line-through text-base font-semibold">199 lei</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-xs mb-1">Preț KUMMO</div>
                    <div className="text-[#FFBE00] font-bold text-xl">149 lei</div>
                  </div>
                </div>
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
              <div className="w-14 h-14 bg-[#FFF0C2] rounded-2xl flex items-center justify-center shrink-0">
                <Tag size={26} className="text-[#FFBE00]" />
              </div>
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2">
          {[
            { nr:'1', icon:<Edit3 size={24} className="text-[#FFBE00]" />, title:'Propune produsul', desc:'Spune-ne ce vrei să negociem.' },
            { nr:'2', icon:<Users size={24} className="text-[#FFBE00]" />, title:'Comunitatea votează', desc:'Cele mai dorite produse merg mai departe.' },
            { nr:'3', icon:<Handshake size={24} className="text-[#FFBE00]" />, title:'Negociem prețul', desc:'Obținem cea mai bună ofertă posibilă.' },
            { nr:'4', icon:<Package size={24} className="text-[#FFBE00]" />, title:'Livrăm produsul', desc:'La 100 cumpărători, campania se confirmă.' },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-0">
              <div className="flex flex-col items-center text-center flex-1">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#FFF9E6] border border-[#FFE680] flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#FFBE00] rounded-full flex items-center justify-center text-black text-xs font-bold shadow-sm">
                    {step.nr}
                  </div>
                </div>
                <div className="font-semibold text-gray-900 text-sm">{step.title}</div>
                <div className="text-gray-500 text-xs mt-1 max-w-[140px]">{step.desc}</div>
              </div>
              {i < 3 && (
                <div className="hidden lg:block text-gray-300 text-xl px-2 mb-8">→</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== 3 COLOANE ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* De ce platim mai putin */}
          <div>
            <h3 className="font-bold text-base mb-4">De ce plătim mai puțin?</h3>
            <ul className="space-y-3">
              {['Negociem direct cu furnizorii','Eliminăm costurile inutile','Puterea comunității aduce prețuri mai bune','Cumpărăm inteligent, împreună'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle size={16} className="text-[#FFBE00] shrink-0 fill-[#FFBE00] text-white" style={{color:'white', fill:'#FFBE00'}} />{item}
                </li>
              ))}
            </ul>
          </div>

          {/* Comunitatea KUMMO */}
          <div className="text-center">
            <h3 className="font-bold text-base mb-6">Comunitatea KUMMO</h3>
            <div className="flex justify-center gap-8">
              <div className="flex flex-col items-center">
                <Users size={32} className="text-[#FFBE00] mb-2" />
                <div className="font-bold text-lg">12.500+</div>
                <div className="text-gray-500 text-xs">membri activi</div>
              </div>
              <div className="flex flex-col items-center">
                <ShoppingBag size={32} className="text-[#FFBE00] mb-2" />
                <div className="font-bold text-lg">120+</div>
                <div className="text-gray-500 text-xs">campanii finalizate</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 mb-2 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FFBE00" strokeWidth="2" className="w-8 h-8">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="font-bold text-lg">37.000+ lei</div>
                <div className="text-gray-500 text-xs">economisiți împreună</div>
              </div>
            </div>
          </div>

          {/* 100% in siguranta */}
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
              <Send size={20} className="text-black" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="font-bold text-lg">Primește primul acces la campanii.</div>
              <div className="text-gray-400 text-sm mt-0.5">Fii primul care află despre noile produse și cele mai bune oferte negociate.</div>
              <div className="flex items-center gap-4 mt-1 justify-center sm:justify-start">
                <span className="text-gray-500 text-xs flex items-center gap-1">🔒 Nu trimitem spam.</span>
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
              {/* Footer Logo */}
              <div className="flex items-center gap-2 mb-4">
                <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                  <rect width="36" height="36" rx="8" fill="#FFBE00"/>
                  <path d="M10 12C10 10.9 10.9 10 12 10H22L26 14V24C26 25.1 25.1 26 24 26H12C10.9 26 10 25.1 10 24V12Z" fill="black" opacity="0.85"/>
                  <circle cx="12.5" cy="12.5" r="1.5" fill="#FFBE00"/>
                  <path d="M14 17H22M14 20H20" stroke="#FFBE00" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div>
                  <div className="font-bold text-sm">KUMMO</div>
                  <div className="text-[9px] text-gray-400">comunitatea care negociază</div>
                </div>
              </div>
              <div className="flex gap-2">
                {[
                  <svg key="fb" viewBox="0 0 24 24" className="w-4 h-4 fill-gray-500"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                  <svg key="ig" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#6b7280" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                  <svg key="tt" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
                  <svg key="yt" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#6b7280"/></svg>,
                ].map((icon, i) => (
                  <div key={i} className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">{icon}</div>
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
