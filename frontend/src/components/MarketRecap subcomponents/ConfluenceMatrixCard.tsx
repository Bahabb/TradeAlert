export function ConfluenceMatrixCard() {
  return (
    <div>
      <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#5a76b5', marginBottom: '10px' }}>CONFLUENCE MATRIX</div>
      <article style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '13px', color: '#111827' }}>Score / Rating</span>
          <span style={{ fontSize: '13px', color: '#111827' }}>4 / 5 Confluences</span>
        </div>
        <div style={{ backgroundColor: 'green', padding: '9px', borderRadius: '5px' }}>
          <span style={{ fontSize: '13px', fontFamily: 'monospace', fontWeight: 'bold', color: '#ffffff' }}>HIGH</span>
        </div>
      </article>
    </div>
  );
}