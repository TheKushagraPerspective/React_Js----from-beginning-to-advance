import React , {useState} from 'react'

const Form2 = () => {

    const [formData , setFormData] = useState({
        username: '',
        comment: ''
    })

    const handleOnInputChange = (e) => {
        const {name , value} = e.target;

        setFormData({
            ...formData ,
            [name] : value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        alert(`${formData.username} and ${formData.comment}`)
    }
    
    
  return (
    <>
            <form action="#" onSubmit={handleOnSubmit}>
                Username: <input type="text" name='username' onChange={handleOnInputChange} value={formData.username} />
                Comment: <textarea name="comment" onChange={handleOnInputChange} value={formData.comment}></textarea>
                <button type="submit">Submit</button>
            </form>
      </>
  )
}

export default Form2
