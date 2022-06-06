import React from 'react'

function Controls({ onRandomizeClick, onMergeSortClick }) {
    return (
      <div className="controls">
          <span className="panel">
            <button onClick={onRandomizeClick}>Randomize</button>
            <button onClick={onMergeSortClick}>Merge Sort</button>
          </span>
      </div>
    )
}

export default Controls