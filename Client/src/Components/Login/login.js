import React from 'react'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faL, faXmark} from '@fortawesome/free-solid-svg-icons'
import './login.css'
import loginimage from '../Assest/Group 124.png'
import kglogo from '../Assest/logo.png'
import axios from 'axios';
export function Login(){
    const handlelogin=(event)=>{
        event.preventDefault();
        var username=document.getElementById("email").value 
        var password=document.getElementById("password").value
        var key={
            username:username,
            password:password
        }
        if(username===''){
            alert("Please Enter the Username")
        }
        else if(password==''){
            alert("Please Enter the Password")
        }
        else{
            axios.post("http://192.168.253.177:5001/login",key)
            .then((res)=>{
                
                if(res.data.status==="success"){
                    var role=res.data.role;
                    var id=res.data.id;
                    var domain=res.data.domain
                    if(role===1){
                        window.location.href=`/admin/${id}`
                    }
                    else if(role===2){
                        window.location.href=`/manager/${id}`
                    }
                    else if(role===3){
                        window.location.href=`/bdm/${id}/${domain}`
                    }
                    else if(role===4){
                        window.location.href=`/bde/${id}/${domain}`
                    }
                }
                else if(res.data.status==="invalid_user"){
                    // alert("Please check your password")
                }
                else if(res.data.status==="both_are_invalid"){
                    // alert("Please check your username")
                }
                else{
                    // alert("Please Contact Admin")
                }
            })
        }
      }
    return(
        <>
              <div className="container-fluid padd">
                <div className="row padd">

                    <div className="col-lg-4 padd">
                        <img src={loginimage} className="container-fluid padd"/>
                    </div>
                    <div className='col-lg-1'></div>
                    <div className="col-lg-6 p-5">
                        <div className='mx-auto ms-5 ps-5'>
                            <img src={kglogo} className='col-lg-8 col-8 mx-auto'/>
                        </div>

                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form onSubmit={handlelogin}>
                                    
                                    <div className="form-group">
                                        <label className="form-control-label mb-3 textcolor"><h4 className='font-weight-bold'>Email Id</h4></label>
                                        <input type="text" className="form-control" name="email" id="email"/>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="form-group">
                                    <label className="form-control-label mb-3 textcolor"><h4 className='font-weight-bold'>Password</h4></label>
                                        <input type="password" className="form-control" name="password" id="password" />
                                    </div>
                                    <br/>
                                    
                                    <div className=" text-left d-flex ">
                                        {/* <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                                <input type="checkbox" checked/>
                                                <span className="checkmark"></span>
                                        </label> */}
                                        <div className="ms-auto ">
                                            <a href="#">Forgot Password</a>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="col-lg-12">
                                            <button type="submit" className="btn btn-primary col-lg-12 col-12">Sign in</button>
                                        
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
