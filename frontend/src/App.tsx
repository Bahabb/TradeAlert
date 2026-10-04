import AlertFeed from './components/AlertFeed.tsx';
import MarketRecap from './components/MarketRecap.tsx';
import useAlertStream from './hooks/useAlertStream.ts';



function App() {
    
    const alerts = useAlertStream();

    return(
        <div className="main-container" style={{ display: 'flex', height: '100vh', width: '100vw' }}>
            <div className="alert-feed-container" style={{flex: 7}}>
                {<AlertFeed alerts={alerts} />}
            </div>
            <div className="market-recap-container" style={{flex: 3, borderColor: 'white', borderStyle: 'solid', borderWidth: '1px'}}>
                <MarketRecap />
            </div>
        </div>
    );

}

export default App
