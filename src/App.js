import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [state, setState] = useState(0)

    const increment = () => setState(prev => prev + 1);

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <h2 style={{fontSize: 70, color: 'red'}}>value = {state}</h2>
            <button
                style={{background: 'black', color: "white", padding: 15}}
                onClick={increment}
            >
                increment
            </button>
        </div>
    );
}

export default App;
