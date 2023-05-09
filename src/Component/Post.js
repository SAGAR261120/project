import axios from 'axios';
import React, { Component } from 'react'

export class Post extends Component {
  render() {
   let  submithandlaner = (event) =>
    {
event.preventDefault();//it is use because fom not to be relode
const firstname = event.target.firstname.value
const title = event.target.title.value
const author = event.target.author.value
console.log(title,firstname,author)
axios.post("https://jsonplaceholder.typicode.com/posts" ,{title,firstname,author})//posting data in API. 
.then((response) => {
console.log(response)
})
.catch((error) => {
    console.log(error)
})
event.target.reset()//it will reset the form after submit form will clean automatically.
    }
    return (
   
      <div className="container" onSubmit={submithandlaner}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <form action="action_page.php">

    <label htmlFor="fname">First Name : </label>
    <input type="text" name="firstname" placeholder="Your name.."/>
    <br></br>
    <br></br>
    <br></br>

    <label htmlFor="fname">Title : </label>
    <input type="text" name="title" placeholder="title"/>

    <br></br>
    <br></br>
    <br></br>

    <label htmlFor="fname">Author : </label>
    <input type="text" name="author" placeholder="author"/>
<br></br>
<br></br>
<br></br>
    <input type="submit" value="Submit"/>

  </form>
</div>

    )
  }
}

export default Post