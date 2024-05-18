import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';


const AddStudent = () => {

    const[state,setState]=useState({
        full_name:'',
        age: '',
        gender:''
    })

    const handler=(event)=>{
        const {name,value}=event.target;
        setState({...state,[name]:value})
    }

    const saveData=(e)=>{
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/add-student/",state)
        .then((res)=>{
            toast.success("Data saved Successfully !!!")
        })

    }

  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center text-primary fs-3">
                Add Students
            </div>
        </div>
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
            <Toaster/>
                <form onSubmit={saveData} method='post'>
                    <div className='mb-3'>
                        <label htmlFor="full_name" className='form-label'>Name</label>
                        <input type="text" className='form-control' name='full_name' onChange={handler}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="age" className='form-label'>Age</label>
                        <input type="text" className='form-control' name='age' onChange={handler}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="gender" className='form-label'>Gender</label>
                        <input type="text" className='form-control' name='gender' onChange={handler}/>
                    </div>
                    <div >
                        <input type="submit" className='btn btn-success'value="Add Student" />
                    </div>
                    
                </form>        
            </div>
            <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  )
}

export default AddStudent
