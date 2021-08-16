import React from 'react'
import { useSelector } from 'react-redux'




function Compare (props) {

  const compare = useSelector(state => state.compare.compare);

  return (
    <div>
      {compare.map((item)=>{

      })}
    </div>
  )
}

export default Compare