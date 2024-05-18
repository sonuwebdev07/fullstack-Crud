import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const List = () => {

    const [state,setState]=useState([])

    const getData=()=>{
        axios.get("http://127.0.0.1:8000/api/student-details/")
        .then((res)=>{
            setState(res.data)
        })
    }

    useEffect(()=>{
       getData();
    },[getData])

    const deleteData=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete("http://127.0.0.1:8000/api/student-delete/"+id)
                
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                getData();
            }      
          });
    }

  return (
    <div>
      <div className="container">
      <div className="row">
        <div className="col-md-12 text-center fs-3 text-primary my-4">List</div>
      </div>
      <div className="row">
        <div className="col-md-12">
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Full Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((item,index)=>
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.full_name}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>
                                <Link to={`/update/${item.id}`} className='btn btn-primary'>Update</Link> &nbsp; &nbsp;
                                <a href="#" className='btn btn-danger' onClick={()=>{deleteData(item.id)}}>Delete</a>
                            </td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
      </div>
      </div>
    </div>
  )
}

export default List
