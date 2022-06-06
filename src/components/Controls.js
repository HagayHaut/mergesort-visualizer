import React from 'react'

function Controls({ 
    onRandomizeClick, 
    onMergeSortClick, 
    onSpeedChange,
    speed 
  }) {
    return (
      <div className="controls">
          <span className="panel">
            <button onClick={onRandomizeClick}>Randomize</button>
            <label> &nbsp; Speed: &nbsp; </label>
            <select value={speed} onChange={onSpeedChange}>
              <option value='0.1'>0.1ms</option>
              <option value='1'>1ms</option>
              <option value='2'>2ms</option>
              <option value='5'>5ms</option>
              <option value='10'>10ms</option>
            </select>
            <button onClick={onMergeSortClick}>Merge Sort</button>
          </span>
      </div>
    )
}

export default Controls