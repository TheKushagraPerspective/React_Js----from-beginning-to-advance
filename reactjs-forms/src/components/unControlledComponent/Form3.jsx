import React, { useRef } from 'react'

const Form3 = () => {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(inputRef1.current.value);
        console.log(inputRef2.current.value);
        alert(`${inputRef1.current.value} and ${inputRef2.current.value}`)
    }


  return (
    <>
        <form action="#" onSubmit={handleOnSubmit}>
                Username: <input type="text" name='username' ref={inputRef1} />
                Comment: <textarea name="comment" ref={inputRef2} ></textarea>
                <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default Form3
