import React, { useEffect, useState } from "react";
import successuser from '../../Assest/sucess user.png'
import { Link, useParams } from "react-router-dom";
export function Bde(){
    var {id}=useParams()
    
    var {domain}=useParams()
    
    const[profile,setProfile]=useState([])
    const[status,setStatus]=useState([])
    const [filter, setFilter] = useState(0);
    // alert(typeof(filter)+filter)
    useEffect(()=>{
        fetch("http://192.168.253.177:5001/getallglprofile/"+id)
        .then(res=>res.json())
        .then(data=>setProfile(data))
        fetch("http://192.168.253.177:5001/getstatus/"+domain)
        .then(res=>res.json())
        .then(data=>setStatus(data))
        
        
    },[])
    const handleChange = (e) => {
        setFilter(parseInt(e.target.value)); // Update filter value when select box changes
      };
    return(
        <>
           {/* <div className="container row  backcolorvalue m-5 p-5 mx-auto">
                    <div className="col-lg-4 d-flex border-right">
                            <img src={successuser}/>
                        <div className="">
                            <p className="text-white m-2">Total number user</p>
                            <h3 className="text-white ms-5">20</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex border-right">
                            <img src={successuser}/>
                        <div className="">
                            <p className="text-white m-2">Total number user</p>
                            <h3 className="text-white ms-5">20</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex ">
                            <img src={successuser}/>
                        <div className="">
                            <p className="text-white m-2">Total number user</p>
                            <h3 className="text-white ms-5">20</h3>
                            
                        </div>
                    </div>
                </div> */}
             <div className="container bg-white mt-5 custom ">
                <div className="row">
                    <div className="col-lg-12 p-5">
                        <div class="col-lg-12 login-form">
                            <div class="col-lg-12 login-form">
                               <h1>User Profile</h1>
                               <Link to={`/bde/${id}/${domain}/addmanualprofile`} class="btn btn-success">ADD New Data</Link>
                               <select class="list-dt d-block col-lg-3 col-12 boder float-end mb-3" name="status" id="status" value={filter} onChange={handleChange}>
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
