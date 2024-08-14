import React,{useEffect, useState} from "react";
import './add_user.css'
import { Link, useParams } from "react-router-dom";
import successuser from '../Assest/sucess user.png'
import axios from "axios";
export function Adduser(){
        var {id}=useParams()
        const [file, setFile] = useState(null);
        const[head,setHead]=useState([])
        const[role,setRole]=useState([])
        const[domain,setDomain]=useState([])
        const handleFileChange = (e) => {
          setFile(e.target.files[0]);
        };
      
        const handleSubmit = async () => {
          const formData = new FormData();
          formData.append('file', file);
          await axios.post('http://192.168.253.177:5001/upload', formData)
          .then((res)=>{
            if(res.data.status==="inserted"){
                alert("user uploaded")
                window.location.reload()
            }
          })
          // Optionally, you can show a success message or redirect the user after upload.
        };
        useEffect(()=>{
            fetch("http://192.168.253.177:5001/gethead")
            .then(res=>res.json())
            .then(data=>setHead(data))
            fetch("http://192.168.253.177:5001/getrole")
            .then(response => response.json())
            .then(data =>setRole(data))
            fetch("http://192.168.253.177:5001/getdomain")
            .then(response => response.json())
            .then(data =>setDomain(data))
        },[])
        
        
      function handleadduser(event){
        event.preventDefault();
        var fullnamepatten= /^[a-zA-Z ]{2,30}$/;
        var phonenumberpatten=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var passwordpatten=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/
        var domain='kggeniuslabs.com'
        var emp_name=document.getElementById("emp_name").value 
        var phonenumber=document.getElementById("phone_number").value 
        var password=document.getElementById("password").value 
        var head=document.getElementById("head").value 
        var employeeid=document.getElementById("employee_id").value 
        var emailid=document.getElementById("emailid").value 
        var role=document.getElementById("role").value 
        var domainid=document.getElementById("domain").value 

        var key={
            emp_name:emp_name,
            phonenumber:phonenumber,
            password:password,
            head:head,
            employeeid:employeeid,
            emailid:emailid,
            role:role,
            domainid:domainid
        }
        var cutdomain=emailid.split('@')
        if(!fullnamepatten.test(emp_name) || emp_name===''){
            alert("Please include name")
        }
        else if(!(cutdomain[1]===domain)){
            // alert("Please use KGGL mail id")
        }
        else if(!phonenumberpatten.test(phonenumber) || phonenumber===''){
            alert("please give the phone number")
        }
        else if(password===''){
            alert("please give password")
        }
        else if(head===''){
            alert("please select the head name")
        }
        else if(role===''){
            alert("please select the role")
        }
        else if(domainid===''){
            alert("please select the domain")
        }
        else{
            axios.post("http://192.168.253.177:5001/adduser",key)
            
            .then((res)=>{
                if(res.data.status==="inserted"){
                    alert("data are Added successfully")
                    
                    window.location.href=`/admin/${id}`
                }
                else if(res.data.status==="error"){
                    alert("Already Added...")
                    // alert("hiii")
                }
                else{
                    alert("data are not Added")
                } 
            })
        }
      }
    return(
        <>
            {/* <div className="container bg-white p-5">
                
                
            </div>         */}
            {/* <header class=" m-5 p-5 ">
                    <div class="container-fluid ">
                        <div class="mb-npx ">
                            <div class="row align-items-center ">
                                <div class="col-sm-6 col-12 col-lg-12 mb-4 mb-sm-0 ">
                                
                                    <h1 class="h2 mb-0 ls-tight text-white">Hi, <span style={{color:"#DC3545",textTransform:"capitalize" }} ></span></h1>
                                </div>
                                
                            
                            </div>
                        
                        </div>
                    </div>
                </header> */}
                <div className="container row  backcolorvalue m-5 p-5 mx-auto">
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
                </div>
             <div className="container bg-white mt-5 custom ">
                <div className="row">
                    <div className="col-lg-12 p-5">
                        <div class="col-lg-12 d-flex justify-content-between login-title">
                            <h3>Add User</h3>
                            <button className="btn btn-primary btn-md btn-sm float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">Upload User</button>
                        </div>
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
￼
Role
                                    </div>
                                    
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-12 login-form">
                            <div class="col-lg-12 login-form">
                                <form onSubmit={handleadduser}>
                                    <div className="container-fluid row">

                                    <div className="col-lg-6">

                                        <div class="form-group">
                                            <label class="form-control-label text-black">Name</label>
                                            <input type="text" class="form-control" name="emp_name" id="emp_name"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label class="form-control-label text-black">Phone Number</label>
                                            <input type="text" class="form-control" name="phone_number" id="phone_number" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label text-black">Password</label>
                                            <input type="password" class="form-control" name="password" id="password" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label text-black">Head Name</label>
                                            <select class="list-dt d-block col-lg-12 col-12 boder" name="head" id="head">
                                                <option>select the head</option>
                                                {head.map((value,index)=>(
                                                    <option value={value.name}>{value.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">

                                        <div class="form-group">
                                            <label class="form-control-label text-black">Employee Id</label>
                                            <input type="text" class="form-control" name="employee_id" id="employee_id"/>
                                        </div>
                                       
                                        <div class="form-group">
                                        <label class="form-control-label text-black">Email Id</label>
                                            <input type="text" class="form-control" name="emailid" id="emailid"/>
                                        </div>
                                        <div class="form-group mb-2">
                                            <label class="form-control-label text-black">Role</label>
                                            <select class="list-dt d-block col-lg-12 col-12 boder" name="role" id="role">
                                                <option>select the role</option>
                                                {role.map((value,index)=>(
                                                    <option value={value.role_id}>{value.role_name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label text-black">Domain</label>
                                            <select class="list-dt d-block col-lg-12 col-12 boder" name="domain" id="domain">
                                                <option>select the Domain</option>
                                                {domain.map((value,index)=>(
                                                    <option value={value.id}>{value.domain}</option>
                                                ))}
                                            </select>
                                        </div>
                                        

                                       
                                        
                                        <button type="submit" id="b1" class="btn btn-success mx-auto col-lg-12 mt-5">Add Userl</button>
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}