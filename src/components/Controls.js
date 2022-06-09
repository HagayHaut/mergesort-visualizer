import React from 'react';


function Controls({ 
    onRandomizeClick, 
    onMergeSortClick, 
    onSpeedChange,
    onSizeChange,
    speed,
    arraySize
  }) {
    return (
     
      <div className="controls">
          <span className="panel">
            <button onClick={onRandomizeClick}>New Array</button>
            <div className="delay-select">
              <label> &nbsp; Delay: </label>
              <select value={speed} onChange={onSpeedChange}>
                <option value='0.1'>0.1ms</option>
                <option value='1'>1ms</option>
                <option value='2'>2ms</option>
                <option value='5'>5ms</option>
                <option value='10'>10ms</option>
              </select>
            </div>
           
            <button onClick={onMergeSortClick}>Merge Sort</button>
          </span>
      </div>
     
         
    )
}

export default Controls