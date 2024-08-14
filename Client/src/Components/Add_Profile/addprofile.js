import React,{useState} from "react";
import axios from "axios";
export function Addprofile(){
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

                                    </div>
                                    
                                    </div>
                                </div>
                        </div>
        </>
    );
}