import './MarketRecap.css'

function MarketRecap() {
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

                {/* bias card */}
                <div style={{backgroundColor: 'antiquewhite', padding: '15px 15px',borderRadius: '5px',}}>
                    <div style={{fontSize: 15, lineHeight: 2, opacity: 0.7, color: '#41537b8f'}}>DAILY BIAS</div>
                    <div style={{display: 'flex', alignItems: 'baseline', gap: '15px',}}>
                        <span style={{fontSize: 30, fontWeight: 'bold', color: '#111827', textTransform: 'uppercase', letterSpacing: 1}}>Bullish</span>
                        <span style={{fontSize: 15, lineHeight: 2, fontWeight: 'bold', color: '#111827'}}>STRONG</span>
                    </div>

                    <div style={{fontSize: 16, color: '#111827'}}>Active Session:</div>

                </div>

            </div>
        </div>
        </> 
    );
}

export default MarketRecap;