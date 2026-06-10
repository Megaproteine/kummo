import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const email = formData.get('email') as string
  if (!email) return NextResponse.redirect(new URL('/?newsletter=error', req.url))
  const supabase = await createClient()
  await supabase.from('newsletter').upsert({ email })
  return NextResponse.redirect(new URL('/?newsletter=success', req.url))
}
