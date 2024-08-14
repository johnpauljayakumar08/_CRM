// import React, { useEffect, useState } from "react";
// import './admin.css'
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// export function Admin(){
//     const[totallicense,setTotallicense]=useState('')
//     const[learnerinvited,setLearnerinvited]=useState('')
//     const[learnerjoiner,setLearnerjoiner]=useState('')
//     var calculate=(learnerinvited/totallicense*100)
//     var calculatejoiner=(learnerjoiner/learnerinvited*100)
//     var {id}=useParams()
//     const[learnerinvitedpercentage,setLearnerinvitedpercentage]=useState(calculate)
//     const[learnerjoinerpercentage,setLearnerjoinerpercentage]=useState(calculatejoiner)
//     const[spocname,setSpocname]=useState('')
//     function handeleinvite(event){
//         event.preventDefault()
//         var emails=document.getElementById("emailids").value
//         var emailsplit=emails.split(',')
//         var key={
//             emails:emails
//         }
//         if(emails===''){
//             alert("Plz give the mailid")
//         }
//         else if(emailsplit.length>totallicense){
//             alert("your available License only"+totallicense+"your are trying the invite more than that please add the license")
//         }
//         else{
//             axios.post("http://192.168.253.177:5001/text-mail/"+id,key)
//             .then((res)=>{
//                 if(res.data.message==="Mail send"){
//                     alert("Mail sended Successfully")
//                     window.location.reload()
//                 }
//                 else{
//                     alert("mail is not sendted")
//                 }
//             })
//         }
//     }
//     useEffect(()=>{
//         fetch("http://192.168.253.177:5001/bussuserdetails/"+id)
//         .then(res=>res.json())
//         .then((respon)=>{
//             setSpocname(respon[0].spoc_name)
//             setTotallicense(respon[0].License)
//             setLearnerinvited(respon[0].invite)
//             setLearnerjoiner(respon[0].enrolled)

//         })
//     })
//     return(
//         <>
//            {/* <div class="h-screen flex-grow-1 overflow-y-lg-auto">
        
//         <header class="bg-surface-primary border-bottom pt-6">
//             <div class="container-fluid">
//                 <div class="mb-npx">
//                     <div class="row align-items-center">
//                         <div class="col-sm-6 col-12 col-lg-12 mb-4 mb-sm-0">
                           
//                             <h1 class="h2 mb-0 ls-tight">Hi, <span style={{color:"#DC3545",textTransform:"capitalize" }} >{spocname}</span></h1>
//                         </div>
                        
                       
//                     </div>
                   
//                 </div>
//             </div>
//         </header>
       
//         <main class="py-6 bg-surface-secondary">
//             <div class="container-fluid">
                
//                 <div class="row g-6 mb-6">
//                     <div class="col-xl-4 col-sm-6 col-12 container-fluid">
//                         <div class="card shadow border-0 ">
//                             <div className="overline"></div>
//                             <div class="card-body">
//                                 <div class="row">
//                                     <div class="col">
//                                         <span class="h6 font-semibold text-muted text-sm d-block mb-2 ">Total License</span>
//                                         <span class="h3 font-bold mb-0">{totallicense}</span>
//                                     </div>
//                                     <div class="col-auto">
//                                         <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
//                                             <i class="bi bi-credit-card"></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <hr/>
//                                 <div class="mt-2 mb-0 text-sm">
//                                     <span class="badge badge-pill bg-soft-success text-success me-2">
//                                         <i class="bi bi-arrow-up me-1"></i>13%
//                                     </span>
//                                     <Link to={`/bussinessplan/${id}`}><span class="textend"><i class="bi bi-add me-1"></i>Add More License..</span></Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="col-xl-4 col-sm-6 col-12">
//                         <div class="card shadow border-0">
//                         <div className="overline"></div>
//                             <div class="card-body">
//                                 <div class="row">
//                                     <div class="col">
//                                         <span class="h6 font-semibold text-muted text-sm d-block mb-2">Learners Invited</span>
//                                         <span class="h3 font-bold mb-0">{learnerinvited}</span>
//                                     </div>
//                                     <div class="col-auto">
//                                         <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
//                                             <i class="bi bi-people"></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <hr/>
//                                 <div class="mt-2 mb-0 text-sm">
//                                     <span class="badge badge-pill bg-primary text-white me-2 p-2">
//                                         Active:
//                                     </span>
//                                     <span class="badge badge-pill bg-danger text-white me-2  p-2">
//                                         Inactive:
//                                     </span>
//                                     <span class="badge badge-pill bg-soft-success text-success me-2 p-2">
//                                         completed:
//                                     </span>
//                                     {totallicense === 0 ? (
//                                             <span className="product-sold-out textend">Add License</span>
//                                         ) : (
//                                             <Link><span class="textend" data-bs-toggle="modal" data-bs-target="#exampleModal" disable={totallicense==0}>Invite Learners..</span></Link>
//                                         )}
                                   
                                    
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                 <div class="modal-dialog modal-dialog-centered">
//                                     <div class="modal-content">
//                                     <div class="modal-header modleborderbottom">
//                                         <h5 class="modal-title" id="exampleModalLabel">Invite User</h5>
//                                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                     </div>
//                                     <div class="modal-body p-5">
//                                         <form onSubmit={handeleinvite}>

