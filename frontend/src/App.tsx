import AlertFeed from './components/AlertFeed.tsx';
import MarketRecap from './components/MarketRecap.tsx';
import useAlertStream from './hooks/useAlertStream.ts';



function App() {
    
    const alerts = useAlertStream();

    return(
        <div className="main-container" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', height: '100vh', width: '100vw' }}>
                <AlertFeed alerts={alerts} />
                <MarketRecap marketSequence={[{ type: 'HH', price: 100, isSwept: false }, 
                    { type: 'HL', price: 105, isSwept: true },
                    { type: 'LH', price: 95, isSwept: false },
                    { type: 'LL', price: 90, isSwept: true },
                    ]} />
        </div>
    );

}

export default App
