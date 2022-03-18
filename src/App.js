import './App.css';
import Circles from './Circles/Circles';
import CircleSelector from './CircleSelector/CircleSelector';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const [selections, setSelections] = useState([true, false, false, false])

  function increment() {
    setCount(count +1)
  }

  function handleSelectCircle(selectedIdx){
    const newSelections = selections.map((selection, idx) =>(
      selectedIdx === idx ? true : false
    ))
    setSelections(newSelections)
  }

  return (
    <div>
      <Circles 
      selections={selections}
      handleSelectCircle={handleSelectCircle}
      />
      <CircleSelector
      selections={selections}
      />
    </div>
  );
}

export default App;