//                                             <textarea className="col-lg-12 boderthickness" id="emailids"></textarea>
//                                             <p >You may specify multiple email addresses by separating them with commas</p>
//                                             <div className=" d-flex justify-content-between p-5">

//                                                 <button type="submit" class="btn btnbgcolor ms-auto">Invite</button>
                                                
                                                
//                                             </div>
//                                         </form>

//                                     </div>
                                    
//                                     </div>
//                                 </div>
//                             </div>
//                     <div class="col-xl-4 col-sm-6 col-12">
//                         <div class="card shadow border-0">
//                         <div className="overline"></div>
//                             <div class="card-body">
//                                 <div class="row">
//                                     <div class="col">
//                                         <span class="h6 font-semibold text-muted text-sm d-block mb-2">Learners Enrolled</span>
//                                         <span class="h3 font-bold mb-0">{learnerjoiner}</span>
//                                     </div>
//                                     <div class="col-auto">
//                                         <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
//                                             <i class="bi bi-people"></i>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <hr/>
//                                 <div class="mt-2 mb-0 text-sm">
//                                     <span class="badge badge-pill bg-soft-danger text-danger me-2">
//                                         <i class="bi bi-arrow-down me-1"></i>-{learnerjoinerpercentage}%
//                                     </span>
//                                     <Link to={`/notenrolled/${id}`}><span class="textend">Not Enrolled...</span></Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                    
//                 </div>
//                 <div class="card shadow border-0 mb-7">
                    
