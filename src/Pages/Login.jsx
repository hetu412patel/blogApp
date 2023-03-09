import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './Register.css'

const Login = () => {

  const navigate = useNavigate()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  // const [role,setRole] = useState('')

  const validate = () => {
    let result = true

    if(email === null || email === ''){
      result = false;
      toast.warning("Please enter username")
    }
    if(password === null || password === ''){
      result = false;
      toast.warning("Please enter password")
    }
    // if(role === null || role === ''){
    //   result = false;
    //   toast.warning("Please select your role")
    // }
    return result
  }

  const loginHandler = (e) => {
    e.preventDefault()

    if(validate()){

      fetch("http://localhost:5000/users").then((res)=>{
        console.log("data1",res)
        return res.json()
      }).then((response)=>{
        let Aemail = response.find(ele => ele.email === email) 
        let Apassword = response.find(ele => ele.password === password)
        // let Arole = response.find(ele => ele.role === role)
        // console.log(Arole);

        if(Aemail && Apassword){
          toast.success("Login Successfully")
          navigate('/allblogs')
        }else if(Aemail){
          toast.error("Please enter valid password")
        }else{
          toast.error("Please enter valid email")
        }
      }).catch(err => {
        toast.error("Login failed due to : "+ err.message)
      })
    }
  }
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{marginTop:'150px'}}>
        <form className="container" onSubmit={loginHandler}>
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>

            <div className="card-body">
              <div className="form-group">
                <label htmlFor="name">Email-Address <span className='errmsg'>*</span></label>
                <input type="text" className='form-control' value={email} onChange={(e => setEmail(e.target.value))}/>
              </div>

              <div className="form-group">
                <label htmlFor="name">Password <span className='errmsg'>*</span></label>
                <input type="password" className='form-control' value={password} onChange={(e => setPassword(e.target.value))}/>
              </div>

             
                {/* <div className="form-group">
                  <label htmlFor="role">Role <span className='errmsg'>*</span></label>
                  <select className='form-control' value={role} onChange={(e => setRole(e.target.value))}>
                    <option value="selectRole">select your Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div> */}
            </div>

            <div className="card-footer">
              <button type="submit" className='btn btn-primary'>Login</button>
              <Link className='btn btn-success ms-3' to={'/register'}>New User</Link>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login