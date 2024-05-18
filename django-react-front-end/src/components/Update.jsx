import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

    const[state,setState]=useState({
        full_name:'',
        age: '',
        gender:''
    })

    const _useParams=useParams()
    const _useNavigate=useNavigate()

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/student-details/"+ _useParams.id)
        .then((res)=>{
            setState(res.data)
        })
    },[])

    const handler=(e)=>{
        const {name,value}=e.target;
        setState({...state,[name]:value})
    }

    const updateData=(e)=>{
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/student-update/"+ _useParams.id , state)
        .then((res)=>{
            _useNavigate("/list")
        })
    }


  return (
    <div>
    <div className="row">
    <div className="col-md-12 text-center text-primary fs-3">
        Update
    </div>
</div>
<div className="row">
    <div className="col-md-2"></div>
    <div className="col-md-8">
        <form onSubmit={updateData} method='post'>
            <div className='mb-3'>
                <label htmlFor="full_name" className='form-label'>Name</label>
                <input type="text" className='form-control' name='full_name' onChange={handler} value={state.full_name}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="age" className='form-label'>Age</label>
                <input type="text" className='form-control' name='age' onChange={handler} value={state.age}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="gender" className='form-label'>Gender</label>
                <input type="text" className='form-control' name='gender' onChange={handler} value={state.gender}/>
            </div>
            <div >
                <input type="submit" className='btn btn-success'value="update Student" />
            </div>
            
        </form>        
    </div>
    <div className="col-md-2"></div>
</div>
</div>
  )
}

export default Update
