import React, { useEffect, useState } from "react";
import successuser from '../../Assest/sucess user.png'
import { Link, useParams } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './activity.css'
// import audio from 'http://localhost:3000/uploadcall/file_example_MP3_5MG.mp3'
import axios from "axios";
export function Activitybdm(){
    var {id}=useParams()
    var {lead_id}=useParams()
    var {domain}=useParams()
    const[status,setStatus]=useState([])
    const[activity,setActivity]=useState([])
    const [file, setFile] = useState(null);
    const [employeeId, setEmployeeId] = useState('');
    const [note, setNote] = useState('');
    const [leadId, setLeadId] = useState('');
    const [leadstatus, setleadstatus] = useState('');
    const [audioSrc, setAudioSrc] = useState('');

    useEffect(()=>{
        fetch("http://192.168.253.177:5001/getglprofile/"+lead_id)
        .then(res=>res.json())
        .then((data)=>{
            // console.log(data)
            // setProfile(data)
            setleadstatus(data[0].current_status)
            setEmployeeId(data[0].employed_id)
        })
        fetch("http://192.168.253.177:5001/getstatus/"+domain)
        .then(res=>res.json())
        .then(data=>setStatus(data))
        fetch("http://192.168.253.177:5001/getglactivity/"+lead_id)
        .then(res=>res.json())
        .then(data=>setActivity(data))
        // .then(data=>console.log(data))
        // fetchAudioFile()
        
        
    },[])
    // var URL="http://192.168.253.177:5001"
    // const fetchAudioFile = async () => {
    //     try {
    //       const response = await axios.get('http://192.168.253.177:5001/getactivity/'+lead_id); // Adjust the URL and query parameters accordingly
    //       setAudioSrc(URL.createObjectURL(response.data));
    //       console.log(audioSrc)
    //     setActivity(response.data)

    //     } catch (error) {
    //       console.error('Error fetching audio file:', error);
    //     }
    //   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    var employeeId=document.getElementById("employeeId").value
    var note=document.getElementById("note").value
    var leadId=document.getElementById("leadId").value
    var leadstatus=document.getElementById("status").value
    // alert(leadstatus)
    // const formData = new FormData();
    // // formData.append('file', file);
    // formData.append('employeeId', employeeId);
    // formData.append('note', note);
    // formData.append('leadId', leadId);
    // formData.append('leadstatus', leadstatus);
    // console.log(formData)
    var key={
        employeeId:employeeId,
        note:note,
        leadId:leadId,
        leadstatus:leadstatus
    }
    if(note===''){
        alert("please update user notes")
    }
    else if(leadstatus===""){
        alert("please update the status")
    }
    else{
        axios.post("http://192.168.253.177:5001/leadactivity",key)
        .then((res)=>{
            if(res.data.status==="inserted"){
                alert("Activity are Added successfully")
                window.location.reload()
            }
            else{
                alert("Activity is not Added")
            }
        })
    }
    // try {
    //   await axios.post('http://192.168.253.177:5001/uploadcall', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });
    //   alert('Activity uploaded successfully!');
    //   window.location.reload()
    // } catch (error) {
    //   console.error('Error uploading file:', error);
    // }
  };
    return(
        <>
             <div className="container bg-white mt-5 custom ">
                <div className="row">
                    <div className="col-lg-12 p-5">
                        <div class="col-lg-12 login-form">
                            <div class="col-lg-12 login-form">
                               <h1>User Profile</h1>
                               <Link to={`/bdm/${id}/${domain}/Profile/${lead_id}`}><span className="btn btn-primary float-end">Lead Profile</span></Link>
                               {/* <span className="btn btn-success float-end me-4 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Activity</span> */}
                               <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                    <div class="modal-header modleborderbottom">
                                        <h5 class="modal-title" id="exampleModalLabel">Lead Activity</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body p-5">
                                        <p></p>
                                        <div className="">
                                            <div>
                                            <form onSubmit={handleSubmit}>
                                                <input type="text" className="form-control" placeholder="Employee ID" value={employeeId} id="employeeId"name="employeeId"  /><br/>
                                                <input type="text" placeholder="Lead ID" className="form-control" value={lead_id} id="leadId" name="leadId"  /><br/>
                                                {/* <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} /><br/> */}
                                                <textarea className=" form-control" id="note" name="note" placeholder="notes"></textarea>
                                                <label class="form-control-label text-black">Lead Status</label>
                                                    <select class="list-dt d-block col-lg-12 col-12 boder" name="status" id="status" >
                                                        <option>select the Lead status</option>
                                                        {status.map((value,index)=>(
                                                            <option value={value.id}>{value.status}</option>
                                                        ))}
                                                    </select>
                                                <button type="submit" className="btn btn-success">Upload File</button>
                                                </form>
                                            </div>
                                                   
                                        </div>

                                    </div>
                                    
                                    </div>
                                </div>
                        </div>
                               <table class="table table-hover table-wrap">
                            <thead class="thead-light">
                                <tr>    
                                    <th scope="col">lead id</th>
                                    {/* <th scope="col">Conversation</th> */}
                                    <th scope="col">Note</th>
                                    <th scope="col">Date</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {activity.map((value,index)=>( 
                                    <>

                                        <tr>
                                            <td>
                                                <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2"/>
                                                {value.lead_id}
                                            </td>
                                            {/* <td> */}
                                                
                                            {/* <audio controls>
                                            
                                                <source src={audio} type="audio/mpeg"/>
                                          
                                            </audio> */}
                                            
                                            {/* <audio controls>
                                                <source src="http://localhost:3000/uploadcall/file_example_MP3_5MG.mp3" type="audio/mpeg" />
                                                Your browser does not support the audio element.
                                            </audio> */}
                                             {/* <audio controls src="file:///E:/crm/server/uploadcall/file_example_MP3_5MG.mp3" /> */}
                                            {/* </td> */}
                                            <td className="wr"><p>{value.note}</p></td>
                                            <td>{value.timesnap}</td>
                                            {/* <td >
                                                <Link to={`profile/${value.lead_id}`}><button className="btn btn-primary">View</button></Link>                                               
                                            </td> */}

                                        </tr>
                                    </>
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
