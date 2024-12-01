import React, { Component } from 'react'

export default class Form1 extends Component {
  
    constructor() {
        super();
        this.state = {
            username : '',
            comment : '',
        }
    }

    handleOnInputChange = (e) => {
        const {name , value} = e.target;    // Destructure the 'name' and 'value' from 'e.target'
        this.setState({
            [name] : value    // Update the state dynamically using computed property names
        })
    }


    handleOnSubmit = (e) => {
        e.preventDefault();
        alert(`${this.state.username} and ${this.state.comment}`)
    }
  
  
    render() {
    return (
      <>
            <form action="#" onSubmit={this.handleOnSubmit}>
                Username: <input type="text" name='username' onChange={this.handleOnInputChange} value={this.state.username} />
                Comment: <textarea name="comment" onChange={this.handleOnInputChange} value={this.state.comment}></textarea>
                <button type="submit">Submit</button>
            </form>
      </>
    )
  }
}
