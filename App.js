import { useState } from 'react';
import './App.css';
import data from './data'
import Tours from './components/Tours';
function App() {

  const[tours , settour] = useState(data);

  return (
    <div>

      <Tours tours = {tours}></Tours>
    </div>
  );
}

export default App;
