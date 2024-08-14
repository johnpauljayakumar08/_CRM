import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login } from './Components/Login/login';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import {  Activityaverall, Addprofileoverall, Adduseroverall, Adminoverall, Bdeoverall, Profileoverall,Bdeoverallgl, Addmanualprofileoverall, Bdmoverall, Addmanualprofileoverallbdm, Profileoverallbdm, Activityaverallbdm } from './Components/Dashboard/overall/overall';
import UserForm from './example';
import { Manager } from './Components/Dashboard/manager/manager';
import { Bde } from './Components/Dashboard/BDE/bde';
import { Bdm } from './Components/Dashboard/BDM/bdm';
import { Addprofile } from './Components/Add_Profile/addprofile';
import CountrySelectionForm from './example';
import CountrySelector from './example';
import RunScriptButton from './Components/button.js'
import ScriptOutputPage from './Components/outscreen.js';
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>

            {/* <Route path='/' element={<RunScriptButton/>}/>  */}
            {/* <Route path="/script-output" element={<ScriptOutputPage />} /> */}
            <Route path='/admin/:id' element={<Adminoverall/>}/>
            <Route path='/addprofile/:id' element={<Addprofileoverall/>}/>
            <Route path='/adduser/:id' element={<Adduseroverall/>}/>
            <Route path='/manager/:id' element={<Manager/>}/>
            <Route path='/bde/:id/:domain' element={<Bdeoverall/>}/>
            <Route path='/bdm/:id/:domain' element={<Bdmoverall/>}/>
            <Route path='/bde/:id/:domain/profile/:lead_id' element={<Profileoverall/>}/>
            <Route path='/bdm/:id/:domain/profile/:lead_id' element={<Profileoverallbdm/>}/>
            <Route path='/bde/:id/:domain/addmanualprofile' element={<Addmanualprofileoverall/>}/>
            <Route path='/bdm/:id/:domain/addmanualprofile' element={<Addmanualprofileoverallbdm/>}/>
            <Route path='/bde/:id/:domain/activity/:lead_id' element={<Activityaverall/>}/>
            <Route path='/bdm/:id/:domain/activity/:lead_id' element={<Activityaverallbdm/>}/>
            {/* <Route path='/' element={<Bdeoverallgl/>}/> */}
        </Routes>
    </BrowserRouter>
    // <UserForm/>
    // <CountrySelector/>
   
  );
}

export default App;
