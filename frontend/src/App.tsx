import AlertItem from './components/AlertItem.tsx';
import { mockData } from './mockData.ts';
function App() {

    return(
        <div className="App">
            <AlertItem alert={mockData[0]} />
        </div>
    );

}

export default App
