// Code Keypad Component Here
import React, {useState} from 'react'

const Keypad = () => {
    
    const [pass, setPass] = useState("")
    
    function handlePasswordChange(e){
        setPass(e.target.value)
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" value={pass} onChange= {handlePasswordChange} />
        </div>
    )
}

export default Keypad