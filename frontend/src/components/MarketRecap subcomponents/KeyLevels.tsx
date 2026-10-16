export function KeyLevels() {
  return (
    <article>
      <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#5a76b5', marginBottom: '10px' }}>KEY LEVELS</div>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0, listStyle: 'none' }}>
        <li style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightgray', padding: '8px 10px', borderRadius: '5px' }}>
          <span style={{ fontSize: '13px', color: '#111827' }}>Prior Week High</span>
          <span style={{ fontSize: '13px', fontFamily: 'monospace', color: '#ff2d55', fontWeight: 'bold' }}>1.0924</span>
        </li>
        <li style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightgray', padding: '8px 10px', borderRadius: '5px' }}>
          <span style={{ fontSize: '13px', color: '#111827' }}>Prior Day High</span>
          <span style={{ fontSize: '13px', fontFamily: 'monospace', color: '#ff2d55', fontWeight: 'bold' }}>1.0891</span>
        </li>
        <li style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightgray', padding: '8px 10px', borderRadius: '5px' }}>
          <span style={{ fontSize: '13px', color: '#111827' }}>Equilibrium</span>
          <span style={{ fontSize: '13px', fontFamily: 'monospace', color: '#5a76b5', fontWeight: 'bold' }}>1.0853</span>
        </li>
        <li style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightgray', padding: '8px 10px', borderRadius: '5px' }}>
          <span style={{ fontSize: '13px', color: '#111827' }}>Prior Day Low</span>
          <span style={{ fontSize: '13px', fontFamily: 'monospace', color: '#00e87a', fontWeight: 'bold' }}>1.0821</span>
        </li>
        <li style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightgray', padding: '8px 10px', borderRadius: '5px' }}>
          <span style={{ fontSize: '13px', color: '#111827' }}>Prior Week Low</span>
          <span style={{ fontSize: '13px', fontFamily: 'monospace', color: '#00e87a', fontWeight: 'bold' }}>1.0781</span>
        </li>
      </ul>
    </article>
  );
}