//                     <div class="card-header d-flex justify-content-between">
//                         <h5 class="mb-0">Leader Board</h5>
//                         <h5 class="mb-0">Active</h5>
//                         <h5 class="mb-0">Inactive</h5>
//                         <h5 class="mb-0">completed</h5>
//                     </div>
//                     <div class="table-responsive">
//                         <table class="table table-hover table-nowrap">
//                             <thead class="thead-light">
//                                 <tr>
//                                     <th scope="col">Name</th>
//                                     <th scope="col">Date</th>
//                                     <th scope="col">Course</th>
//                                     <th scope="col">Hours</th>
//                                     <th scope="col">Point</th>
//                                     <th></th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>
//                                         <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Robert Fox
//                                         </a>
//                                     </td>
//                                     <td>
//                                         Feb 15, 2021
//                                     </td>
//                                     <td>
//                                         <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" class="avatar avatar-xs rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Dribbble
//                                         </a>
//                                     </td>
//                                     <td>
//                                         $3.500
//                                     </td>
//                                     <td>
//                                         <span class="badge badge-lg badge-dot">
//                                             <i class="bg-success"></i>Scheduled
//                                         </span>
//                                     </td>
//                                     <td class="text-end">
//                                         <a href="#" class="btn btn-sm btn-neutral">View</a>
//                                         <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
//                                             <i class="bi bi-trash"></i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Darlene Robertson
//                                         </a>
//                                     </td>
//                                     <td>
//                                         Apr 15, 2021
//                                     </td>
//                                     <td>
//                                         <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-2.png" class="avatar avatar-xs rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Netguru
//                                         </a>
//                                     </td>
//                                     <td>
//                                         $2.750
//                                     </td>
//                                     <td>
//                                         <span class="badge badge-lg badge-dot">
//                                             <i class="bg-warning"></i>Postponed
//                                         </span>
//                                     </td>
//                                     <td class="text-end">
//                                         <a href="#" class="btn btn-sm btn-neutral">View</a>
//                                         <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
//                                             <i class="bi bi-trash"></i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Theresa Webb
//                                         </a>
//                                     </td>
//                                     <td>
//                                         Mar 20, 2021
//                                     </td>
//                                     <td>
//                                         <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-3.png" class="avatar avatar-xs rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Figma
//                                         </a>
//                                     </td>
//                                     <td>
//                                         $4.200
//                                     </td>
//                                     <td>
//                                         <span class="badge badge-lg badge-dot">
//                                             <i class="bg-success"></i>Scheduled
//                                         </span>
//                                     </td>
//                                     <td class="text-end">
//                                         <a href="#" class="btn btn-sm btn-neutral">View</a>
//                                         <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
//                                             <i class="bi bi-trash"></i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Kristin Watson
//                                         </a>
//                                     </td>
//                                     <td>
//                                         Feb 15, 2021
//                                     </td>
//                                     <td>
//                                         <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-4.png" class="avatar avatar-xs rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Mailchimp
//                                         </a>
//                                     </td>
//                                     <td>
//                                         $3.500
//                                     </td>
//                                     <td>
//                                         <span class="badge badge-lg badge-dot">
//                                             <i class="bg-dark"></i>Not discussed
//                                         </span>
//                                     </td>
//                                     <td class="text-end">
//                                         <a href="#" class="btn btn-sm btn-neutral">View</a>
//                                         <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
//                                             <i class="bi bi-trash"></i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <img alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Cody Fisher
//                                         </a>
//                                     </td>
//                                     <td>
//                                         Apr 10, 2021
//                                     </td>
//                                     <td>
//                                         <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" class="avatar avatar-xs rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Webpixels
//                                         </a>
//                                     </td>
//                                     <td>
//                                         $1.500
//                                     </td>
//                                     <td>
//                                         <span class="badge badge-lg badge-dot">
//                                             <i class="bg-danger"></i>Canceled
//                                         </span>
//                                     </td>
//                                     <td class="text-end">
//                                         <a href="#" class="btn btn-sm btn-neutral">View</a>
//                                         <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
//                                             <i class="bi bi-trash"></i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Robert Fox
//                                         </a>
//                                     </td>
//                                     <td>
//                                         Feb 15, 2021
//                                     </td>
//                                     <td>
//                                         <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-1.png" class="avatar avatar-xs rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Dribbble
//                                         </a>
//                                     </td>
//                                     <td>
//                                         $3.500
//                                     </td>
//                                     <td>
//                                         <span class="badge badge-lg badge-dot">
//                                             <i class="bg-success"></i>Scheduled
//                                         </span>
//                                     </td>
//                                     <td class="text-end">
//                                         <a href="#" class="btn btn-sm btn-neutral">View</a>
//                                         <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
//                                             <i class="bi bi-trash"></i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <img alt="..." src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Darlene Robertson
//                                         </a>
//                                     </td>
//                                     <td>
//                                         Apr 15, 2021
//                                     </td>
//                                     <td>
//                                         <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-2.png" class="avatar avatar-xs rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Netguru
//                                         </a>
//                                     </td>
//                                     <td>
//                                         $2.750
//                                     </td>
//                                     <td>
//                                         <span class="badge badge-lg badge-dot">
//                                             <i class="bg-warning"></i>Postponed
//                                         </span>
//                                     </td>
//                                     <td class="text-end">
//                                         <a href="#" class="btn btn-sm btn-neutral">View</a>
//                                         <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
//                                             <i class="bi bi-trash"></i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <img alt="..." src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Theresa Webb
//                                         </a>
//                                     </td>
//                                     <td>
//                                         Mar 20, 2021
//                                     </td>
//                                     <td>
//                                         <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-3.png" class="avatar avatar-xs rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Figma
//                                         </a>
//                                     </td>
//                                     <td>
//                                         $4.200
//                                     </td>
//                                     <td>
//                                         <span class="badge badge-lg badge-dot">
//                                             <i class="bg-success"></i>Scheduled
//                                         </span>
//                                     </td>
//                                     <td class="text-end">
//                                         <a href="#" class="btn btn-sm btn-neutral">View</a>
//                                         <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
//                                             <i class="bi bi-trash"></i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <img alt="..." src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Kristin Watson
//                                         </a>
//                                     </td>
//                                     <td>
//                                         Feb 15, 2021
//                                     </td>
//                                     <td>
//                                         <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-4.png" class="avatar avatar-xs rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Mailchimp
//                                         </a>
//                                     </td>
//                                     <td>
//                                         $3.500
//                                     </td>
//                                     <td>
//                                         <span class="badge badge-lg badge-dot">
//                                             <i class="bg-dark"></i>Not discussed
//                                         </span>
//                                     </td>
//                                     <td class="text-end">
//                                         <a href="#" class="btn btn-sm btn-neutral">View</a>
//                                         <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
//                                             <i class="bi bi-trash"></i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <img alt="..." src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Cody Fisher
//                                         </a>
//                                     </td>
//                                     <td>
//                                         Apr 10, 2021
//                                     </td>
//                                     <td>
//                                         <img alt="..." src="https://preview.webpixels.io/web/img/other/logos/logo-5.png" class="avatar avatar-xs rounded-circle me-2"/>
//                                         <a class="text-heading font-semibold" href="#">
//                                             Webpixels
//                                         </a>
//                                     </td>
//                                     <td>
//                                         $1.500
//                                     </td>
//                                     <td>
//                                         <span class="badge badge-lg badge-dot">
//                                             <i class="bg-danger"></i>Canceled
//                                         </span>
//                                     </td>
//                                     <td class="text-end">
//                                         <a href="#" class="btn btn-sm btn-neutral">View</a>
//                                         <button type="button" class="btn btn-sm btn-square btn-neutral text-danger-hover">
//                                             <i class="bi bi-trash"></i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                     <div class="card-footer border-0 py-5">
//                         <span class="text-muted text-sm">Showing 10 items out of 250 results found</span>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     </div> */}
//             <div className="container-fluid bgcolorset rounded">
//                  <header class=" border-bottom pt-6 bgcolorset">
//                     <div class="container-fluid bgcolorset">
//                         <div class="mb-npx bgcolorset">
//                             <div class="row align-items-center bgcolorset">
//                                 <div class="col-sm-6 col-12 col-lg-12 mb-4 mb-sm-0 bgcolorset">
                                
