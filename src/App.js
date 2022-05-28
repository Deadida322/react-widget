import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {
    useEffect(()=>{
        if(!document.getElementById('widget')){
            let style = document.createElement('link')
            style.id = 'widget'
            style.href = './style.css'
            style.rel = 'stylesheet'
            document.querySelector('head').appendChild(style)
        }
    }, [])
  return (
    <div className="App">
      <header className="App-header">
        Тимофей, я сделал тебе олимпиаду
      </header>
    </div>
  );
}

export default App;
