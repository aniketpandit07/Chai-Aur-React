import { useState } from 'react'
import './App.css'

function App() {
  // const [firstName, setFirstName] = useState(0)
  // const [lastName, setLastName] = useState(0)

  // function changeFirstNameHandler(event) {
  //   setFirstName(event.target.value)
  //   console.log(firstName)
  // }
  // function changeLastNameHandler(event) {
  //   console.log(event.target.value)
  // }

  //single state Variable for all the form inputs
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: '', city: 'city' })

  console.log(formData)

  function changeHandler(event) {
    //destructuring
    const { name, value, type, checked } = event.target

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })

  }

  function submitHandler(event){
    event.preventDefault()
    console.log("printing data")
    console.log(formData)
  }


  return (
    <>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='First Name' onChange={changeHandler} name='firstName'
          value={formData.firstName} /><br /><br />

        <input type='text' placeholder='First Name' onChange={changeHandler} name='lastName'
          value={formData.lastName} /><br /><br />

        <input type='email' placeholder='abc@gmail.com' onChange={changeHandler} name='email'
          value={formData.email} /><br /><br />

        <textarea placeholder='Enter your Comments' onChange={changeHandler} name='comments'
          value={formData.comments} /><br /><br />

        <input type='checkbox' onChange={changeHandler} name='isVisible' id='isVisible'
          checked={formData.isVisible} />
        <label htmlFor='isVisible'>Am I Visible</label><br /><br />

        <input type='radio' onChange={changeHandler} name='mode' id='Online-Mode' value="Online-Mode" checked={formData.mode === "Online-Mode"} />
        <label htmlFor='Online-Mode'> Online Mode</label>

        <input type='radio' onChange={changeHandler} name='mode' id='Offline-Mode' value="Offline-Mode"
          checked={formData.mode === "Offline-Mode"} />
        <label htmlFor='Offline-Mode'> Offline Mode</label><br /><br />

        {/* dropdown menu */}

        <label htmlFor='city'>Enter Your City</label>
        <select name='city' id='city' value={formData.city} onChange={changeHandler}>

          <option value="">Select City</option>
          <option value="Ambajogai">Ambajogai</option>
          <option value="Kaij">Kaij</option>
          <option value="Parli">Parli</option>
          <option value="Beed">Beed</option>
          <option value="Georai">Georai</option>
        </select>

        <br /><br />
        <button>Submit</button>

      </form>
    </>
  )
}

export default App
