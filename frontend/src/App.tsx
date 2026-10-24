import AlertFeed from './components/AlertFeed/AlertFeed.tsx';
import MarketRecap from './components/MarketRecap/MarketRecap.tsx';
import './styles/theme.css';


function App() {
    

    return(
        <div className="main-container" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', height: '100vh', width: '100vw' }}>
                <AlertFeed/>
                <MarketRecap/>
        </div>
    );

}

export default App
