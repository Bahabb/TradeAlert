export function DealingRange() {
  return (
    <div>
      <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#5a76b5', marginBottom: '10px' }}>DEALING RANGE</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#ff2d55' }}>PREMIUM</span>
          <span style={{ fontSize: '13px', color: '#ffffff', fontFamily: 'monospace', marginTop: '2px' }}>1.0924</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#5a76b5' }}>EQ</span>
          <span style={{ fontSize: '13px', color: '#ffffff', fontFamily: 'monospace', marginTop: '2px' }}>1.0853</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#00e87a' }}>DISCOUNT</span>
          <span style={{ fontSize: '13px', color: '#ffffff', fontFamily: 'monospace', marginTop: '2px' }}>1.0781</span>
        </div>
      </div>
      <div style={{ height: 10, background: 'linear-gradient(90deg, rgba(0,232,122,0.25) 0%, rgba(0,232,122,0.06) 50%, rgba(255,45,85,0.06) 50%, rgba(255,45,85,0.25) 100%)', borderRadius: '5px', marginTop: '8px' }}></div>
    </div>
  );
}