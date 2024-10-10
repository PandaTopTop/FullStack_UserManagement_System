import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {


  const navigate = useNavigate();

const [user,setUsers] = useState({
  name:"",
  username:"",
  email:""
});

const {name,username,email} = user;

const onInputChange=(e)=>{

  setUsers({...user, [e.target.name]: e.target.value})
}

const onSubmit = async (e)=>{
  e.preventDefault();
  await axios.post("http://localhost:8080/super/user",user);
  navigate("/")
}


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center'>Register User</h2>

          <form onSubmit={onSubmit}>
          <div className='mb-3'>
            <label htmlFor='Name' className='form-label'>Name</label>
            <input type={`text`} className='form-control' placeholder='Enter your name' name='name'
             value={name} onChange={(e)=>onInputChange(e)}/> 
            
          </div>
          <div className='mb-3'>
            <label htmlFor='Username' className='form-label'>Username</label>
            <input type={`text`} className='form-control' placeholder='Enter your username' name='username'
            value={username} onChange={(e)=>onInputChange(e)}/> 
            
          </div>
         <div className='md-3'>
          <label htmlFor='Email' className='for-label'>E-mail</label>
          <input type='text' className='form-control' placeholder='Enter your e-mail' name='email'
           value={email} onChange={onInputChange}/> 
          <button type='submit' className='btn btn-outline-primary'>Submit</button>
          <button type='submit' className='btn btn-outline-danger mx-2'>Cancel</button>
          
            </div>
          </form>
        </div>
      </div>
      AddUser form</div>
  )
}
