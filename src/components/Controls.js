import React from 'react'

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
            {/* <label> &nbsp; Size: &nbsp; </label>
            <input type='number' value={arraySize} onChange={onSizeChange} min='50' max='300'></input> */}
            <label> &nbsp; Speed: </label>
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