import AlertItem from './components/AlertItem.tsx';

function App() {

    return(
        <div className="App">
            <AlertItem alert={{ id: '1', timestamp: '2023-01-01 12:00:00', message: 'This is a test alert.' }} />
        </div>
    );

}

export default App
