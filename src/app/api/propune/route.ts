import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const nume_produs = formData.get('nume_produs') as string
  const link_produs = formData.get('link_produs') as string
  if (!nume_produs) return NextResponse.redirect(new URL('/?propune=error', req.url))
  const supabase = await createClient()
  await supabase.from('product_proposals').insert({ nume_produs, link_produs: link_produs || null })
  return NextResponse.redirect(new URL('/?propune=success', req.url))
}
