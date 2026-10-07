import AlertFeed from './components/AlertFeed.tsx';
import MarketRecap from './components/MarketRecap.tsx';
import useAlertStream from './hooks/useAlertStream.ts';



function App() {
    
    const alerts = useAlertStream();

    return(
        <div className="main-container" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', height: '100vh', width: '100vw' }}>
                <AlertFeed alerts={alerts} />
                <MarketRecap />
        </div>
    );

}

export default App
