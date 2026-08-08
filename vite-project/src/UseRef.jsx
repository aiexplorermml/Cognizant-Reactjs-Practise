import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const inputRef=useRef(null)
    const scrollRef=useRef(null)
    const aboutRef=useRef(null)
    const intoRef=useRef(null)

    const scroll=()=>{
        scrollRef.current.scrollIntoView({behaviour:"smooth"})
    }
    const scrollabout=()=>{
        aboutRef.current.scrollIntoView({behaviour:"smooth"})

    }
    const scrollInto=()=>{
      intoRef.current.scrollIntoView({behaviour:"smooth"})
    }

    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
      <input type="text" placeholder='search box' ref={inputRef}></input>

      <button onClick={scroll}>Contact us</button>
            <button onClick={scrollabout}>About me</button>
            <button onClick={scrollInto}>Home</button>

      <h1 ref={scrollRef}style={{marginTop:"900px"}}>Contact me</h1>

      <h1 ref={aboutRef}style={{marginTop:"900px"}}>This is about me </h1>
    </div>
  )
}

export default UseRef
