import React, { useCallback, useEffect, useRef, useState } from 'react'
import './password-generator.css'

function PasswordGenerator() {

    const [length , setLength] = useState(8);
    const [numberAllowed , setNumberAllowed] = useState(false)
    const [specialCharacterAllowed , setSpecialCharacterAllowed] = useState(false)
    const [password , setPassword] = useState('')
    
    // useRef hook used to take reference of something
    const passwordRef = useRef(null);


    // I'm using useCallback to memoize the GeneratePassword function so that it doesn’t get redefined on every render.
    const GeneratePassword = useCallback(() => {
        let pass = '';
        let possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        
        if (numberAllowed)  {
            possibleCharacters += '0123456789';
        }
        if(specialCharacterAllowed) {
            possibleCharacters += '!@#$%^&*()_+-={}:<>?';
        }

        for(let i = 1 ; i <= length ; i++) {
            let char = Math.floor(Math.random() * possibleCharacters.length + 1)  // it will give you a random character index from possibleCharacters
            pass += possibleCharacters.charAt(char);
        }
        setPassword(pass);

    } , [length , numberAllowed , specialCharacterAllowed , setPassword])

    
    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(0,99)     setSelectionRange(0 to 99) means copy the text only in that limit means in this example, copy password only from 0 index to 99-1 index

        window.navigator.clipboard.writeText(password)
    } , [password]);


    // I'm using useEffect to automatically regenerate the password whenever any of its dependencies (length, numberAllowed, specialCharacterAllowed) change.
    useEffect(() => {
        GeneratePassword();
    } , [length , numberAllowed , specialCharacterAllowed , GeneratePassword])


  return (
    <>
        <div className="main-pass-gen">
            <div className="pass-gen-container">
                <h1>Password Generator</h1>
                <div className="pass-input-box">
                    <input 
                    type="text" 
                    id="length" 
                    placeholder="password"
                    value={password}
                    readOnly
                    ref={passwordRef}    // giving password reference to passwordRef variable means now passwordRef var can do some task with that input field
                    />
                    <button
                    onClick={copyPasswordToClipboard}>
                        copy
                    </button>
                </div>

                <div className="pass-dependencies">
                    <div className="length-dependency">
                        <input 
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        onChange={(e) => {setLength(e.target.value)}}
                        readOnly
                        />
                        <label>Length : {length}</label>
                    </div>
                    <div className="number-dependency">
                        <input
                        type="checkbox"
                        id="number"
                        defaultChecked={numberAllowed}
                        onChange={(e) => {setNumberAllowed(e.target.checked)}}
                        // onChange={(e) => {setNumberAllowed((prev) => !prev)}}    both are same
                        />
                        <label>Include Numbers</label>
                    </div>
                    <div className="character-dependency">
                        <input
                        type="checkbox"
                        id="character"
                        defaultChecked={specialCharacterAllowed}
                        onChange={(e) => {setSpecialCharacterAllowed(e.target.checked)}}
                        />
                        <label>Include Special Character</label>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default PasswordGenerator;
