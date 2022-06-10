import { useState, useEffect } from 'react';
import {getMergeSortAnimations} from './sorting/merge';
import Graph from './components/Graph';
import Controls from './components/Controls';
import Header from './components/Header';
import { BsGithub } from 'react-icons/bs'
import './App.css';

const PRIMARY_COLOR = 'cadetblue';
const SECONDARY_COLOR = 'red';
const GITHUB_LINK = 'https://github.com/HagayHaut/sorting-visualizer'

function App() {

  const [sortArray, setSortArray] = useState([]);
  const [speed, setSpeed] = useState(2);
  const [arraySize, setArraySize] = useState(200)
 

  useEffect(() => { 
    resetSortArray();
  }, [arraySize])



  const randomFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  function resetSortArray() {
    const newArray = [];
    for (let i = 0; i < arraySize; i++) {
      newArray.push(randomFromRange(7, 1000));
    }
    setSortArray(newArray);
  }

  function mergeSort() {
    const animations = getMergeSortAnimations(sortArray);
    console.log(animations);
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
        }, i * speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${Math.floor(newHeight/2.5)}px`;
        }, i * speed);
      }
    }
  }

  return (
    <div className="App">
      <a href={GITHUB_LINK} target="_blank">
        <BsGithub className='github'/>
      </a>
      <Header />
      <div className='content'>
        <Graph sortArray={sortArray}/>
        <Controls 
          onRandomizeClick={() => resetSortArray()}
          onMergeSortClick={() => mergeSort()}
          onSpeedChange={(e) => setSpeed(e.target.value)}
          onSizeChange={(e) => setArraySize(e.target.value)}
          speed={speed}
          arraySize={arraySize}
        />
      </div>
      
    </div>
  );
}

export default App;
