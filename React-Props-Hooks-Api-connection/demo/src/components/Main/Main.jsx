import React, { useState } from 'react'
import { Button } from 'reactstrap'

function Main() {
    const[num,setNum]=useState(0);
    const increment=()=>{
        if(num == 20){
            return
        }
        setNum(num + 1)
    }
    const decrement=()=>{
        if(num == 0){
            return
        }
        setNum(num - 1)
    }
  return (
    <div className='container mt-5'>
        <h1>{num}</h1>
        <Button onClick={increment} className='mx-2 ' color='info'>Increment</Button>
        <Button onClick={decrement} color='warning'>Decrement</Button>
    </div>
  )
}

export default Main