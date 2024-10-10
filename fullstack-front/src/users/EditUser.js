import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

 export default function EditUser() {

    const {id} = useParams();

    const navigate = useNavigate();
    const [user,setUser] = useState(
        {
            name:"",
            username:"",
            email:""

        }
    );


    const {name,username,email} = user;


    useEffect(()=>{
        loadUser();
    },[])

    const onInputChange=(e)=>{

        setUser({...user,[e.target.name]:e.target.value});
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/super/users/${id}`,user);
        navigate("/");
    }


    const loadUser= async()=>{
      const res = await axios.get( `http://localhost:8080/super/users/${id}`);
        setUser(res.data);
    }





  return (
    <div
    className='conteiner'>
        <div className='row'>
            <div className='col-md-4 offset-md-4 border rounded p-6 mt-4 shadow'>
                <h2>Edit User</h2>

                <form onSubmit={onSubmit}>
                    <div className='mb-2'> 
                        <label htmlFor='Name' className='form-label'>Name</label>
                        <input type='text' className='form-control' placeholder='Enter your name' name='name' value={name}
                        onChange={e=>onInputChange(e)}/>
                    </div>

                    <div className='mb-3'> 
                        <label htmlFor='Username' className='form-label'>Username</label>
                        <input type='text' className='form-control' placeholder='Enter your username' name='username' value={username}
                        onChange={e=>onInputChange(e)}/>
                    </div>

                    <div className='mb-3'> 
                        <label htmlFor='Email' className='form-label'>E-mail</label>
                        <input type='text' className='form-control' placeholder='Enter your e-mail' name='email' value={email}
                        onChange={e=>onInputChange(e)}/>
                    </div>
                <button type='submit' className='btn btn-outline-success btn-lg'>Submit</button>
                <button type='submit' className='btn btn-outline-danger'>Cancel</button>

                </form>
            </div>
        </div>
        EditUser</div>
  )
}
