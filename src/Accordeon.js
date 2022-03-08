import React, { useState } from 'react'
import './Accordeon.css'
export default function Accordeon({str, subStr}) {
    const [toggle, setToggle] = useState(false);

    const changeToggle = ()=>{
        setToggle(!toggle);
    }
    return (
    <div className='str'>
        <p onClick={changeToggle}>{str}</p>
        {toggle &&
        <div className='overlay'>
            <div className='subStr'>
                <button onClick={changeToggle}>x</button>
                <p>{subStr}</p>
            </div>
        </div>
        }
    </div>
  )
}
