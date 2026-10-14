import './MarketRecap.css'
import { MarketStructurePoint } from '../types';

function Divider() {
  return <div style={{ height: '1px', backgroundColor: '#ffffff', width: '100%', margin: '14px 0', flexShrink: 0 }} />
}

interface MarketRecapProps {
    marketSequence: Array<MarketStructurePoint>;
}

function MarketRecap(props: MarketRecapProps) {
    return(
        <>
          {/* Root Container */}
          <section style={{ display: 'flex', flexDirection: 'column', borderColor: 'white', borderStyle: 'solid', borderWidth: '1px' }}>

                {/* Header */}
                <header className="recap-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 className="recap-title">4H Market Recap</h2>
                    <span className="recap-badge">Live</span>
                </header>

                {/* Content Area */}
                <div style={{ padding: 15, display: 'flex', flexDirection: 'column' }}>

                    {/* 1. Daily Bias Card */}
                    <article style={{ backgroundColor: 'antiquewhite', padding: '15px 15px', borderRadius: '5px' }}>
                        <div style={{ fontSize: 13, lineHeight: 2, opacity: 0.7, color: '#41537b8f' }}>DAILY BIAS</div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '15px' }}>
                            <span style={{ fontSize: 30, fontWeight: 'bold', color: '#111827', textTransform: 'uppercase', letterSpacing: 1 }}>Bullish</span>                        
                            <span style={{ fontSize: 15, lineHeight: 2, fontWeight: 'bold', color: '#111827' }}>STRONG</span>
                        </div>                    

                        <div style={{ fontSize: 13, color: '#111827' }}>Active Session:</div>
                        <div style={{ fontSize: 13, color: '#111827' }}>Label</div>
                    </article>
                    
                    <Divider />

                    {/* 2. Market Sequence Section */}
                    <span style={{ fontSize: 15, fontWeight: 'bold', color: '#5a76b5', marginBottom: '10px', display: 'block' }}>4H Market Sequence Structure</span>
                    <div>
                        {props.marketSequence.length > 0 ? (
                        <ul style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightgray', padding: '10px 10px', borderRadius: '5px', listStyle: 'none', paddingLeft: 15, paddingRight: 15, margin: 0 }}>
                            {props.marketSequence.map((point, index) => (
                            <li 
                                key={index} 
                                className={`card ${point.isSwept ? 'swept' : 'active'}`} 
                                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
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
                    
                    <Divider />

                    {/* 3. Dealing Range Section */}
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

                    <Divider />
                    {/* 4. Key Levels*/}
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

                    <Divider />
                    
                    {/* 5. Draw on Liquidity Card */}
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

                    <Divider />

                    {/*6.Fair Value Gap (4H) */}
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

                    <Divider />

                    {/*7. Order Block */}
                    <div>
                        <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#5a76b5', marginBottom: '10px' }}>ORDER BLOCK (4H)</div>
                        <article style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '13px', color: '#111827' }}>Bullish OB</span>
                                <span style={{ fontSize: '13px', fontFamily: 'monospace', color: '#111827' }}>1.0750 - 1.0770</span>
                            </div>
                            <div style={{ backgroundColor: 'green', padding: '9px', borderRadius: '5px' }}>
                                <span style={{ fontSize: '13px', fontFamily: 'monospace', fontWeight: 'bold', color: '#ffffff' }}>TESTED</span>
                            </div>
                        </article>
                    </div>


                    <Divider />

                    {/* 8. Previous 4H Candle */}
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
                    
                    <Divider />
                    {/* 9. Confluence Matrix */}
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
                </div>
          </section>
        </>
    );
}

export default MarketRecap;