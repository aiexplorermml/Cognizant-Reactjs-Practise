import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {
    useEffect(()=>{
        console.log("Effect")
    },[])
    useLayoutEffect(()=>{
        console.log("Layout")
    })
  return (
    <div>
      Example of layout effect
    </div>
  )
}

export default UseLayoutEffect
