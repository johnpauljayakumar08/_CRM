import React from "react";
import { Adminmenu } from "../menu/menu";
import { Admin } from "../pages/admin";
import './overall.css'
import { Adduser } from "../../Add_User/add_user";
import { Bdemenu } from "../BDE/bdemenu";
import { Bde } from "../BDE/bde";
import { Addprofile } from "../../Add_Profile/addprofile";
import { Profile } from "../pages/profile";
import { Activity } from "../pages/activity";
import {Bdegl} from "../BDE/bdegl.js"
import { Addmanualprofile } from "../pages/addglprofile.js";
import { Bdmmenu } from "../BDM/bdmmenu.js";
import { Bdm } from "../BDM/bdm.js";
import { Addmanualprofilebdm } from "../pages/addglprofilebdm.js";
import { Profilebdm } from "../pages/profilebdm.js";
import { Activitybdm } from "../pages/activitybdm.js";
export function Adminoverall(){
    return(
       <>
            <div className="container-fluid row">
                    <div className="col-lg-2">
                        <Adminmenu/>
                    </div>
                    <div className="col-lg-10 bgcolorset">
                        <Admin/>
                    </div>
                

            </div>
       </>
    );
}
export function Adduseroverall(){
    return(
       <>
            <div className="container-fluid row backgroundimage">
                    <div className="col-lg-2 ">
                        <Adminmenu/>
                    </div>
                    <div className="col-lg-9 bgcolorglass">
                        <Adduser/>
                    </div>
                

            </div>
       </>
    );
}
export function Addprofileoverall(){
    return(
       <>
            <div className="container-fluid row backgroundimage">
                    <div className="col-lg-2 ">
                        <Adminmenu/>
                    </div>
                    <div className="col-lg-9 bgcolorglass">
                        <Addprofile/>
                    </div>
                

            </div>
       </>
    );
}

export function Profileoverall(){
    return(
       <>
            <div className="container-fluid row backgroundimage">
                    <div className="col-lg-2 ">
                        <Bdemenu/>
                    </div>
                    <div className="col-lg-9 bgcolorglass">
                        <Profile/>
                    </div>
                

            </div>
       </>
    );
}
export function Addmanualprofileoverall(){
    return(
       <>
            <div className="container-fluid row backgroundimage">
                    <div className="col-lg-2 ">
                        <Bdemenu/>
                    </div>
                    <div className="col-lg-9 bgcolorglass">
                        <Addmanualprofile/>
                    </div>
                

            </div>
       </>
    );
}

export function Bdeoverall(){
    return(
       <>
            <div className="container-fluid row backgroundimage">
                    <div className="col-lg-2 ">
                        <Bdemenu/>
                    </div>
                    <div className="col-lg-9 bgcolorglass">
                        <Bde/>
                    </div>
                

            </div>
       </>
    );
}
export function Activityaverall(){
    return(
       <>
            <div className="container-fluid row backgroundimage">
                    <div className="col-lg-2 ">
                        <Bdemenu/>
                    </div>
                    <div className="col-lg-9 bgcolorglass">
                        <Activity/>
                    </div>
                

            </div>
       </>
    );
}
export function Bdeoverallgl(){
    return(
       <>
            <div className="container-fluid row backgroundimage">
                    <div className="col-lg-2 ">
                        <Bdemenu/>
                    </div>
                    <div className="col-lg-9 bgcolorglass">
                        <Bdegl/>
                    </div>
                

            </div>
       </>
    );
}
export function Bdmoverall(){
    return(
       <>
            <div className="container-fluid row backgroundimage">
                    <div className="col-lg-2 ">
                        <Bdmmenu/>
                    </div>
                    <div className="col-lg-9 bgcolorglass">
                        <Bdm/>
                    </div>
                

            </div>
       </>
    );
}
export function Addmanualprofileoverallbdm(){
    return(
       <>
            <div className="container-fluid row backgroundimage">
                    <div className="col-lg-2 ">
                        <Bdmmenu/>
                    </div>
                    <div className="col-lg-9 bgcolorglass">
                        <Addmanualprofilebdm/>
                    </div>
                

            </div>
       </>
    );
}
export function Profileoverallbdm(){
    return(
       <>
            <div className="container-fluid row backgroundimage">
                    <div className="col-lg-2 ">
                        <Bdmmenu/>
                    </div>
                    <div className="col-lg-9 bgcolorglass">
                        <Profilebdm/>
                    </div>
                

            </div>
       </>
    );
}
export function Activityaverallbdm(){
    return(
       <>
            <div className="container-fluid row backgroundimage">
                    <div className="col-lg-2 ">
                        <Bdmmenu/>
                    </div>
                    <div className="col-lg-9 bgcolorglass">
                        <Activitybdm/>
                    </div>
                

            </div>
       </>
    );
}