'use client'
import dynamic from 'next/dynamic'

const BackgroundParticles = dynamic(
  () => import('./BackgroundParticles'),
  { ssr: false }
)

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundParticles />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </>
  )
}
