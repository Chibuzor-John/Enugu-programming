




















import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 
function App() {
  const [order, setOrder] = useState({
    name: "",
    email: "",
    description: "",
    meal: "",
    gender: "",
    agree: false

  })
  const handleChange = (e) => {
    const {name, value, checked} = e.target;
      setOrder((state) => ({
        ...state,
        [name]: type  === "checkbox" ? checked : value
      }))
  }

const handleSubmit = () => {
  e.preventDefault()
    console.log(order)
}

  return (
    <>
      <div className='main' >
        <div className='container' >
          <div id='form-bg'>

          </div>
          <div id='form'>
            <h4>Register to Order</h4>

            <form onClick={handleSubmit}>
              <input className='input' value={order.name} name='name' type="text" placeholder='Your Name' onChange={handleChange}/>
              <input className='input' value={order.email} name='email' type="text" placeholder='Your Email' onChange={handleChange}/>
              <input className='input' value={order.description} name='description' type="text" placeholder='Description' onChange={handleChange}/>
              
              <select value={order.meal} onChange={handleChange}> <br/>
                <option>select menu</option>
                <option value="Rice">Rice and Dodo</option>
                <option value="Beans">Beans and Potatoes</option>
                <option value="Yam">Yam and Eggs</option>
              </select> <br/>

              <div> <br />
                <label>Gender</label>

                <label>Male</label>
                <input type="radio" value="male" name="gender" onChange={handleChange} chacked={order.gender === "male"}/>

                <label>Female</label>
                <input type="radio" value="female" name="gender" onChange={handleChange} chacked={order.gender === "female"}/>

                <label>Order</label>
                <input type="radio" value="other" name="gender" onChange={handleChange} chacked={order.gender === "other"}/>
              </div>
              

              <div>
                <label>Agree?</label>
                <input type="checkbox" name='agree' value={order.agree} />
              </div> <br />
              

              <botton type='submit'>Submit</botton>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
         