import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Topbar from "../components/Topbar";
import "./EditProfile.css";
import axios from "axios";

const EditProfile = () => {

  const id = useSelector(state=>state.user.id);
  const [user,setUser] = useState({});
  useEffect(()=>{
    const FetchData = async() => {
      await axios.get(`/users/${id}`).then(res=>{
        console.log(res);
        setUser(res.data.user);
      }).catch(err)
    }
    FetchData();
  },[])

  return (
    <>
      <div className="container">
        <h2 className="pageTitle">EDIT PROFILE</h2>
        {user && (<div className="edit-profile-wrapper">
          <div className="left-wrapper">
            <label htmlFor="firstname" className="inputlabel">
              First Name
            </label>
            <input type="text" name="firstname" value={user.firstName} className="inputfield"/>
            <label htmlFor="lastname" className="inputlabel">
              Last Name
            </label>
            <input type="text" name="lastname" value={user.lastName} className="inputfield" />
            <label htmlFor="email" className="inputlabel">
              Email
            </label>
            <input type="text" name="email" value={user.email} className="inputfield" />
            <label htmlFor="mobile" className="inputlabel">
              Mobile
            </label>
            <input type="text" name="mobile" value={user.mobileNo} className="inputfield" />
          </div>
          <div className="right-wrapper">
            <div className="profileUpdate">
              <div className="profileContainer">
                <img className="profilePicture" src="images/profile.png"/>
              </div>
              <button className="uploadbtn">Upload New Image</button>
            </div>
          </div>
        </div>)}
      </div>
    </>
  );
};

export default EditProfile;
