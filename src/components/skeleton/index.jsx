import React from 'react'

function Skeleton({width , height}) {

  return (
    <div className={StyleSheet.skeleton} style={{width, height}}>Skeleton</div>
  )
}

export default Skeleton