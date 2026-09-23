import AlertFeed from './components/AlertFeed.tsx';
import { mockData } from './mockData.ts';
function App() {

    return(
        <div className="App">
            <AlertFeed alerts={mockData} />
        </div>
    );

}

export default App
