import { useState, useEffect } from 'react';
import {getMergeSortAnimations} from './sorting/merge';
import Graph from './components/Graph';
import Controls from './components/Controls';
import './App.css';

const ANIMATION_SPEED_MS = 1;
const NUMBER_OF_ARRAY_BARS = 200;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

function App() {

  const [sortArray, setSortArray] = useState([]);

  useEffect(() => { 
    resetSortArray();
  }, [])

  const randomFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  function resetSortArray() {
    const newArray = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      newArray.push(randomFromRange(7, 1000));
    }
    setSortArray(newArray);
  }

  function mergeSort() {
    const animations = getMergeSortAnimations(sortArray);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${Math.floor(newHeight/2.5)}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  return (
    <div className="App">
      <Graph sortArray={sortArray}/>
      <Controls 
        onRandomizeClick={() => resetSortArray()}
        onMergeSortClick={() => mergeSort()}
      />
    </div>
  );
}

export default App;
