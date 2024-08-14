import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Addmanualprofilebdm(){
    // var {lead_id}=useParams()
    // console.log(lead_id)
    var {id}=useParams()
    var {domain}=useParams()
   
  
    
    // function handleupdateprofile(event){
    //     event.preventDefault()
    //     var name=document.getElementById("name").value
    //     var emailid=document.getElementById("emailid").value
    //     var phonenumber=document.getElementById("phone_number").value
    //     var altphonenumber=document.getElementById("alternative").value
       
    //     var degree=document.getElementById("degree").value
        
    //     var yop=document.getElementById("yop").value
       
    //     var percentage=document.getElementById("percentage").value
       
    //     var university=document.getElementById("university").value
       
    //     var city=document.getElementById("city").value
     
    //     var state=document.getElementById("state").value
      
    //     var experience=document.getElementById("experience").value
        
    //     var specialization=document.getElementById("specialization").value
       
    //     var interstedcountry1=document.getElementById("interstedcountry1").value
       
    //     var interstedcountry2=document.getElementById("interstedcountry2").value
        
    //     var interstedcountry3=document.getElementById("interstedcountry3").value
        
    //     var expectedsalary=document.getElementById("expectedsalary").value
        
    //     var key={
    //         name:name,
    //         emailid:emailid,
    //         phonenumber:phonenumber,
    //         altphonenumber:altphonenumber,
    //         degree:degree,
    //         yop:yop,
    //         percentage:percentage,
    //         university:university,
    //         city:city,
    //         state:state,
    //         experience:experience,
    //         specialization:specialization,
    //         interstedcountry1:interstedcountry1,
    //         interstedcountry2:interstedcountry2,
    //         interstedcountry3:interstedcountry3,
    //         expectedsalary:expectedsalary
    //     }
    //     if(name===""){
    //         alert("name is Empty")
    //     }
        
    //     else{
    //         axios.post("http://192.168.253.177:5001/updateprofile/"+lead_id,key)
    //         .then((res)=>{
    //             if(res.data.status==="error"){
    //                 alert("data are not updated")
    //             }
    //             else if(res.data.status==="success"){
    //                 alert("data are updated")
    //             }
    //         })
    //     }
    // }
    
    // const [firstname, setFirstName] = useState('');
    // const [lastname, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phonenumber, setPhoneNumber] = useState('');
    // const [companyName, setCompanyName] = useState('');
    // const [countryRegion, setCountryRegion] = useState('');
    // const [city, setCity] = useState('');
    // const [industry, setIndustry] = useState('');
    // const [jobTitle, setJobTitle] = useState('');
    // const [mobilePhoneNumber, setMobilePhoneNumber] = useState('');
    // const [linkedinProfile, setLinkedinProfile] = useState('');
    // const [associatedCompany, setAssociatedCompany] = useState('');
    // const [alternativephno,setAlternativePhno]=useState('');
    // const [alternativeemail,setAlternativeEmail]=useState('');
    useEffect(()=>{
        // fetch("http://192.168.253.177:5001/getglprofile/"+lead_id)
        // .then(data=>data.json())
        // .then((res)=>{
        //     console.log(res)
        //     setFirstName(res[0].first_name)
        //     setLastName(res[0].last_name)
        //     setEmail(res[0].email)
        //     setAlternativeEmail(res[0].alternative_emailid)
        //     setPhoneNumber(res[0].phone_number)
        //     setAlternativePhno(res[0].alternative_number)
        //     setCompanyName(res[0].company_name)
        //     setCountryRegion(res[0].country_region)
        //     setCity(res[0].city)
        //     setIndustry(res[0].industry)
        //     setMobilePhoneNumber(res[0].mobile_phone_number)
        //     setJobTitle(res[0].job_title)
        //     setLinkedinProfile(res[0].person_linkedin_profile)
        //     setAssociatedCompany(res[0].associated_company)
            
        // })
    },[])
    function handleupdateglprofile(event){
        event.preventDefault()
        const firstName = document.getElementById("firstname").value;
        const lastName = document.getElementById("lastname").value;
        const emailId = document.getElementById("emailid").value;
        const alternativeEmail = document.getElementById("alternative_email").value;
        const phoneNumber = document.getElementById("phone_number").value;
        const alternativePhno = document.getElementById("alternative_phno").value;
        const companyName = document.getElementById("company_name").value;
        const countryRegion = document.getElementById("country_region").value;
        const city = document.getElementById("city").value;
        const industry = document.getElementById("industry").value;
        const mobilePhoneNumber = document.getElementById("mobile_phone_number").value;
        const jobTitle = document.getElementById("job_title").value;
        const linkedinProfile = document.getElementById("linkedin_profile").value;
        const associatedCompany = document.getElementById("associated_company").value;
        // console.log("data",{ 
        //     firstName, lastName, emailId, alternativeEmail, phoneNumber, 
        //     alternativePhno, companyName, countryRegion, city, industry, 
        //     mobilePhoneNumber, jobTitle, linkedinProfile, associatedCompany 
        //   });
          var key={
            first_name:firstName,
            last_name:lastName,
            email:emailId,
            alternative_emailid:alternativeEmail,
            phone_number:phoneNumber,
            alternative_number:alternativePhno,
            company_name:companyName,
            country_region:countryRegion,
            city:city,
            industry:industry,
            mobile_phone_number:mobilePhoneNumber,
            job_title:jobTitle,
            person_linkedin_profile:linkedinProfile,
            associated_company:associatedCompany
          }
        //   console.log("key",key)
          axios.post("http://192.168.253.177:5001/addglprofile/"+id,key)
                    .then((res)=>{
                        if(res.data.status==="error"){
                            alert("data are not updated")
                        }
                        else if(res.data.status==="Profile added successfully"){
                            alert("data are updated")
                            window.location.href=`/bdm/${id}/${domain}`
                        }
                    })
         

    }

    return(
        <>
            <h1 className="text-white p-5">Add Profile</h1>
            
            <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form  ">
                    {/* <form onSubmit={handleupdateprofile}>
                        <div className="col-lg-12 row">

                        <div className="col-lg-4 ">

                            <div class="form-group mb-2">
                                <label class="form-control-label text-white">Name</label>
                                <input type="text" class="form-control" name="emp_name" id="name" value={name} onChange={(change)=>{setName(change.target.value)}}/>
                            </div>
                            
                            <div class="form-group mb-2">
                            <label class="form-control-label text-white">Email Id</label>
                                <input type="text" class="form-control" name="emailid" id="emailid" value={emailid} onChange={(change)=>{setEmailid(change.target.value)}}/>
                            </div>
                           
                            <div class="form-group mb-2">
                                <label class="form-control-label text-white">university</label>
                                <input type="text" class="form-control" name="university" id="university" value={university} onChange={(change)=>{setuniversity(change.target.value)}} />
                               
                            </div>
                            <div class="form-group mb-2">
                                <label class="form-control-label text-white">state</label>
                                <input type="text" class="form-control" name="state" id="state" value={state} onChange={(change)=>{setState(change.target.value)}} />
                               
                            </div>
                           
                            
                            <div class="form-group mb-2">
                            <label htmlFor="firstInterest">First Interest:</label>
                            <select id="interstedcountry1" className="list-dt d-block col-lg-12 col-12 boder" value={interstedcountry1} onChange={handleCountry1Change}>
                                <option value={8}>Select a country</option>
                                {countries.map(country => (
                                <option key={country.id} value={country.id}>{country.country}</option>
                                ))}
                            </select>
                               
                            </div>
                            <div class="form-group mb-2">
                                <label class="form-control-label text-white">expected salary</label>
                                <input type="text" class="form-control" name="expectedsalary" id="expectedsalary"  value={expectedsalary} onChange={(change)=>{setExpectedsalary(change.target.value)}}/>
                               
                            </div>
                           
                        </div>
                        <div className="col-lg-4">

                            <div class="form-group mb-2">
                                <label class="form-control-label text-white">Phone Number</label>
                                <input type="text" class="form-control" name="phone_number" id="phone_number" value={phonenumber} />
                            </div>
                            <div class="form-group mb-2">
                                <label class="form-control-label text-white">degree</label>
                                <input type="text" class="form-control" name="degree" id="degree" value={degree} onChange={(change)=>{setDegree(change.target.value)}} />
                               
                            </div>
                            <div class="form-group mb-2">
                                <label class="form-control-label text-white">year of passing</label>
                                <input type="text" class="form-control" name="yop" id="yop" value={yop} onChange={(change)=>{setYop(change.target.value)}} />
                               
                            </div>
                           
                           
                            
                            <div class="form-group mb-2">
                                <label class="form-control-label text-white">specialization</label>
                                <input type="text" class="form-control" name="specialization" id="specialization" value={specialization} onChange={(change)=>{setSpecialization(change.target.value)}} />
                               
                            </div>
                            <div class="form-group mb-2">
                            <label htmlFor="secondInterest">Second Interest:</label>
                            <select id="interstedcountry2" className="list-dt d-block col-lg-12 col-12 boder" value={interstedcountry2} onChange={handleCountry2Change}>
                                <option value={8}>Select a country</option>
                                {countries.filter(country => country.id !== interstedcountry1 )
                                .map(country => (
                                    <option key={country.id} value={country.id}>{country.country}</option>
                                ))}
                            </select>
                               
                            </div>
                            
                           
                            

                                <button type="submit" class="btn btn-success mx-auto col-lg-12 mt-5">Update</button>
                            
                            
                        </div>
                        <div className="col-lg-4">
                            <div class="form-group  mb-2">
                                <label class="form-control-label text-white">Alternative Phone number</label>
                                <input type="text" class="form-control" name="Alternative" id="alternative" value={altphonenumber} onChange={(change)=>{setAltphonenumber(change.target.value)}} />
                            </div>
                            <div class="form-group mb-2">
                                <label class="form-control-label text-white">percentage</label>
                                <input type="text" class="form-control" name="percentage" id="percentage" value={percentage} onChange={(change)=>{setPercentage(change.target.value)}}/>
                               
                            </div>
                            <div class="form-group mb-2">
                                <label class="form-control-label text-white">city</label>
                                <input type="text" class="form-control" name="city" id="city" value={city} onChange={(change)=>{setCity(change.target.value)}} />
                               
                            </div>
                            
                            <div class="form-group mb-2">
                                <label class="form-control-label text-white">experience</label>
                                <input type="text" class="form-control" name="experience" id="experience" value={experience} onChange={(change)=>{setExperience(change.target.value)}} />
                               
                            </div>
                            <div class="form-group mb-2">
                                
                            <label htmlFor="thirdInterest">Third Interest:</label>
                            <select id="interstedcountry3" className="list-dt d-block col-lg-12 col-12 boder" value={interstedcountry3} onChange={handleCountry3Change}>
                                <option value={8}>Select a country</option>
                                {countries.filter(country => country.id !== interstedcountry1 && country.id !== interstedcountry2)
                                .map(country => (
                                    <option key={country.id} value={country.id}>{country.country}</option>
                                ))}
                            </select>
                               
                            </div>
                           
                        </div>
                        
                        </div>
                    </form> */}
                    <form onSubmit={handleupdateglprofile}>
                        <div className='container-fluid mt-5'>
                            <div className='row mt-5'>
                        <div className='col-sm-12 col-md-6 col-lg-4 mt-5'>

                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">First Name</label>
                            <input type="text" className="form-control" name="first_name" id="firstname"  />
                            </div>

                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">Last Name</label>
                            <input type="text" className="form-control" name="last_name" id="lastname"  />
                            </div>

                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">Email Id</label>
                            <input type="text" className="form-control" name="emailid" id="emailid"  />
                            </div>

                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">Alternative Email ID</label>
                            <input type="text" className="form-control" name="alternative_email" id="alternative_email"  />
                            </div>

                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">Phone Number</label>
                            <input type="text" className="form-control" name="phone_number" id="phone_number"  />
                            </div>
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">Alternative Phone Number</label>
                            <input type="text" className="form-control" name="alternative_phno" id="alternative_phno"  />
                            </div>
                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">Company Name</label>
                            <input type="text" className="form-control" name="company_name" id="company_name"  />
                            </div>

                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">Country Region</label>
                            <input type="text" className="form-control" name="country_region" id="country_region"  />
                            </div>

                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">City</label>
                            <input type="text" className="form-control" name="city" id="city"  />
                            </div>

                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">Industry</label>
                            <input type="text" className="form-control" name="industry" id="industry"  />
                            </div>

                        
                            </div>
                            <div className='col-sm-12 col-md-6 col-lg-4 mt-5'>
                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">Mobile Phone Number</label>
                            <input type="text" className="form-control" name="mobile_phone_number" id="mobile_phone_number"  />
                            </div>
                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">Job Title</label>
                            <input type="text" className="form-control" name="job_title" id="job_title"  />
                            </div>
                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">Person LinkedIn Profile</label>
                            <input type="text" className="form-control" name="linkedin_profile" id="linkedin_profile"  />
                            </div>

                            <div className="form-group mb-2">
                            <label className="form-control-label  font-weight-bold">Associated Company</label>
                            <input type="text" className="form-control" name="associated_company" id="associated_company"  />
                            </div>

                            </div>
                        </div>
                        <div className='text-center my-4'>
                        <input type='submit' className='btn btn-primary btn-sm' value='Submit' />
                        </div>
                        </div>
                    </form>
                </div>
            </div>  
        </>
    );
}
