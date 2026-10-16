import { MarketStructurePoint } from '../../types';

interface MarketSequenceProps {
  marketSequence: Array<MarketStructurePoint>;
}

export function MarketSequence({ marketSequence }: MarketSequenceProps) {
  return (
    <div>
      <span style={{ fontSize: 15, fontWeight: 'bold', color: '#5a76b5', marginBottom: '10px', display: 'block' }}>4H MARKET SEQUENCE STRUCTURE</span>
      {marketSequence.length > 0 ? (
        <ul style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightgray', padding: '10px 10px', borderRadius: '5px', listStyle: 'none', paddingLeft: 15, paddingRight: 15, margin: 0 }}>
          {marketSequence.map((point, index) => (
            <li key={index} className={`card ${point.isSwept ? 'swept' : 'active'}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="type" style={{ fontSize: 13, color: '#111827' }}>{point.type}</span>
              <span className="price" style={{ fontSize: 13, color: '#111827' }}>{point.price}</span>
              <span className="hover-text">{point.isSwept ? 'Swept' : 'Active'}</span>
            </li>
          ))}
        </ul>
      ) : (
        <span style={{ fontSize: 13, color: '#7a94cc8f', display: 'block' }}>No data available</span>
      )}
    </div>
  );
}