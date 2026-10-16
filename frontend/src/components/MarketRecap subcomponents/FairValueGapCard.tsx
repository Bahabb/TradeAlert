export function FairValueGapCard() {
  return (
    <div>
      <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#5a76b5', marginBottom: '10px' }}>FAIR VALUE GAP (4H)</div>
      <article style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '13px', color: '#111827' }}>Bullish Imbalance</span>
          <span style={{ fontSize: '13px', fontFamily: 'monospace', color: '#111827' }}>1.0820 - 1.0845</span>
        </div>
        <div style={{ backgroundColor: 'orange', padding: '9px', borderRadius: '5px' }}>
          <span style={{ fontSize: '13px', fontFamily: 'monospace', fontWeight: 'bold', color: '#ffffff' }}>UNMITIGATED</span>
        </div>
      </article>
    </div>
  );
}