//                                     <h1 class="h2 mb-0 ls-tight">Hi, <span style={{color:"#DC3545",textTransform:"capitalize" }} >{spocname}</span></h1>
//                                 </div>
                                
                            
//                             </div>
                        
//                         </div>
//                     </div>
//                 </header>
//                 <div class="container-fluid">
                    
//                     <div class="row g-6 mb-6">
//                         <div class="col-xl-4 col-sm-6 col-12 container  p-5">
//                             <div class="card shadow border-0  ">
                               
//                                 <div class="card-body">
//                                     <div class="row">
//                                         <div class="col">
//                                             <span class="h6 font-semibold text-muted text-sm d-block mb-2 ">Total License</span>
//                                             <span class="h3 font-bold mb-0">{totallicense}</span>
//                                         </div>
//                                         <div class="col-auto">
//                                             <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
//                                                 <i class="bi bi-credit-card"></i>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <hr/>
//                                     <div class="mt-2 mb-0 text-sm">
//                                         <span class="badge badge-pill bg-soft-success text-success me-2">
//                                             <i class="bi bi-arrow-up me-1"></i>13%
//                                         </span>
//                                         <Link to={`/bussinessplan/${id}`}><span class="textend"><i class="bi bi-add me-1"></i>Add More License..</span></Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col-xl-4 col-sm-6 col-12 container p-5">
//                             <div class="card shadow border-0">
                          
