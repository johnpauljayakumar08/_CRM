import React from 'react'
import './bdmmenu.css'
import kglogo from '../../Assest/logo.png'    
import { Link, NavLink, useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
export function Bdmmenu(){
    var {id}=useParams()
    var {domain}=useParams()
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear cache or perform any necessary cleanup
        localStorage.removeItem('authToken'); // Example: Clear authentication token from local storage
    
        // Redirect to login page
        navigate('/', { replace: true }); // Replace the current route with the login route
      };
    return(
        <>
             <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
  
                <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg backgroundimage" id="navbarVertical">
                    <div class="container-fluid">
                
                        <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    
                        <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                            <img src={kglogo} className='col-lg-8 h-50 d-none d-lg-inline'/>
                        </a>
                        {/* <!-- User menu (mobile) --> */}
                        <div class="navbar-user d-lg-none">
                            {/* <!-- Dropdown --> */}
                            <div class="dropdown">
                                {/* <!-- Toggle --> */}
                                <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div class="avatar-parent-child">
                                        <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar- rounded-circle"/>
                                        <span class="avatar-child avatar-badge bg-success"></span>
                                    </div>
                                </a>
                                {/* <!-- Menu --> */}
                                {/* <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                                    <a href="#" class="dropdown-item">Profile</a>
                                    <a href="#" class="dropdown-item">Settings</a>
                                    <a href="#" class="dropdown-item">Billing</a>
                                    <hr class="dropdown-divider"/>
                                    <a href="#" class="dropdown-item">Logout</a>
                                </div> */}
                            </div>
                        </div>
                        {/* <!-- Collapse --> */}
                        <div class="collapse navbar-collapse text-white" id="sidebarCollapse">
                            {/* <!-- Navigation --> */}
                            <ul class="navbar-nav text-white">
                                <Link to={`/bdm/${id}/${domain}`}><li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i class="bi bi-house  text-white"></i><span className='text-white'> Dashboard </span>
                                    </a>
                                </li></Link>
                                {/* <Link to={`/adduser/${id}`}><li class="nav-item">
                                    <a class="nav-link">
                                        <i class="bi bi-bar-chart text-white"></i> <span className='text-white'></span>
                                    </a>
                                </li></Link> */}
                                {/* <Link to={`/addprofile/${id}`}><li class="nav-item">
                                    <a class="nav-link">
                                        <i class="bi bi-bar-chart text-white"></i> <span className='text-white'>Add Profile</span>
                                    </a>
                                </li></Link> */}
                                
                              
                            </ul>
                            
                            <hr class="navbar-divider my-5 opacity-20"/>
                            
                            <ul class="navbar-nav">
                                
                                <li class="nav-item">
                                    {/* <Link to='/'>
                                    <a class="nav-link" href="#">
                                        <i class="bi bi-box-arrow-left"></i> Logout
                                    </a>
                                    </Link> */}
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
        </>
    );
}