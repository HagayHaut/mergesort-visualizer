import React from 'react'

function Graph({ sortArray }) {

    const divs = sortArray.map((num, i)=> {
        return <div 
                  className='bar' 
                  key={i}
                  style={{height: `${Math.floor(num/2.5)}px`}}>
                </div>
    })

    return (
      <div className='graph'>
          {divs}
      </div>
    )
}

export default Graph