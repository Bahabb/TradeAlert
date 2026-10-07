import './MarketRecap.css'

function MarketRecap() {
    return(
        /* header */
        <>
        <div style={{borderColor: 'white', borderStyle: 'solid', borderWidth: '1px'}}>
            <div className="recap-header">
                <h2 className="recap-title">4H Market Recap</h2>
                <span className="recap-badge">Live</span>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
                <div className="bias-card">
                    <span style={{ fontSize: 30, fontWeight: 'bold', color: '#111827', textTransform: 'uppercase', letterSpacing: 1}}>Bullish</span>
                    <span>STRONG</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default MarketRecap;