export function DailyBiasCard() {
  return (
    <article style={{ backgroundColor: 'antiquewhite', padding: '15px 15px', borderRadius: '5px' }}>
      <div style={{ fontSize: 13, lineHeight: 2, opacity: 0.7, color: '#41537b8f' }}>DAILY BIAS</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '15px' }}>
        <span style={{ fontSize: 30, fontWeight: 'bold', color: '#111827', textTransform: 'uppercase', letterSpacing: 1 }}>Bullish</span>                        
        <span style={{ fontSize: 15, lineHeight: 2, fontWeight: 'bold', color: '#111827' }}>STRONG</span>
      </div>                    
      <div style={{ fontSize: 13, color: '#111827' }}>Active Session:</div>
      <div style={{ fontSize: 13, color: '#111827' }}>Label</div>
    </article>
  );
}