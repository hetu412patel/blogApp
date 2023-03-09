import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './Register.css'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [country, setCountry] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')

  const navigate = useNavigate()

  const IsValidate = () => {
    let isProceed = true;
    if(password !== cpassword){
      isProceed = false;
      toast.warning("confirm password is same as password")
    }
    return isProceed
  }

  const submitHandler = (e) => {    
    e.preventDefault()

    let registerData = { name, email, password, cpassword, country, address, gender }
    if (IsValidate()) {
      // console.log(registerData);

      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(registerData)
      }).then(() => {
        toast.success('Registered Successfully')
        navigate('/login')
      }).catch((err) => {
        toast.error('Failed :' + err.message)
      })
    }
  }
  return (
    <div className='offset-lg-3 col-lg-6 mt-5'>
      <form className="container" onSubmit={submitHandler}>
        <div className="card">

          <div className="card-header">
            <h1>Registration Form</h1>
          </div>

          <div className="card-body">
            <div className="row">

              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className='errmsg'>*</span></label>
                  <input type="text" className='form-control' value={name} onChange={(e => setName(e.target.value))} />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="email">Email-Address <span className='errmsg'>*</span></label>
                  <input type="email" className='form-control' value={email} onChange={(e => setEmail(e.target.value))} />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="password">Password <span className='errmsg'>*</span></label>
                  <input type="password" className='form-control' value={password} onChange={(e => setPassword(e.target.value))} />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <label htmlFor="cpassword">Confirm Password <span className='errmsg'>*</span></label>
                  <input type="password" className='form-control' value={cpassword} onChange={(e => setCpassword(e.target.value))} />
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="country">Country <span className='errmsg'>*</span></label>
                  <select className='form-control' value={country} onChange={(e => setCountry(e.target.value))}>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="singapore">Singapore</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="address">Address <span className='errmsg'>*</span></label>
                  <textarea className='form-control' value={address} onChange={(e => setAddress(e.target.value))}></textarea>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="gender">Gender <span className='errmsg'>*</span></label>
                  <input type="radio" name="gender" value="Male" className='radio-check' checked={gender === 'Male'} onChange={e => setGender(e.target.value)} />
                  <label htmlFor="male">Male</label>
                  <input type="radio" name="gender" value="Female" className='radio-check' checked={gender === 'Female'} onChange={e => setGender(e.target.value)} />
                  <label htmlFor="female">Female</label>
                </div>
              </div>

            </div>
          </div>

          <div className="card-footer">
            <button type='submit' className='btn btn-primary'>Register</button>
            <Link className='btn btn-danger ms-3' to={'/login'}>Already Exist</Link>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Register