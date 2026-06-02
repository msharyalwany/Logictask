'use client'
export default function ThreeScene() {
  return (
    <div className="float" style={{ width: '460px', height: '460px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Rings */}
      {[160, 200, 240, 280].map((size, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: size + 'px',
          height: size + 'px',
          borderRadius: '50%',
          border: `1px solid rgba(0,212,170,${0.15 - i * 0.03})`,
          animation: `spin${i % 2 === 0 ? 'CW' : 'CCW'} ${8 + i * 4}s linear infinite`,
        }} />
      ))}

      {/* Center glow */}
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,170,0.15) 0%, rgba(0,212,170,0) 70%)',
        border: '1px solid rgba(0,212,170,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 40px rgba(0,212,170,0.1)',
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(0,212,170,0.1)',
          border: '1px solid rgba(0,212,170,0.4)',
        }} />
      </div>

      {/* Dots */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#00D4AA',
          opacity: 0.6,
          transform: `rotate(${deg}deg) translateX(140px)`,
          animation: `pulse 2s ease-in-out ${i * 0.3}s infinite alternate`,
        }} />
      ))}

      <style>{`
        @keyframes spinCW { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinCCW { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes pulse { from { opacity: 0.3; transform: rotate(var(--deg)) translateX(140px) scale(0.8); } to { opacity: 0.8; transform: rotate(var(--deg)) translateX(140px) scale(1.2); } }
      `}</style>
    </div>
  )
}
