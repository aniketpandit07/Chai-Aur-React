import { useState } from 'react'

import './App.css'

function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", country: "India", streetAddress: "", city: "", state: "", postalCode: "", comments: false, candidates: false, offers: false, pushNotifications:"" })

  function changeHandler(event) {
    //destructuring
    const { name, value, checked, type } = event.target

    setFormData((prevState) => ({ ...prevState, [name]: type === "checkbox" ? checked : value }))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Printing data")
    console.log(formData)
  }

  return (
    <div className='flex flex-col mt-5 items-center'>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName'>First Name</label> <br />
        <input type='text'
          name="firstName"
          id='firstName'
          value={formData.firstName}
          onChange={changeHandler}
          placeholder='Aniket'
          className='border-2 border-gray-400 rounded-md' /><br /><br />

        <label htmlFor='lastName'>Last Name</label> <br />
        <input type='text'
          name="lastName"
          id='lastName'
          value={formData.lastName}
          onChange={changeHandler}
          placeholder='Pandit'
          className='border-2 border-gray-400 rounded-md' /><br /><br />

        <label htmlFor='email'>Email</label> <br />
        <input type='email'
          name="email"
          id='email'
          value={formData.email}
          onChange={changeHandler}
          placeholder='abc@gmail.com'
          className='border-2 border-gray-400 rounded-md' /><br /><br />

        <label htmlFor='country'>Country</label><br />
        <select id='country'
          name='country'
          value={formData.country}
          onChange={changeHandler}
          className='border-2 border-gray-400 rounded-md'>
          <option>India</option>
          <option>USA</option>
          <option>Mexico</option>
          <option>Canada</option>
        </select> <br /> <br />

        <label htmlFor='streetAddress'>Street Address </label> <br />
        <input type='text'
          name="streetAddress"
          id='streetAddress'
          value={formData.streetAddress}
          onChange={changeHandler}
          placeholder='streetAddress'
          className='border-2 border-gray-400 rounded-md' /><br /><br />

        <label htmlFor='city'>city</label> <br />
        <input type='text'
          name="city"
          id='city'
          value={formData.city}
          onChange={changeHandler}
          placeholder='city'
          className='border-2 border-gray-400 rounded-md' /><br /><br />

        <label htmlFor='state'>State</label> <br />
        <input type='text'
          name="state"
          id='state'
          value={formData.state}
          onChange={changeHandler}
          placeholder='state'
          className='border-2 border-gray-400 rounded-md' /><br /><br />

        <label htmlFor='postalCode'>Postal Code</label> <br />
        <input type='number'
          name="postalCode"
          id='postalCode'
          value={formData.postalCode}
          onChange={changeHandler}
          placeholder='postalCode'
          className='border-2 border-gray-400 rounded-md' /><br /><br />

        <fieldset>
          <legend>By Email</legend>

          <div className='flex'>
            <input
              id='comments'
              type='checkbox'
              name='comments'
              checked={formData.comments}
              onChange={changeHandler} />

            <div className='mx-2'>
              <label htmlFor="comments"> Comments </label>
              <p>Get notified when someone posts a comment on a posting</p>
            </div>
          </div>

           
          <div className='flex'>
            <input
              id='candidates'
              type='checkbox'
              name='candidates'
              checked={formData.candidates}
              onChange={changeHandler} />

            <div className='mx-2'>
              <label htmlFor="candidates"> Candidates </label>
              <p>Get notified when candidates apply for a job </p>
            </div>
          </div>

           
          <div className='flex'>
            <input
              id='offers'
              type='checkbox'
              name='offers'
              checked={formData.offers}
              onChange={changeHandler} />

            <div className='mx-2'>
              <label htmlFor="comments"> Offers </label>
              <p>Get notified when candidates accepts or rejects an offer</p>
            </div>
          </div>
        </fieldset><br/><br/>

        <fieldset>
          <legend>
            Push Notifications
          </legend>
          <p>
            These are delivered via SMS to your mobile phone
          </p>

          <input 
          type='radio'
          id='pushEverything'
          name="pushNotifications"
          value='everything'
          onChange={changeHandler}
          ></input>
          <label htmlFor='pushEverything'>Everything</label><br/>

          <input 
          type='radio'
          id='pushEmail'
          name="pushNotifications"
          value='same as email'
          onChange={changeHandler}
          ></input>
          <label htmlFor='pushEverything'>Same as email</label><br/>

          <input 
          type='radio'
          id='pushNothing'
          name="pushNotifications"
          value='noNotification'
          onChange={changeHandler}
          ></input>
          <label htmlFor='pushEverything'>No Notifications</label><br/>
        </fieldset><br/><br/>

        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Save</button>




      </form>
    </div>
  )
}

export default App
