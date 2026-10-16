export function PreviousCandleCard() {
  return (
    <div>
      <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#5a76b5', marginBottom: '10px', display: 'block' }}>PREVIOUS 4H CANDLE</span> 
      <article style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='card'>
          <span style={{ fontSize: '13px', color: '#111827' }}>DIR</span>
          <span style={{ fontSize: '13px', color: '#111827' }}>BULL</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='card'>
          <span style={{ fontSize: '13px', color: '#111827' }}>Open</span>
          <span style={{ fontSize: '13px', color: '#111827', fontFamily: 'monospace' }}>1.0000</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='card'>
          <span style={{ fontSize: '13px', color: '#111827' }}>Close</span>
          <span style={{ fontSize: '13px', color: '#111827', fontFamily: 'monospace' }}>1.0000</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='card'>
          <span style={{ fontSize: '13px', color: '#111827' }}>High</span>
          <span style={{ fontSize: '13px', color: '#111827', fontFamily: 'monospace' }}>1.0000</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='card'>
          <span style={{ fontSize: '13px', color: '#111827' }}>Low</span>
          <span style={{ fontSize: '13px', color: '#111827', fontFamily: 'monospace' }}>1.0000</span>
        </div>
      </article>
    </div>
  );
}