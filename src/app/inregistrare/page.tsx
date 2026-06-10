'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Eye, EyeOff, CheckCircle } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '', nume: '', telefon: '' })
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error: err } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: { data: { nume_complet: form.nume, telefon: form.telefon } }
    })
    if (err) { setError(err.message); setLoading(false); return }
    setSuccess(true)
    setLoading(false)
  }

  if (success) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-sm">
        <CheckCircle size={64} className="text-[#FFBE00] mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Cont creat cu succes!</h2>
        <p className="text-gray-500 mb-6">Verifică emailul pentru a confirma contul.</p>
        <Link href="/login" className="inline-block bg-[#FFBE00] hover:bg-[#F5A623] text-black font-bold px-8 py-3 rounded-xl transition-colors">Mergi la Login</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-[#FFBE00] rounded-xl flex items-center justify-center"><span className="text-black font-bold text-lg">K</span></div>
            <div className="text-left"><div className="font-bold text-xl">KUMMO</div><div className="text-xs text-gray-400">comunitatea care negociază</div></div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Alătură-te comunității</h1>
          <p className="text-gray-500 text-sm mt-1">Creează-ți contul și începe să economisești</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: 'Nume complet', name: 'nume', type: 'text', placeholder: 'Ion Popescu' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'email@exemplu.ro' },
            { label: 'Telefon', name: 'telefon', type: 'tel', placeholder: '0700 000 000' },
          ].map(f => (
            <div key={f.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} value={(form as any)[f.name]}
                onChange={e => setForm({...form, [f.name]: e.target.value})}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FFBE00] transition-colors" />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Parolă</label>
            <div className="relative">
              <input type={showPass ? 'text' : 'password'} required minLength={6} value={form.password}
                onChange={e => setForm({...form, password: e.target.value})} placeholder="Minim 6 caractere"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-[#FFBE00] transition-colors" />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {error && <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl">{error}</div>}
          <button type="submit" disabled={loading} className="w-full bg-[#FFBE00] hover:bg-[#F5A623] disabled:opacity-60 text-black font-bold py-3 rounded-xl transition-colors text-base">
            {loading ? 'Se creează contul...' : 'Creează cont gratuit'}
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">Ai deja cont? <Link href="/login" className="text-[#FFBE00] font-semibold hover:underline">Loghează-te</Link></p>
      </div>
    </div>
  )
}
