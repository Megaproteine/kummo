'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error: err } = await supabase.auth.signInWithPassword({ email: form.email, password: form.password })
    if (err) { setError('Email sau parolă incorectă.'); setLoading(false); return }
    router.push('/')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-[#FFBE00] rounded-xl flex items-center justify-center"><span className="text-black font-bold text-lg">K</span></div>
            <div className="text-left"><div className="font-bold text-xl">KUMMO</div><div className="text-xs text-gray-400">comunitatea care negociază</div></div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Bun revenit!</h1>
          <p className="text-gray-500 text-sm mt-1">Loghează-te în contul tău</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="email@exemplu.ro"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFBE00] transition-colors" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Parolă</label>
            <div className="relative">
              <input type={showPass ? 'text' : 'password'} required value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder="Parola ta"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-[#FFBE00] transition-colors" />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="text-right"><Link href="/reset-parola" className="text-[#FFBE00] text-sm hover:underline">Ai uitat parola?</Link></div>
          {error && <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl">{error}</div>}
          <button type="submit" disabled={loading} className="w-full bg-[#FFBE00] hover:bg-[#F5A623] disabled:opacity-60 text-black font-bold py-3 rounded-xl transition-colors text-base">
            {loading ? 'Se loghează...' : 'Loghează-te'}
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">Nu ai cont? <Link href="/inregistrare" className="text-[#FFBE00] font-semibold hover:underline">Înregistrează-te gratuit</Link></p>
      </div>
    </div>
  )
}
