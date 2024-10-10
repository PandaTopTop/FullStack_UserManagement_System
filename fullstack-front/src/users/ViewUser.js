import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



export default function ViewUser() {


    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
      });
      
      const {id} = useParams();

      useEffect(()=>{
        loadData();
      },[]);
      
      const loadData = async()=>{
      
        const res = await axios.get(`http://localhost:8080/super/users/${id}`);
        setUser(res.data);
      }


  return (
    <div className='container'>
    <div className='row'>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center'>View User</h2>
        <div className='card'>
            <div className='card-header'>
                Details of user
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Name:</b>  {user.name}</li>
                    <li className='list-group-item'><b>UserName:</b>  {user.username}</li>
                    <li className='list-group-item'><b>E-mail:</b> {user.email}</li>
                </ul>
            </div>
        </div>
    <Link className="btn btn-primary my-2" to={`/`}>Back to home</Link>
        </div>
        </div>
        </div>
  )
}
