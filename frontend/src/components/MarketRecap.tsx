import './MarketRecap.css'
import { MarketStructurePoint } from '../types';
function Divider() {
  return <div style={{ height: 1, background: 'white', margin: '14px 0' }} />
}

interface MarketRecapProps {
    marketSequence: Array<MarketStructurePoint>;
}

function MarketRecap(props: MarketRecapProps) {
    return(
        
        <>
        {/* container */}
        <div style={{display: 'flex', flexDirection: 'column', borderColor: 'white', borderStyle: 'solid', borderWidth: '1px'}}>

            {/* header */}
            <div className="recap-header">
                <h2 className="recap-title">4H Market Recap</h2>
                <span className="recap-badge">Live</span>
            </div>

            {/* content column */}
            <div style={{padding: 15, alignItems: 'center', justifyContent: 'space-between'}}>

                {/* daily bias card */}
                <div style={{backgroundColor: 'antiquewhite', padding: '15px 15px',borderRadius: '5px',}}>
                    <div style={{fontSize: 13, lineHeight: 2, opacity: 0.7, color: '#41537b8f'}}>DAILY BIAS</div>
                    <div style={{display: 'flex', alignItems: 'baseline', gap: '15px',}}>
                        <span style={{fontSize: 30, fontWeight: 'bold', color: '#111827', textTransform: 'uppercase', letterSpacing: 1}}>Bullish</span>                        
                        <span style={{fontSize: 15, lineHeight: 2, fontWeight: 'bold', color: '#111827'}}>STRONG</span>
                    </div>                    
            
                    <div style={{fontSize: 13, color: '#111827'}}>Active Session:</div>
                    <div style={{fontSize: 13, color: '#111827'}}>Label</div>
                </div>
                
                <Divider />

                <span style={{fontSize: 13, color: '#7a94cc8f'}}>4H Market Sequence Structure</span>
                <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightgray', padding: '5px 15px', marginTop: '10px', borderRadius: '5px'}}>
                { props.marketSequence.length > 0 ? 
                (props.marketSequence.map(  (point, index) => (
                    <div key={index} className={`card ${point.isSwept ? 'swept' : 'active'}`} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <span className="type" style={{fontSize: 13, color: '#111827'}}>{point.type}</span>
                        <span className="price" style={{fontSize: 13, color: '#111827'}}>{point.price}</span>
                        <span className="hover-text">{point.isSwept ? 'Swept' : 'Active'}</span>
                    </div> )
                )) : <span style={{fontSize: 13, color: '#7a94cc8f'}}>No data available</span>  } 
                </div>

            </div>
        </div>
        </> 
    );
}

export default MarketRecap;