//                                 <div class="card-body">
//                                     <div class="row">
//                                         <div class="col">
//                                             <span class="h6 font-semibold text-muted text-sm d-block mb-2">Learners Invited</span>
//                                             <span class="h3 font-bold mb-0">{learnerinvited}</span>
//                                         </div>
//                                         <div class="col-auto">
//                                             <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
//                                                 <i class="bi bi-people"></i>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <hr/>
                                    
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                     <div class="modal-dialog modal-dialog-centered">
//                                         <div class="modal-content">
//                                         <div class="modal-header modleborderbottom">
//                                             <h5 class="modal-title" id="exampleModalLabel">Invite User</h5>
//                                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                         </div>
//                                         <div class="modal-body p-5">
//                                             <form onSubmit={handeleinvite}>

//                                                 <textarea className="col-lg-12 boderthickness" id="emailids"></textarea>
//                                                 <p >You may specify multiple email addresses by separating them with commas</p>
//                                                 <div className=" d-flex justify-content-between p-5">

//                                                     <button type="submit" class="btn btnbgcolor ms-auto">Invite</button>
                                                    
                                                    
//                                                 </div>
//                                             </form>

//                                         </div>
                                        
//                                         </div>
//                                     </div>
//                                 </div>
//                         <div class="col-xl-4 col-sm-6 col-12 container p-5">
//                             <div class="card shadow border-0">
                            
//                                 <div class="card-body">
//                                     <div class="row">
//                                         <div class="col">
//                                             <span class="h6 font-semibold text-muted text-sm d-block mb-2">Learners Enrolled</span>
//                                             <span class="h3 font-bold mb-0">{learnerjoiner}</span>
//                                         </div>
//                                         <div class="col-auto">
//                                             <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
//                                                 <i class="bi bi-people"></i>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <hr/>
//                                     <div class="mt-2 mb-0 text-sm">
//                                         <span class="badge badge-pill bg-soft-danger text-danger me-2">
//                                             <i class="bi bi-arrow-down me-1"></i>-{learnerjoinerpercentage}%
//                                         </span>
//                                         <Link to={`/notenrolled/${id}`}><span class="textend">Not Enrolled...</span></Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
import React, { useEffect, useState } from "react";
import './admin.css'
import { Link, useParams } from "react-router-dom";
import successuser from '../../Assest/sucess user.png'
import axios from "axios";
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';
export function Admin(){
    const[countstatus,setCountstatus]=useState([])
    useEffect(()=>{
        fetch("http://192.168.253.177:5001/getstatuscount")
        .then(res=>res.json())
        .then(data=>setCountstatus(data))
        

    },[])
    // const colors = ['#9A3B3B', '#C08261', '#E2C799','#F2ECBE','#D20062','#D6589F'];
    const colors = ['#983C2D','#CFCC80','#A7C5C5','#DEE0D5','#E2AC48','#B96028']
  
    const labels = countstatus.map(item => item.status);
    const values = countstatus.map(item => item.status_count);
    const chartData = {
        labels: labels,
        datasets: [{
          data: values,
          backgroundColor: colors,
          datalabels: { // Configuration for labels
            color: '#9A3B3B' // Set label color to white
          }
        }],
      };
      const options = {
        plugins: {
          datalabels: {
            color: 'white',
            formatter: (value, ctx) => {
              const label = ctx.chart.data.labels[ctx.dataIndex];
              return `${label}: ${value}`;
            }
          }
        }
      };
    return(
        <>
           
                <div className="container row  backcolorvalue m-5 p-5 mx-auto">
                    <div className="col-lg-4 d-flex border-right">
                            <img src={successuser}/>
                        <div className="">
                            <h3 className="text-white m-2 ">Total BDE</h3>
                            <h3 className="text-white ms-5">20</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex border-right">
                            <img src={successuser}/>
                        <div className="">
                            <h3 className="text-white m-2">Total Lead</h3>
                            <h3 className="text-white ms-5">20</h3>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex ">
                            <img src={successuser}/>
                        <div className="">
                            <h3 className="text-white m-2"> Total Unused Lead</h3>
                            <h3 className="text-white ms-5">20</h3>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 bgcolorglassbackend  p-5">
                    <Doughnut data={chartData} options={options}  id="doughnut" />
                </div>
             
        </>
    );
}
