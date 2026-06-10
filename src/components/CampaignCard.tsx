'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'

interface Campaign {
  id: string
  slug: string
  nume: string
  imagine_principala: string | null
  pret_magazin: number
  pret_kummo: number
  discount_procent: number
  participanti_curenti: number
  prag_minim: number
  zile_ramase: number
}

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  const [liked, setLiked] = useState(false)
  const progress = Math.min((campaign.participanti_curenti / campaign.prag_minim) * 100, 100)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative bg-gray-50 flex items-center justify-center h-44 overflow-hidden">
        <span className="absolute top-3 left-3 bg-[#FFBE00] text-black text-xs font-bold px-2 py-1 rounded-md z-10">
          -{campaign.discount_procent}%
        </span>
        <button onClick={() => setLiked(!liked)} className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-sm z-10">
          <Heart size={15} className={liked ? 'fill-red-500 text-red-500' : 'text-gray-300'} />
        </button>
        {campaign.imagine_principala ? (
          <img src={campaign.imagine_principala} alt={campaign.nume} className="h-36 w-full object-contain p-2" />
        ) : (
          <div className="h-36 w-full flex items-center justify-center text-gray-200 text-xs">Imagine produs</div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2 min-h-[40px]">
          {campaign.nume}
        </h3>

        {/* Pret magazin row */}
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">Preț magazin</span>
          <span className="text-gray-400 line-through text-xs">
            {Number(campaign.pret_magazin).toLocaleString('ro-RO', { minimumFractionDigits: 2 })} lei
          </span>
        </div>

        {/* Pret KUMMO row */}
        <div className="flex items-center justify-between">
          <span className="text-gray-700 text-sm font-medium">Preț KUMMO</span>
          <span className="text-[#FFBE00] font-bold text-lg leading-none">
            {Number(campaign.pret_kummo).toLocaleString('ro-RO', { minimumFractionDigits: 2 })} lei
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div className="bg-[#FFBE00] h-1.5 rounded-full" style={{ width: `${progress}%` }} />
        </div>

        {/* Stats */}
        <div className="flex justify-between text-xs text-gray-500">
          <span><b className="text-gray-800 font-semibold">{campaign.participanti_curenti}</b> / {campaign.prag_minim} participanți</span>
          <span><b className="text-gray-800 font-semibold">{campaign.zile_ramase}</b> zile rămase</span>
        </div>

        <Link href={`/campanii/${campaign.slug}`}
          className="mt-1 w-full text-center border border-[#FFBE00] text-[#FFBE00] hover:bg-[#FFBE00] hover:text-black font-semibold py-2.5 rounded-xl text-sm transition-colors">
          Vezi detalii
        </Link>
      </div>
    </div>
  )
}
