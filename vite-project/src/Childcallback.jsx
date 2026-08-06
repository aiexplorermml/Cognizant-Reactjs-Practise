import React from 'react'

const Childcallback = React.memo(({clicks})=>{
    console.log("this is from child")
    return(
        <>
        this is from child <br />
<button onClick={clicks}>Say Hello</button>
        </>
    )
})



export default Childcallback
