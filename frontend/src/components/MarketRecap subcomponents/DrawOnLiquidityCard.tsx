export function DrawOnLiquidityCard() {
  return (
    <div>
      <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#5a76b5', marginBottom: '10px' }}>DRAW ON LIQUIDITY</div>
      <article style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '13px', color: '#111827' }}>Prior Week High</span>
          <span style={{ fontSize: '13px', color: '#111827' }}>1.000</span>
        </div>
        <div style={{ backgroundColor: 'green', padding: '9px', borderRadius: '5px' }}>
          <span style={{ fontSize: '13px', fontFamily: 'monospace', fontWeight: 'bold', color: '#ffffff' }}>ABOVE</span>
        </div>
      </article>
    </div>
  );
}