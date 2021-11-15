import {useRef} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Start({setUserName}) {
 const inputRef = useRef();
const handleClick = () => {
    inputRef.current.value &&  setUserName(inputRef.current.value)
}
    return (
        <div className='container'>
      <div className='start'>
<input
 placeholder='enter your name'
  className='startInput'
  ref={inputRef}/>
<button className='startButton' onClick={handleClick}>Start</button>
        </div>
        </div>

    )
}