import AlertFeed from './components/AlertFeed.tsx';
import useAlertStream from './hooks/useAlertStream.ts';



function App() {
    
    const alerts = useAlertStream();

    return(
        <div className="App">
            {<AlertFeed alerts={alerts} />}
        </div>
    );

}

export default App
