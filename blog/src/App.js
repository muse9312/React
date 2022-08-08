import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const [state, setstate] = useState(initialState);

  return (
    <div className="App">
      <div className=" black-nav">
        <h4>블로그임</h4>

      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>2월 17일 발행</p>

      </div>
    </div>
  );
}

export default App;
