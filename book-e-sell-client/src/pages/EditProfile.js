import React, { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import "./EditProfile.css";
import axios from "axios";

const EditProfile = () => {

  const id = useSelector(state=>state.user.id);
  const [user,setUser] = useState({});
  const [updated,setUpdate]=useState(false);
  useEffect(()=>{
    const FetchData = async() => {
      await axios.get(`/users/${id}`).then(res=>{
        console.log(res);
        setUser(res.data.user);
      }).catch(err=>{
        console.log(err);
      })
    }
    FetchData();
  },[updated]);
  const updateHandler = async() => {
    console.log(user);
    await axios.put(`/users/${id}`,user).then(res=>{
      console.log(res);
      alert("User Updated Successfully")
      setUpdate(true);
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <>
      <div className="container">
        {user && (<div className="edit-profile-wrapper">
          <div className="left-wrapper">
            <label htmlFor="firstname" className="inputlabel">
              First Name
            </label>
            <input type="text" name="firstname" value={user.firstName} className="inputfield" onChange={(e)=>{setUser({...user,firstName:e.target.value})}}/>
            <label htmlFor="lastname" className="inputlabel">
              Last Name
            </label>
            <input type="text" name="lastname" value={user.lastName} required className="inputfield" onChange={(e)=>{setUser({...user,lastName:e.target.value})}} />
            <label htmlFor="email" className="inputlabel">
              Email
            </label>
            <input type="text" name="email" value={user.email} className="inputfield" />
            <label htmlFor="mobile" className="inputlabel">
              Mobile
            </label>
            <input type="text" name="mobile" value={user.mobileNo} className="inputfield" onChange={(e)=>{setUser({...user,mobileNo:e.target.value})}}/>
          </div>
          <div className="right-wrapper">
            {/* <div className="profileUpdate">
              <div className="profileContainer">
                <img className="profilePicture" src="images/profile.png"/>
              </div>
              <button className="uploadbtn">Upload New Image</button>
            </div> */}
          </div>
        </div>)}
        <button style={{marginLeft:'30px'}} onClick={updateHandler}>UPDATE</button>
      </div>
    </>
  );
};

export default EditProfile;
