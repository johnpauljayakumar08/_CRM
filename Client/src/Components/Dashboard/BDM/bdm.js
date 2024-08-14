import React, { useEffect, useState } from "react";
import successuser from '../../Assest/sucess user.png'
import { Link, useParams } from "react-router-dom";
import { Addprofile } from "../../Add_Profile/addprofile";
import axios from "axios";
export function Bdm(){
    var {id}=useParams()
    
    var {domain}=useParams()
    
    const[profile,setProfile]=useState([])
    const[team,setTeam]=useState([])
    const[status,setStatus]=useState([])
    const [filter, setFilter] = useState(0);
    const[employee,setEmployee]=useState()
    // alert(typeof(filter)+filter)
    useEffect(()=>{
        fetch("http://192.168.253.177:5001/getallglprofile/"+id)
        .then(res=>res.json())
        .then(data=>setProfile(data))
        fetch("http://192.168.253.177:5001/getstatus/"+domain)
        .then(res=>res.json())
        .then(data=>setStatus(data))
        fetch("http://192.168.253.177:5001/getteam/"+id)
        .then(res=>res.json())
        .then(data=>setTeam(data))
        
        
    },[])
    const handleChange = (e) => {
        setFilter(parseInt(e.target.value)); // Update filter value when select box changes
      };
      const handleselectteam =(e)=>{
        // alert("emp")
        setEmployee(parseInt(e.target.value))
        console.log(e.target.value)
        fetch("http://192.168.253.177:5001/getallglprofile/"+e.target.value)
        .then(res=>res.json())
        .then(data=>setProfile(data))
      }
      console.log("sample",employee)
      const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };
    
      const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('file', file);
        await axios.post('http://192.168.253.177:5001/uploadprofilegl', formData)
        .then((res)=>{
          if(res.data.status==="inserted"){
              alert("user uploaded")
              window.location.reload()
          }
          else{
            alert("error")
          }
        })
        
      }
    return(
        <>
           <div className="container bg-white mt-5 custom ">
                <div className="row">
                    <div className="col-lg-12 p-5">
                        <div class="col-lg-12 login-form">
                            <div class="col-lg-12 login-form">
                               <h1>User Profile</h1>
                               <Link to={`/bdm/${id}/${domain}/addmanualprofile`} class="btn btn-success">ADD Data</Link>
                               <button className="btn btn-primary ms-2 " data-bs-toggle="modal" data-bs-target="#exampleModal">Upload User</button>
                               <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                    <div class="modal-header modleborderbottom">
                                        <h5 class="modal-title" id="exampleModalLabel">Upload User</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body p-5">
                                        <p></p>
                                        <div className=" d-flex justify-content-between">
                                            <div>
                                                <input type="file" onChange={handleFileChange} />
                                                <button onClick={handleSubmit} className="btn btn-black">Upload</button>
                                            </div>
                                                   
                                        </div>

                                    </div>
                                    
                                    </div>
                                </div>
                        </div>
                               <select class="list-dt d-block col-lg-3 col-12 boder float-end mb-3 ms-2 rounded" name="status" id="status"   onChange={handleselectteam}>
                                    <option value={0}>select the employee</option>
                                    {team.map((value,index)=>(
                                        // console.log(value.id)
                                        <option value={value.user_id}>{value.name}</option>
                                    ))}
                                </select>
                                <select class="list-dt d-block col-lg-3 col-12 boder float-end mb-3 rounded" name="status" id="status" value={filter} onChange={handleChange}>
                                    <option value={0}>All</option>
                                    {status.map((value,index)=>(
                                        <option value={value.id}>{value.status}</option>
                                    ))}
                                </select>
                               {/* <select >
                                    <option value="all">All</option>
                                    <option value="status1">Status 1</option>
                                    <option value="status2">Status 2</option>
                                    <option value="status3">Status 3</option>
                                </select> */}
                               <table class="table table-hover table-nowrap">
                            <thead class="thead-light">
                                <tr>    
                                    <th scope="col">Name</th>
                                    <th scope="col">phone number</th>
                                    <th scope="col">Email ID</th>
                                    {/* <th scope="col">status</th> */}
                                    <th scope="col">Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {profile.map((value,index)=>( 
                                     (filter === 0 || value.current_status === filter) && (
                                    <>

                                        <tr>
                                            <td>
                                                <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
                                                {value.first_name +" "+ value.last_name}
                                            </td>
                                            <td>
                                                
                                                <a class="text-heading font-semibold" href="">
                                                    {value.phone_number}
                                                </a>
                                            </td>
                                            <td>{value.email}</td>
                                            {/* <td>{value.current_status}</td> */}
                                            <td >
                                                <Link to={`profile/${value.id}`}><button className="btn btn-primary">View</button></Link>                                               
                                            </td>

                                        </tr>
                                    </>
                                     )
                                ))}
                            </tbody>
                        </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
}