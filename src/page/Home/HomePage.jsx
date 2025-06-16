import React from 'react'
import { IoIosMore } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import profile from "/pwa-192x192.png"
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineTouchApp } from "react-icons/md";
import { LiaClipboardListSolid } from "react-icons/lia";
import { CiViewTable } from "react-icons/ci";
import { PiListPlusBold } from "react-icons/pi";
import { SlEnvelopeOpen } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io";
import { useState, useEffect } from 'react';

function HomePage() {

  // const [permission, setPermission] = useState(Notification.permission);

  // useEffect(() => {
  //   if ("Notification" in window && permission !== "granted") {
  //     Notification.requestPermission().then(setPermission);
  //   }
  // }, []);

  const handleClick = () => {
    // if ("Notification" in window && permission === "granted") {
    //   new Notification("Hello from PWA!", {
    //     body: "This is a local notification.",
    //     icon: "/pwa-192x192.png", // Make sure this exists in /public
    //   });
    // } else {
    //   alert("Please allow notification permission first.");
    // }
    if("Notification" in window && Notification.permission !== "granted"){
      Notification.requestPermission().then(permission=>{
        const uniqueTag = 'vibration-sample-' + Date.now();
        if(permission === "granted"){
          new Notification("Hi There")
        }
      })
    }
  };

    const bgImage = {
      backgroundSize:'cover',
      height:'100vh',
      backgroundPosition: 'center'
    }
    const sizeFont = {
      fontSize:'15px'
    }
    
  return (
    <div >
      {/* <Starter />
      <AboutMe /> */}
      <div style={{height:'calc(100vh - 75vh)'}}>
          <div className='container d-flex justify-content-between align-items-center pt-3'>
        <IoIosMore style={{fontSize:"20px"}}/>
        <h4 className='mb-0'>SRR HR</h4>
        <FaRegBell style={{fontSize:"20px"}}/>
      </div>
        <div className='container mt-5 d-flex align-items-center'>
            <img src={profile} alt="" style={{borderRadius:"50%", width:"80px", border:"1px solid green"}}/>
            <div className='ms-2'>
              <h5 className='mb-0'>Songheak Chanratanak</h5>
              <p className='mb-0'>IT Officer</p>
            </div>
        </div>
        <div className='mt-3 container d-flex justify-content-between'>
              <div className='border rounded p-2 bg-white'>
                <div className='border-start border-3 ps-2 me-3 border-success'>
                  <div className='d-flex align-items-center'>
                    <p className='mb-0'><FaMapMarkedAlt className='me-2 fs-6'/>Information Technology</p>
                  </div>
                  <p className='mb-0'>Russey Keo</p>
                </div>
              </div>
              <div className='border rounded bg-success' style={{padding:'5px'}}>
                <p className='border rounded-3 bg-white mb-0' style={{padding:'2px'}}>JUN</p>
                <p className='mb-0 text-center text-white fw-bold'>4</p>
              </div>
              <button className='btn btn-white border rounded-circle p-2 position-relative shadow bg-white' style={{width:'70px'}} onClick={handleClick}>
                <MdOutlineTouchApp className='position-absolute top-50 start-50 translate-middle text-success' style={{fontSize:"40px"}}/>
              </button>
          </div>
      </div>
          <div style={{height:'75vh', backgroundColor:'whitesmoke'}}>
              <div className=' container' style={{paddingTop:'60px'}}>
            <div className=' border rounded p-2 shadow-sm bg-white'>
              <div className='d-flex justify-content-between'>
                <p className='mb-0 fw-bold'>Wednesday</p>
                <p className='mb-0'>SHIFT2</p>
              </div>
              <div className='mt-2 d-flex justify-content-between'>
                <div className='text-center'>
                  <p className='mb-0'>Check In</p>
                  <p className='mb-0'>07:59 AM</p>
                  <p className='mb-0 mt-1'>Late</p>
                  <p className='mb-0'>--:--</p>
                </div>
                <div className='text-center'>
                  <p className='mb-0'>Check Out</p>
                  <p className='mb-0'>07:59 AM</p>
                  <p className='mb-0 mt-1'>Late</p>
                  <p className='mb-0'>--:--</p>
                </div>
                <div className='text-center'>
                  <p className='mb-0'>Check In</p>
                  <p className='mb-0'>07:59 AM</p>
                  <p className='mb-0 mt-1'>Late</p>
                  <p className='mb-0'>--:--</p>
                </div>
                <div className='text-center'>
                  <p className='mb-0'>Check Out</p>
                  <p className='mb-0'>07:59 AM</p>
                  <p className='mb-0 mt-1'>Late</p>
                  <p className='mb-0'>--:--</p>
                </div>
              </div>
            </div>
          </div>
            <div className='container mt-3'>
              <div className=" row ">
                <div className="col-4 rounded mb-3">
                  <div className="border rounded p-3 text-center shadow-sm bg-white">
                    <LiaClipboardListSolid className='text-success' style={{fontSize:'50px'}}/>
                    <p className='mb-0' style={sizeFont}>Attendance</p>
                  </div>
                </div>
                <div className="col-4 rounded mb-3 text-center">
                  <div className="border rounded pt-3 shadow-sm bg-white">
                    <CiViewTable className='text-success' style={{fontSize:'50px'}}/>
                    <p style={sizeFont}>Leave Entitle</p>
                  </div>
                </div>
                <div className="col-4 rounded mb-3 text-center">
                  <div className="border rounded pt-3 shadow-sm bg-white">
                    <PiListPlusBold className='text-success' style={{fontSize:'50px'}}/>
                    <p style={sizeFont}>Leave Request</p>
                  </div>
                </div>
                <div className="col-4 rounded mb-3 text-center">
                  <div className="border rounded pt-3 shadow-sm bg-white">
                    <SlEnvelopeOpen className='text-success' style={{fontSize:'50px'}}/>
                    <p style={sizeFont}>Pay Slip</p>
                  </div>
                </div>
                <div className="col-4 rounded mb-3 text-center">
                  <div className="border rounded pt-3 shadow-sm bg-white">
                    <IoIosPeople className='text-success' style={{fontSize:'50px'}}/>
                    <p style={sizeFont}>Booking Room</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
    </div>
  )
}

export default HomePage