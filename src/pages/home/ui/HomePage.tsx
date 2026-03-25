'use client'

import { useEffect } from 'react'
import { Landing } from '@/widgets/landing'

export default function HomePage() {
  useEffect(() => {
    document.documentElement.classList.add('snap-landing')
    const footer = document.querySelector('footer')
    footer?.classList.add('snap-start')
    return () => {
      document.documentElement.classList.remove('snap-landing')
      footer?.classList.remove('snap-start')
    }
  }, [])

  return (
    <>
      <Landing />
    </>
  )
}
