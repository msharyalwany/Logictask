'use client'
import dynamic from 'next/dynamic'

const BackgroundParticles = dynamic(
  () => import('./BackgroundParticles'),
  { ssr: false }
)

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      <BackgroundParticles />
      {children}
    </div>
  )
}
