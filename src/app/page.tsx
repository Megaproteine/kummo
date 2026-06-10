import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Users, ArrowRight, Send, Shield, Truck, CheckCircle, Package, Handshake, Vote } from 'lucide-react'
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

      {/* HERO */}
      <section className="bg-[#0F1923] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-[480px] gap-8 lg:gap-0">
            <div className="flex-1 lg:py-16 z-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Împreună cumpărăm<br />
                <span className="text-[#FFBE00]">mai bine.</span>
              </h1>
              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-sm">
                Cu cât suntem mai mulți, cu atât obținem prețuri mai bune la produsele pe care ni le dorim.
                Votează, alătură-te unei campanii și cumpără la preț negociat.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/campanii" className="flex items-center justify-center gap-2 bg-[#FFBE00] hover:bg-[#F5A623] text-black font-bold px-6 py-3 rounded-xl transition-colors">
                  Vezi campaniile active <ArrowRight size={18} />
                </Link>
                <Link href="/cum-functioneaza" className="flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                  Cum funcționează
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="flex -space-x-2">
                  {['A','B','C','D'].map((l, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-[#FFBE00] border-2 border-[#0F1923] flex items-center justify-center text-black text-xs font-bold">{l}</div>
                  ))}
                </div>
                <span className="text-gray-300 text-sm"><span className="text-[#FFBE00] font-bold">12.500+</span> membri activi și în continuă creștere</span>
              </div>
            </div>

            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="text-gray-600 text-sm">[Imagini produse]</div>
            </div>

            <div className="lg:w-64 lg:py-16">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <Users size={28} className="text-[#FFBE00]" />
                  <div>
                    <div className="text-2xl font-bold">124</div>
                    <div className="text-gray-400 text-xs">oameni</div>
                  </div>
                </div>
                <div className="text-gray-400 text-xs text-center">↓ negociem împreună ↓</div>
                <div className="flex justify-between">
                  <div>
                    <div className="text-gray-400 text-xs">Preț retail</div>
                    <div className="text-gray-400 line-through font-semibold">199 lei</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Preț KUMMO</div>
                    <div className="text-[#FFBE00] font-bold text-xl">149 lei</div>
                  </div>
                </div>
                <div className="bg-[#FFBE00] rounded-xl p-3 flex items-center justify-between">
                  <div>
                    <div className="text-black text-xs">Economie pentru tine</div>
                    <div className="text-black font-bold text-2xl">50 lei</div>
                  </div>
                  <div className="bg-black text-[#FFBE00] font-bold text-sm px-2 py-1 rounded-lg">-25%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPANII ACTIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Campanii active</h2>
          <Link href="/campanii" className="flex items-center gap-1 text-[#FFBE00] font-semibold text-sm hover:underline">
            Vezi toate campaniile <ArrowRight size={16} />
          </Link>
        </div>
        {campaigns && campaigns.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {campaigns.map((c) => <CampaignCard key={c.id} campaign={c} />)}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">Nu există campanii active momentan.</div>
        )}
      </section>

      {/* PROPUNE UN PRODUS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#FFF9E6] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="text-4xl">🏷️</div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Următorul pas: Propune un produs!</h2>
            <p className="text-gray-600 text-sm">Spune-ne ce produs îți dorești să negociem și îl vom include în următoarele campanii.</p>
          </div>
          <form className="flex flex-col gap-2 w-full sm:w-auto" action="/api/propune" method="POST">
            <input name="nume_produs" type="text" placeholder="Nume produs" required className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFBE00] bg-white min-w-[200px]" />
            <input name="link_produs" type="url" placeholder="Link produs (opțional)" className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFBE00] bg-white" />
            <button type="submit" className="flex items-center justify-center gap-2 bg-[#FFBE00] hover:bg-[#F5A623] text-black font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
              <Send size={16} /> Propune produsul
            </button>
          </form>
        </div>
      </section>

      {/* CUM FUNCTIONEAZA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Cum funcționează?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { nr: '1', icon: <Package size={28} />, title: 'Propune produsul', desc: 'Spune-ne ce vrei să negociem.' },
            { nr: '2', icon: <Vote size={28} />, title: 'Comunitatea votează', desc: 'Cele mai dorite produse merg mai departe.' },
            { nr: '3', icon: <Handshake size={28} />, title: 'Negociem prețul', desc: 'Obținem cea mai bună ofertă posibilă.' },
            { nr: '4', icon: <Truck size={28} />, title: 'Livrăm produsul', desc: 'La 100 cumpărători, campania se confirmă.' },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[#FFF9E6] flex items-center justify-center text-[#FFBE00]">{step.icon}</div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#FFBE00] rounded-full flex items-center justify-center text-black text-xs font-bold">{step.nr}</div>
              </div>
              <div className="font-semibold text-gray-900 text-sm">{step.title}</div>
              <div className="text-gray-500 text-xs">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 COLOANE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">De ce plătim mai puțin?</h3>
            <ul className="space-y-3">
              {['Negociem direct cu furnizorii','Eliminăm costurile inutile','Puterea comunității aduce prețuri mai bune','Cumpărăm inteligent, împreună'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle size={16} className="text-[#FFBE00] shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-6">Comunitatea KUMMO</h3>
            <div className="flex justify-center gap-8">
              {[{v:'12.500+',l:'membri activi'},{v:'120+',l:'campanii finalizate'},{v:'37.000+ lei',l:'economisiți împreună'}].map((s,i) => (
                <div key={i}><div className="font-bold text-xl">{s.v}</div><div className="text-gray-500 text-xs">{s.l}</div></div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">100% în siguranță</h3>
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

      {/* NEWSLETTER */}
      <section className="bg-[#0F1923] text-white py-10 mt-8">
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
              <input name="email" type="email" placeholder="Adresa ta de email" required className="bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#FFBE00] min-w-[200px] sm:min-w-[260px]" />
              <button type="submit" className="bg-[#FFBE00] hover:bg-[#F5A623] text-black font-bold px-5 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap">Intră în comunitate</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-[#FFBE00] rounded-lg flex items-center justify-center"><span className="text-black font-bold text-xs">K</span></div>
                <div><div className="font-bold text-sm">KUMMO</div><div className="text-[9px] text-gray-400">comunitatea care negociază</div></div>
              </div>
            </div>
            <div>
              <div className="font-semibold text-sm mb-3">KUMMO</div>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><Link href="/cum-functioneaza" className="hover:text-gray-900">Cum funcționează</Link></li>
                <li><Link href="/campanii" className="hover:text-gray-900">Campanii active</Link></li>
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
          <div className="border-t border-gray-100 pt-6 text-center text-gray-400 text-xs">© 2024 KUMMO. Toate drepturile rezervate.</div>
        </div>
      </footer>
    </div>
  )
}
